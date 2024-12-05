import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ShowIconComponent } from '../../icons/show-icon/show-icon.component';
import { HideIconComponent } from '../../icons/hide-icon/hide-icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, ShowIconComponent, HideIconComponent],
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

  constructor(private authService: AuthService) {}

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.isPasswordVisible = false;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    console.log(this.isPasswordVisible);
  }

  onPasswordInput(password: string) {
    if (!password) {
      this.isPasswordVisible = false;
    }
  }

  close() {
    this.closeModal.emit();
  }

  login(event: Event, email: string, password: string) {
    event.preventDefault();

    this.authService.login(email, password).then(
      () => {
        this.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  register(
    event: Event,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    event.preventDefault();

    this.authService
      .register(email, password, firstName, lastName)
      .then(() => {
        this.toggleView();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
