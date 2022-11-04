import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Course} from "@core/models/course";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CoursesService} from "@core/services/courses.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {AddEditPageComponent} from '@pages/add-edit-page/add-edit-page.component';
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditFormComponent implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public courseToEditId: number,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditPageComponent>,
    ) {
    console.log(this.courseToEditId, this.coursesService.getCourseById(this.courseToEditId));
  }

  public course: Observable<Course> | null = null;
  public isEdit: boolean = !!this.courseToEditId;

  addEditForm: FormGroup;

  ngOnInit(){

    this.addEditForm = this.formBuilder.group({
      title: '',
      description: '',
      creationDate: '',
      duration: 0
    });

    if(this.courseToEditId) {
      this.course = this.coursesService.getCourseById(this.courseToEditId)
        .pipe(tap(course => this.addEditForm.patchValue(course)));
    }
  }

  addCourse() {
    console.log('--------',this.course, this.addEditForm.value);
    this.coursesService.addCourse(this.addEditForm.value).subscribe();
    this.dialogRef.close();
  }

  editCourse () {
   this.coursesService.updateCourse(this.courseToEditId, this.addEditForm.value).subscribe();
    this.dialogRef.close();
  }

  redirectToCourses () {
    this.dialogRef.close();
  }

}
