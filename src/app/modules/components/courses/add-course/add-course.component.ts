import { Component } from '@angular/core';
import {CoursesService} from "@core/services/courses.service";
import { Course } from "@core/models/course";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  constructor(private coursesService: CoursesService) {}

  onAddCourse(): void {
    const newCourse: Course  = { id: 5, title: 'Newly added course', creationDate: '22/05/2022' };
    this.coursesService.addCourse(newCourse);
  }
}
