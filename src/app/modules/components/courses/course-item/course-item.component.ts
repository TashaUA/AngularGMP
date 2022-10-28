import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from "@core/models/course";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEditFormComponent} from "../add-edit-form/add-edit-form.component";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input() public course!: Course;
  @Output() onDeleteEvent = new EventEmitter<Course>();

  constructor(public matDialog: MatDialog) {}

  onEdit () {
    this.openEditCourseModal();
    console.log('edit button clicked');
  }

  onDelete () {
    console.log('delete button clicked');
    this.onDeleteEvent.emit(this.course);
  }

  openEditCourseModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-edit-course-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "800px";
    dialogConfig.data = this.course;
    this.matDialog.open(AddEditFormComponent, dialogConfig);
  }
}
