import { Injectable } from '@angular/core';
import { Course } from "@core/models/course";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public hostUrl: string = 'http://localhost:3004';
  constructor(private httpClient: HttpClient){}

  getCourses(query: string, count: number = 5): Observable<Course[]> {
    let params = new HttpParams()
      .set('textFragment', query)
      .set('sort', 'creationDate')
      .set('start', 0)
      .set('count', count);
    return this.httpClient.get<Course[]>(`${this.hostUrl}/courses`, {params});
    //return this.courses$;
    //return CoursesData;
  }

  addCourse(newCourse: Course | null): Observable<Course> {
    console.log('new course was added', newCourse);
    return this.httpClient.post<Course>(`${this.hostUrl}/courses`, newCourse);
  }

  updateCourse(id: number, newCourseData: Course | null): Observable<Course> {
    console.log('update course', newCourseData);
    return this.httpClient.patch<Course>(`${this.hostUrl}/courses/${id}`, newCourseData);
  }

  deleteCourse(id: number): Observable<Course> {
    console.log('chosen course was deleted');
    return this.httpClient.delete<Course>(`${this.hostUrl}/courses/${id}`);
  }

  getCourseById(id: number): Observable<Course> {
    //return CoursesData.find(item => item.id === id);
    return this.httpClient.get<Course>(`${this.hostUrl}/courses/${id}`);
  }
}
