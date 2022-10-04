import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import {DebugElement} from "@angular/core";
import {AppComponent} from "../../../../app.component";

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let DE: DebugElement; let EL: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseItemComponent ]
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
