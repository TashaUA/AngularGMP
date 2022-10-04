import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MockHeaderComponent, MockFooterComponent, MockSearchComponent } from "@mock/stubComponents";
import { DebugElement } from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let DE: DebugElement; let EL: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockFooterComponent,
        MockSearchComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    DE = fixture.debugElement;
    EL = DE.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have header component', (() => {
    expect(EL.querySelector('app-header')).not.toBe(null);
  }));

  it('should have footer component', (() => {
    expect(EL.querySelector('app-footer')).not.toBe(null);
  }));

  it('should have add-search component', (() => {
    expect(EL.querySelector('app-search')).not.toBe(null);
  }));
});
