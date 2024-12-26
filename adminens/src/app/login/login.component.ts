import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auths/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { login: '',password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        const token = response.token;
        this.authService.saveToken(token);
        const role = response.role;
        if (role === 'ADMIN') {
          this.router.navigate(['/admin']);        
        } else if (role === 'ENSEIGNANT') {
          this.router.navigate(['/enseignant']);
        }
      },
      error: (err) => {
        alert(err.error.error || 'Login failed');
      },
    });
  }


}
