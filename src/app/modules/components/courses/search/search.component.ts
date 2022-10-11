import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() queryAdded = new EventEmitter<string>();
  queryString: string = '';

  searchForm = this.formBuilder.group({
    search: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSearch() {
    console.warn('Input data :', this.searchForm.value.search);
    this.queryAdded.emit(this.queryString);
  }

}
