/* eslint-disable sort-imports */
/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignUpData } from 'types/user-sign-up-data';
// import { UserSignInData } from 'types/user-sign-in-data';
import { Observable, take, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { constants } from './../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthorithationService {
  // private user$ = new BehaviorSubject<UserSignUpData>(null);
  
  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient) {}

  postLoginUser(email: string, password: string): Observable<{ token: string }> {
    const url = `${constants.baseApiUrl}auth/login`;
    return this.http.post<{ token: string }>(url, { email, password }).pipe(
      take(1),
      tap((response: { token: string }) => {
        // eslint-disable-next-line no-undef
        localStorage.setItem('token', response.token);
        const decodedToken: UserSignUpData = jwt_decode(response.token);
      })
    );
  }

  postRegisterUser(userData: UserSignUpData): Observable<UserSignUpData> {
    const url = `${constants.baseApiUrl}auth/register`;
    return this.http.post<UserSignUpData>(url, userData).pipe(take(1));
  }
}
