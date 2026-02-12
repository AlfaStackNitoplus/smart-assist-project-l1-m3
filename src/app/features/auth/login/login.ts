import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { UserRole } from '../../../core/models/user.model';
import { MockData } from '../../../assets/mock-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);

  username = '';
  password = '';

  onLogin() {
    // Requirement 8: All intelligence moves to Services
    const user = MockData.users.find(
      u => u.email === this.username && u.password === this.password
    );

    if (!user) {
      alert('Invalid email or password');
      return;
    }
    switch (user.role) {

      case UserRole.SUPERVISOR:
        this.router.navigate(['/supervisor'], {
          queryParams: {
            role: user.role,
            id: user.userId
          }
        });
        break;

      case UserRole.SUPPORT_ENGINEER:
        this.router.navigate(['/support'], {
          queryParams: {
            role: user.role,
            id: user.userId
          }
        });
        break;

      case UserRole.END_USER:
        this.router.navigate(['/user'], {
          queryParams: {
            role: user.role,
            id: user.userId
          }
        });
        break;
    }
  }
}