import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CoursesService} from "@core/services/courses.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEditFormComponent} from "../add-edit-form/add-edit-form.component";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseComponent {

  constructor(private coursesService: CoursesService, public matDialog: MatDialog) {}

  onAddCourse(): void {
    this.openAddNewCourseModal();
  }

  openAddNewCourseModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-auth-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "800px";
    this.matDialog.open(AddEditFormComponent, dialogConfig);
  }
}
