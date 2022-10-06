import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from "@core/models/course";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() public course!: Course;
  @Output() onDeleteEvent = new EventEmitter<Course>();

  onEdit () {
    console.log('edit button clicked');
  }

  onDelete () {
    console.log('delete button clicked');
    this.onDeleteEvent.emit(this.course);
  }
}
