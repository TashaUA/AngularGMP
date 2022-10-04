import {ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import {DebugElement} from "@angular/core";

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  let DE: DebugElement; let EL: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    DE = fixture.debugElement;
    EL = DE.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check add new course button', () => {
    let btn = EL.querySelector('.add-course__button');
    spyOn(component, 'onAddCourse');
    btn.click();

    expect(component.onAddCourse).toHaveBeenCalled();
  });
});
