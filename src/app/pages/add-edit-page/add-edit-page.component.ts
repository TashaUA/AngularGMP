import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEditFormComponent} from "../../modules/components/courses/add-edit-form/add-edit-form.component";
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.scss']
})
export class AddEditPageComponent implements OnInit {

  public courseId: number = 0;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router,) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.courseId = +params['id'];
    });
    this.openDialog();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-edit-course-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "800px";
    dialogConfig.data = +this.courseId;

    const dialogRef = this.dialog.open(AddEditFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/'], { relativeTo: this.route });
    });
  }
}
