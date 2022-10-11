import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCourseType]'
})
export class CourseTypeDirective {

  @Input('appCourseType') public creationDate: any;
  public static MS_IN_DAYS = 1000 * 60 * 60 * 24 * 14;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.setBorderColor();
  }

  setBorderColor() {
    const currentDate = new Date().getTime();
    const creationDate = new Date(this.creationDate).getTime();
    var twoWeeks = CourseTypeDirective.MS_IN_DAYS;
    const prevDate = new Date(new Date().getTime() - twoWeeks).getTime();
    let borderColor = '';

    if (creationDate < currentDate && creationDate >= prevDate)
      borderColor = 'green';
    else if (creationDate > currentDate)
      borderColor = 'blue';

    this.element.nativeElement.style.borderColor = borderColor;
  }
}
