import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Course } from "@core/models/course";
import { CoursesService } from '@core/services/courses.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {

  public courses$: Observable<Course[]>;
  public perPage: number = 5;
  public count: number = 5;
  public searchQuery: string = '';

  constructor(private coursesService: CoursesService, private cd: ChangeDetectorRef) {}

  getCourses(): void {
    this.courses$ = this.coursesService.getCourses(this.searchQuery);
  }

  ngOnInit() {
    this.getCourses();
  }

  onLoadMore () {
    console.log('load more button clicked');
    this.courses$ = this.coursesService.getCourses(this.searchQuery, this.count);
    this.count += this.perPage;
  }

  onDelete(course: Course) {
    console.log('course id from child', course.id);
    let text = "Do you really want to delete this course?";
    if (confirm(text)) {
      console.log('chosen course was deleted');
      this.coursesService.deleteCourse(course.id).subscribe();
    } else {
      console.log('chosen course was not deleted');
    }
  }

  courseTrackBy(index: number, course: Course) {
    return course.id;
  }

  onSearched(query: string ) {
    this.searchQuery = query;
    this.coursesService.getCourses(this.searchQuery).subscribe();
    this.getCourses();
  }
}
