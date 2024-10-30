import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private currentRoleSubject = new BehaviorSubject<string | null>(null);
  currentRole$ = this.currentRoleSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  private isAuthModalOpenSubject = new BehaviorSubject<boolean>(false);
  isAuthModalOpen$ = this.isAuthModalOpenSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, async (user) => {
      this.currentUserSubject.next(user);
      this.isLoggedInSubject.next(!!user);
      if (user) {
        const role = await this.getUserRole(user.uid);
        this.currentRoleSubject.next(role);
        this.isAdminSubject.next(role === 'admin');
      } else {
        this.currentRoleSubject.next(null);
        this.isAdminSubject.next(false);
      }
    });
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      async (userCredential) => {
        const role = await this.getUserRole(userCredential.user.uid);
        this.currentRoleSubject.next(role);
        this.isAdminSubject.next(role === 'admin');
        this.isLoggedInSubject.next(true);
        window.location.reload();
      }
    );
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      async (userCredential) => {
        const uid = userCredential.user.uid;

        const userDocRef = doc(this.firestore, `users/${uid}`);
        await setDoc(userDocRef, {
          firstName,
          lastName,
          email,
          role: 'user',
        });
      }
    );
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.currentRoleSubject.next(null);
      this.isAdminSubject.next(false);
      this.isLoggedInSubject.next(false);
      window.location.reload();
    });
  }

  openAuthModal() {
    this.isAuthModalOpenSubject.next(true);
  }

  closeAuthModal() {
    this.isAuthModalOpenSubject.next(false);
  }

  async getUserRole(uid: string): Promise<string | null> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      return userData['role'] || null;
    } else {
      return null;
    }
  }

  async getUserInfo(
    uid: string
  ): Promise<{ firstName: string; lastName: string } | null> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      return {
        firstName: userData['firstName'],
        lastName: userData['lastName'],
      };
    } else {
      return null;
    }
  }
}
