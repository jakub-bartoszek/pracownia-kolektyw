import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  @Output() closeModal = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  firstName: string = ''; // Pole na imię
  lastName: string = ''; // Pole na nazwisko
  isLoginView: boolean = true;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.errorMessage = '';
  }

  close() {
    this.closeModal.emit();
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 8;
  }

  login() {
    this.errorMessage = '';

    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.close();
      })
      .catch((error) => {
        this.errorMessage =
          'Nieprawidłowe hasło lub adres e-mail.' + error.message;
      });
  }

  register() {
    this.errorMessage = '';

    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Nieprawidłowy adres e-mail.';
      return;
    }

    if (!this.validatePassword(this.password)) {
      this.errorMessage = 'Hasło musi mieć co najmniej 8 znaków.';
      return;
    }

    // Rejestrujemy użytkownika z imieniem i nazwiskiem
    this.authService
      .register(this.email, this.password, this.firstName, this.lastName)
      .then(() => {
        this.toggleView(); // Po rejestracji przełączamy na ekran logowania
      })
      .catch((error) => {
        this.errorMessage = 'Błąd rejestracji: ' + error.message;
      });
  }
}
