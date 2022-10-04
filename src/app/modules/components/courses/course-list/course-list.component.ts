import { Component, OnInit } from '@angular/core';
import { Course } from "@core/models/course";
import { CoursesData } from "@mock/courses";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courses: Course[] = CoursesData;

  ngOnInit() {
    console.log(this.courses);
  }

  onLoadMore () {
    console.log('load more button clicked');
  }

  onDelete(course: Course) {
    console.log('course id from child', course.id);
  }

  courseTrackBy(index: number, course: Course) {
    return course.id;
  }
}
