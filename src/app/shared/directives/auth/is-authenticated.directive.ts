import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "@core/services/auth.service";

@Directive({
  selector: '[appIsAuthenticated]',
  providers:[AuthService],
})
export class IsAuthenticatedDirective implements OnInit{
  public isLoggedUser = this.authService.isAuthenticated();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService:AuthService) { }

    ngOnInit(){
      (this.isLoggedUser) ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
    }
}
