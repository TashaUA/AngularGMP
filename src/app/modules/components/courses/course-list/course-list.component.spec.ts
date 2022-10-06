import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import {DebugElement} from "@angular/core";
import {SearchComponent} from "../search/search.component";
import {AddCourseComponent} from "../add-course/add-course.component";
import {OrderByDatePipe} from "@shared/pipes/sort/order-by.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "@shared/pipes/filter/filter.pipe";
import {DurationTimePipe} from "@shared/pipes/time/duration-time.pipe";

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let DE: DebugElement; let EL: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ CourseListComponent, CourseItemComponent, SearchComponent, AddCourseComponent, OrderByDatePipe, FilterPipe, DurationTimePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    DE = fixture.debugElement;
    EL = DE.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have course-item component', (() => {
    expect(EL.querySelector('app-course-item')).not.toBe(null);
  }));

  it('should click LoadMore button', () => {
    let btn = EL.querySelector('.courses__load-more--button');
    spyOn(component, 'onLoadMore');
    btn.click();

    expect(component.onLoadMore).toHaveBeenCalled();
  });

});
