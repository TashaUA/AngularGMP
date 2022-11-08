import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from "@ng-web-apis/common";
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from "@core/models/user";
import {Observable, tap} from "rxjs";

const TOKEN: string = 'token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public hostUrl: string = 'http://localhost:3004';
  constructor( @Inject(LOCAL_STORAGE) readonly localStorage: Storage, private httpClient: HttpClient) { }

  login(user: User) {
    return this.httpClient.post<any>(`${this.hostUrl}/auth/login`, user).pipe(
      tap(res => {
        this.localStorage.setItem(TOKEN, res?.token);
        console.log('logged in successfully');
      })
    );
  }

  logout() {
    this.localStorage.removeItem(TOKEN);
    console.log('logout is successful');
  }

  isAuthenticated() {
    console.log('is auth!!!!!!!!', !!this.localStorage.getItem(TOKEN));
   return !!this.localStorage.getItem(TOKEN);
  }

  getUserInfo(): Observable<string> {
    const token: string = localStorage.getItem(TOKEN) || '';
      let params = new HttpParams()
        .set(TOKEN, token);
    return this.httpClient.post<string>(`${this.hostUrl}/auth/userinfo`, params);
  }
}
