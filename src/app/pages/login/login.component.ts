import {Component, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    CommonModule
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;

  submitForm(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
    let user = JSON.parse(JSON.stringify(localStorage.getItem('user')));
    if (user) {
      this.router.navigate(['/wedding']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      localStorage.setItem('user', JSON.stringify(this.socialUser));
      this.isLoggedin = user != null;
      this.router.navigate(['/wedding']);
    });

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
    localStorage.clear();
  }
}
