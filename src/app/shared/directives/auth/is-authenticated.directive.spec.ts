import { IsAuthenticatedDirective } from './is-authenticated.directive';
import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {BreadcrumbsComponent} from "@shared/components/breadcrumbs/breadcrumbs.component";

describe('IsAuthenticatedDirective', () => {
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let de: DebugElement; let el: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ IsAuthenticatedDirective, BreadcrumbsComponent ]
    })
      .createComponent(BreadcrumbsComponent);
    fixture.detectChanges();
  });

  it('should show content if authenticated', () => {
      expect(el.querySelector('.breadcrumbs')).not.toBe(null);
  });

});
