import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MockData } from '../../../assets/mock-data';
@Component({
  selector: 'app-login',
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  title: string = 'Login';
  username = '';
  password = '';
  constructor(private router: Router) { }

  onLogin() {
    const user = MockData.users.find(u => u.email === this.username && u.password === this.password);

    if (!user) {
      alert('Invalid email or password');
      return;
    }
    switch (user.role) {

      case 'SUPERVISOR':
        this.router.navigate(['/supervisor'], {
          queryParams: {
            role: user.role,
            id: user.userId
          }
        });
        break;

      case 'SUPPORT_ENGINEER':
        this.router.navigate(['/support'], {
          queryParams: {
            role: user.role,
            id: user.userId
          }
        });
        break;

      case 'USER':
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
