import {ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from './course-item.component';
import { Course } from "@core/models/course";
import { first } from 'rxjs/operators';
import {DebugElement} from "@angular/core";

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseDe: any, courseEl, expectedCourse: Course;
  let DE: DebugElement; let EL: any;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    DE = fixture.debugElement;
    EL = DE.nativeElement;

    expectedCourse = {id: 42, title: 'Test Name', description: 'rrr'};
    component.course = expectedCourse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should raise onDelete event when clicked (triggerEventHandler)', () => {
    let courseDE = DE.query(By.css('.courses__item-button--delete'));
    let deletedCourse: Course | undefined;
    component.onDeleteEvent.pipe(first()).subscribe((course: Course) => deletedCourse = course);

    courseDE.triggerEventHandler('click');
    expect(deletedCourse).toBe(expectedCourse);
  });
*/

  it('should raise onDelete event when clicked (triggerEventHandler)', () => {
    const spy = spyOn(component.onDeleteEvent, 'emit');
    let courseDE = EL.querySelector('.courses__item-button--delete');

    courseDE.click();
    expect(spy).toHaveBeenCalledWith(expectedCourse);
  });

  it('should display title after detectChanges()', () => {
    let title = EL.querySelector('.courses__item-title');
    expect(title.textContent).toContain(component.course.title);
  });

  it('should display description after detectChanges()', () => {
    let description = EL.querySelector('.courses__item-description');
    expect(description.textContent).toContain(component.course.description);
  });

  it('should click Edit button', () => {
    let btn = EL.querySelector('.courses__item-button--edit');
    spyOn(component, 'onEdit');
    btn.click();

    expect(component.onEdit).toHaveBeenCalled();
  });

});
