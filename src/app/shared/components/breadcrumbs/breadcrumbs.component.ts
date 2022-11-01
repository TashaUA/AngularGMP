import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET} from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {this.breadcrumbs = []; }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let root: ActivatedRoute = this.activatedRoute.root;
      console.log('++', root);
      this.breadcrumbs = this.getBreadcrumbs(root);
      console.log('=========', this.breadcrumbs);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: any=[]): any {
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      if (!child.snapshot.data.hasOwnProperty('breadcrumb')) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: any = {
        label: child.snapshot.data['breadcrumb'],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
