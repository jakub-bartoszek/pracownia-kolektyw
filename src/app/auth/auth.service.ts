import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  currentRole: string | null = null;

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, async (user) => {
      this.currentUserSubject.next(user);
      if (user) {
        this.currentRole = await this.getUserRole(user.uid);
      }
    });
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      async (userCredential) => {
        await this.getUserRole(userCredential.user.uid);
        window.location.reload();
      }
    );
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth).then(() => {
      window.location.reload();
    });
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

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentRole === 'admin';
  }
}
