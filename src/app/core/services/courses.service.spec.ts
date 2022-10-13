import { TestBed } from '@angular/core/testing';
import {Course} from "@core/models/course";

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a course in an array", () => {
    const course: Course = {id: 1, title: 'www'};
    service.addCourse(course);
    expect(service.getCourses().length).toBeGreaterThanOrEqual(1);
  });
});
