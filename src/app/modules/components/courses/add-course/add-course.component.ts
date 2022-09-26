import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  onAddCourse (event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log('Add new course button clicked');
  }
}
