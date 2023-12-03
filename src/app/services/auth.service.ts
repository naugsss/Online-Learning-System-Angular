import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface AuthResponseData {
  code: number;
  message: string;
  status: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('', {
      email: email,
      password: password,
    });
  }
}
