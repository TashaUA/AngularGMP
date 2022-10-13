import { Injectable } from '@angular/core';
import { Course } from "@core/models/course";
import { CoursesData } from "@mock/courses";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(): Course[] {
    return CoursesData;
  }

  addCourse(newCourse: Course) {
    console.log('new course was added', newCourse);
  }

  updateCourse(id: number, newCourseData: Course) {
    console.log('update course', newCourseData);
  }

  deleteCourse(id: number) {
    console.log('chosen course was deleted');
  }

  getCourseById(id: number) {
    return CoursesData.filter(item => item.id === id);
  }
}
