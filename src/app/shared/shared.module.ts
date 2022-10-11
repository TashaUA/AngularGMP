import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseTypeDirective} from "@shared/directives/course/course-type.directive";
import {DurationTimePipe} from "@shared/pipes/time/duration-time.pipe";
import {OrderByDatePipe} from "@shared/pipes/sort/order-by.pipe";
import {FilterPipe} from "@shared/pipes/filter/filter.pipe";
import {LogoComponent} from "@shared/components/header/logo/logo.component";
import {FooterComponent} from "@shared/components/footer/footer.component";
import {HeaderComponent} from "@shared/components/header/header.component";
import {BreadcrumbsComponent} from "@shared/components/breadcrumbs/breadcrumbs.component";

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    CourseTypeDirective,
    DurationTimePipe,
    OrderByDatePipe,
    FilterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    CourseTypeDirective,
    DurationTimePipe,
    OrderByDatePipe,
    FilterPipe,
  ]
})
export class SharedModule { }
