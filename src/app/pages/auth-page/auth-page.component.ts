import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AuthComponent} from "../../modules/components/auth/auth.component";
import {AddEditFormComponent} from "../../modules/components/courses/add-edit-form/add-edit-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {

  constructor( public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-auth-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    const dialogRef = this.dialog.open(AuthComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
