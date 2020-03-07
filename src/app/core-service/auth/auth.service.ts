import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticar(usuario: string, senha: string): boolean {
    if (usuario === 'angular' && senha === 'udemy') {
      return true;
    } else {
      return false;
    }

  }
}
