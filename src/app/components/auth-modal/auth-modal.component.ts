import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ShowIconComponent } from '../../icons/show-icon/show-icon.component';
import { HideIconComponent } from '../../icons/hide-icon/hide-icon.component';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, ShowIconComponent, HideIconComponent],
  selector: 'app-auth',
  templateUrl: './auth-modal.component.html',
})
export class AuthModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  isLoginView: boolean = true;
  isPasswordVisible: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.errorMessage = '';
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    console.log(this.isPasswordVisible);
  }

  close() {
    this.closeModal.emit();
  }

  login() {
    this.errorMessage = '';

    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.close();
      })
      .catch((error) => {
        this.errorMessage = 'Nieprawidłowe hasło lub adres e-mail.';
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

    this.authService
      .register(this.email, this.password, this.firstName, this.lastName)
      .then(() => {
        this.toggleView();
      })
      .catch((error) => {
        this.errorMessage = 'Błąd rejestracji';
      });
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 8;
  }
}
