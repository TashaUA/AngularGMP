import { Component, OnInit } from '@angular/core';
import {AuthService} from "@core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  login(e: any) {
    e.preventDefault();
    const user: string  = 'fakeuser';
    this.authService.login(user);
  }

  logout(e: any) {
    e.preventDefault();
    this.authService.logout();
  }

}
