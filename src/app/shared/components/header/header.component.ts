import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit{

  public user: any = null;
  public userName: string = '';
  constructor(private authService: AuthService,
              public matDialog: MatDialog,
              private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
   this.authService.getUserInfo().subscribe(userData => {
     this.user = userData;
     this.userName = this.user.name.first;
     this.cd.markForCheck();});
  }

  logout(e: any) {
    e.preventDefault();
    this.authService.logout();
  }

}
