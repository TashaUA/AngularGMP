import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from "@ng-web-apis/common";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( @Inject(LOCAL_STORAGE) readonly localStorage: Storage,) { }

  login(user: string) {
    this.localStorage.setItem('user', JSON.stringify({ login: user, token: Math.random().toString(36).substr(2) }));
    console.log('logged in successfully');
  }

  logout() {
    this.localStorage.removeItem('user');
    console.log('logout is successful');
  }

  isAuthenticated() {
    console.log('is auth!!!!!!!!', !!this.localStorage.getItem('user'));
   return !!this.localStorage.getItem('user');
  }

  getUserInfo() {
    return localStorage.getItem('user');
  }
}
