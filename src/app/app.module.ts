import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "@core/core.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "@shared/shared.module";
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CourseListComponent } from './modules/components/courses/course-list/course-list.component';
import { CourseItemComponent } from './modules/components/courses/course-item/course-item.component';
import { SearchComponent } from './modules/components/courses/search/search.component';
import { AddCourseComponent } from "./modules/components/courses/add-course/add-course.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    CourseListComponent,
    CourseItemComponent,
    SearchComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
