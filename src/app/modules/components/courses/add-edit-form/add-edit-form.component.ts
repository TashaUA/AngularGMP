import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Course} from "@core/models/course";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CoursesService} from "@core/services/courses.service";
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {AddEditPageComponent} from '@pages/add-edit-page/add-edit-page.component';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditFormComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public courseToEditId: number,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditPageComponent>,
    ) {
    console.log(this.courseToEditId, this.coursesService.getCourseById(this.courseToEditId));
  }

  public course: Course | null = this.coursesService.getCourseById(this.courseToEditId) || null;
  public isEdit: boolean = !!this.courseToEditId;

  addEditForm = this.formBuilder.group({
    title: this.course!.title,
    description: this.course!.description,
    creationDate: this.course!.creationDate,
    duration: this.course!.duration
  });

  addCourse(): void {
    this.coursesService.addCourse(this.course);
    this.dialogRef.close();
  }

  editCourse () {
    this.coursesService.updateCourse(this.course!.id, this.course);
    this.dialogRef.close();
  }

  redirectToCourses () {
    this.dialogRef.close();
  }

}
