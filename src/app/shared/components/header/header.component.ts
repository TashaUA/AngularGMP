import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthPageComponent } from "../../../pages/auth-page/auth-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(private authService: AuthService, public matDialog: MatDialog) {}

  logout(e: any) {
    e.preventDefault();
    this.authService.logout();
  }

}
