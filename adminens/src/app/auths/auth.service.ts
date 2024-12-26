import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/Internote';

  constructor(private http: HttpClient) {}
  login(credentials: { login: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  getToken() {
    return localStorage.getItem('jwt');
  }

  isLoggedIn() {
    const token = this.getToken();
    return token;
  }

  logout() {
    localStorage.removeItem('jwt');
  }
}
