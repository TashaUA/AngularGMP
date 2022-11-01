import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "@core/core.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "@shared/shared.module";
import { CoursesModule } from "./modules/components/courses/courses.module";
import { AddEditFormComponent } from './modules/components/courses/add-edit-form/add-edit-form.component';
import { AuthPageComponent } from '@pages/auth-page/auth-page.component';
import { CoursesPageComponent } from '@pages/courses-page/courses-page.component';
import { CourseListComponent } from './modules/components/courses/course-list/course-list.component';
import { CourseItemComponent } from './modules/components/courses/course-item/course-item.component';
import { SearchComponent } from './modules/components/courses/search/search.component';
import { AddCourseComponent } from "./modules/components/courses/add-course/add-course.component";
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AddEditPageComponent } from '@pages/add-edit-page/add-edit-page.component';
import {AuthGuard} from "@core/guards/auth.guard";
import {AuthComponent} from "./modules/components/auth/auth.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    CoursesPageComponent,
    CourseListComponent,
    CourseItemComponent,
    SearchComponent,
    AddCourseComponent,
    AddEditFormComponent,
    AuthComponent,
    NotFoundComponent,
    AddEditPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CoursesModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
