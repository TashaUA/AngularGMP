import { CourseTypeDirective } from './course-type.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CourseListComponent} from "../../../modules/components/courses/course-list/course-list.component";
import {DebugElement} from "@angular/core";
import {OrderByDatePipe} from "@shared/pipes/sort/order-by.pipe";
import {FilterPipe} from "@shared/pipes/filter/filter.pipe";

describe('CourseTypeDirective', () => {
  let fixture: ComponentFixture<CourseListComponent>;
  let de: DebugElement; let el: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseTypeDirective, OrderByDatePipe, FilterPipe ]
    })
      .createComponent(CourseListComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have gray border', () => {
    const courseItem: HTMLElement = el.querySelector('div');
    const borderColor = courseItem.style.backgroundColor;
    console.log('borderColor', borderColor);
    expect(borderColor).toBe('var(--gray-light)');
  });

  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };

    const directive = new CourseTypeDirective(elRefMock);
    expect(directive).toBeTruthy();
  });

});

