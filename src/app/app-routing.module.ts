import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AuthGuard } from "@core/guards/auth.guard";
import { CoursesPageComponent } from "@pages/courses-page/courses-page.component";
import {AddEditPageComponent} from '@pages/add-edit-page/add-edit-page.component';
import {AuthPageComponent} from "@pages/auth-page/auth-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "courses", pathMatch: "full" },

  {
    path: "courses",
    data: {
      breadcrumb: 'Courses'
    },
    canActivate: [AuthGuard],
    component: CoursesPageComponent,
    children: [
      { path: 'new', component: AddEditPageComponent, data: { breadcrumb: 'New'} },
      { path: 'edit/:id', component: AddEditPageComponent, data: { breadcrumb: 'Edit'} }
    ]
  },

  {
    path: "login",
    component: AuthPageComponent,
  },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    //AuthModule,
    RouterModule.forRoot(routes, {
      //enableTracing: true,
      // useHash: true
      // preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
