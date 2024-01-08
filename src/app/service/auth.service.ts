import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/api/v1/auth/signup", user);
  }
 
}
