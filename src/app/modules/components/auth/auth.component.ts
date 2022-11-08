import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthPageComponent} from "@pages/auth-page/auth-page.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AuthPageComponent>,) { }

  loginForm: FormGroup;
  subscription: Subscription;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: '',
    });
  }

  login(e: any) {
    this.subscription = this.authService.login(this.loginForm.value).subscribe();
    this.dialogRef.close();
    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
