import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

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

  login() {
    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.close();
      })
      .catch((error) => {
        this.errorMessage = 'Błąd logowania: ' + error.message;
      });
  }

  register() {
    this.authService
      .register(this.email, this.password)
      .then(() => {
        this.toggleView();
      })
      .catch((error) => {
        this.errorMessage = 'Błąd rejestracji: ' + error.message;
      });
  }
}
