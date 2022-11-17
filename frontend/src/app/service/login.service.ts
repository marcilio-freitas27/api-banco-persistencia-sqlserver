import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  jwtauth: string;
  constructor(private http: HttpClient) { 
    this.jwtauth = 'http://localhost:5000';
  }

  login(usuario: any, senha: any): Observable<boolean> {
    return this.http
      .post<{ token: string }>(`${this.jwtauth}/login`, {
        usuario: usuario,
        senha: senha,
      })
      .pipe(
        map((result: { token: string }) => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout(): boolean {
    localStorage.removeItem('access_token');
    return true;
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
