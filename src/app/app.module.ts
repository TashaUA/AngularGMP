import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from "./shared/shared.module";
import { LogoComponent } from "./shared/components/header/logo/logo.component";
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CourseListComponent } from './modules/components/courses/course-list/course-list.component';
import { CourseItemComponent } from './modules/components/courses/course-item/course-item.component';
import { SearchComponent } from './modules/components/courses/search/search.component';
import { AddCourseComponent } from "./modules/components/courses/add-course/add-course.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
