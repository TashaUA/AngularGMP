import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Course} from "@core/models/course";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CoursesService} from "@core/services/courses.service";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditFormComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public courseToEdit: Course,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder) { }

  public course: Course = this.courseToEdit || {title: '', description: '', creationDate: '', duration: 0};
  public isEdit: Boolean = !!this.courseToEdit;

  addEditForm = this.formBuilder.group({
    title: this.course.title,
    description: this.course.description,
    creationDate: this.course.creationDate,
    duration: this.course.duration
  });

  addCourse(): void {
    this.coursesService.addCourse(this.course);
  }

  editCourse () {
    this.coursesService.updateCourse(this.course.id, this.course);
  }

}
