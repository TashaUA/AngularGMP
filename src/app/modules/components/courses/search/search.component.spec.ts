import {ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { SearchComponent } from './search.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let DE: DebugElement; let EL: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    DE = fixture.debugElement;
    EL = DE.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Set Input type text value', async () => {
    const query = EL.querySelector('.search__button');
    query.value = 'test';
    query.dispatchEvent(new Event('input'));

    expect(query.value).toContain('test');
  });

  it('should check onSearch click', async() => {
    spyOn(component, 'onSearch');

    let button = EL.querySelector('.search__button');
    button.click();

    expect(component.onSearch).toHaveBeenCalled();
  });
});
