import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private authService: AuthService) {}

  toggleView() {
    this.isLoginView = !this.isLoginView;
  }

  close() {
    this.closeModal.emit();
  }

  async signUp() {
    try {
      await this.authService.signUp(this.email, this.password);
      alert('Rejestracja udana! Sprawdź email, aby zweryfikować konto.');
      this.toggleView();
    } catch (error: any) {
      alert('Błąd: ' + error.message);
    }
  }

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password);
      alert('Zalogowano pomyślnie!');
      this.close();
    } catch (error: any) {
      alert('Błąd: ' + error.message);
    }
  }
}
