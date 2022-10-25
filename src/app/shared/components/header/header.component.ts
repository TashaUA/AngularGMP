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

  login(e: any) {
    e.preventDefault();
    const user: string  = 'fakeuser';
    this.authService.login(user);
    this.openModal();
  }

  logout(e: any) {
    e.preventDefault();
    this.authService.logout();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-auth-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    this.matDialog.open(AuthPageComponent, dialogConfig);
  }

}
