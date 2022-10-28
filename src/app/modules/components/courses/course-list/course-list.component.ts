import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Course } from "@core/models/course";
import { CoursesService } from '@core/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {

  public courses: Course[] = [];
  public searchQuery: string = '';

  constructor(private coursesService: CoursesService) {}

  getCourses(): void {
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit() {
    this.getCourses();
    console.log(this.courses);
  }

  onLoadMore () {
    console.log('load more button clicked');
  }

  onDelete(course: Course) {
    console.log('course id from child', course.id);
    let text = "Do you really want to delete this course?";
    if (confirm(text)) {
      console.log('chosen course was deleted');
      this.coursesService.deleteCourse(course.id);
    } else {
      console.log('chosen course was not deleted');
    }
  }

  courseTrackBy(index: number, course: Course) {
    return course.id;
  }

  onSearched(query: string ) {
    this.searchQuery = query;
    console.log('searchQuery', this.searchQuery)
  }
}
