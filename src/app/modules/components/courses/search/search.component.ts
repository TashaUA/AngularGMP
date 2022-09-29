import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm = this.formBuilder.group({
    search: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSearch(): void {
    console.warn('Input data :', this.searchForm.value.search);
  }

}
