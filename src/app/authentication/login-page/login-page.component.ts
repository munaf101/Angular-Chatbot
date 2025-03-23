import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiauthService } from 'src/app/Service/apiauth.service';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public showPassword: boolean = false;
  showLoader: boolean | undefined;
  disabled = '';
  active: any = 'Angular';
  public loginForm!: FormGroup;
  public error: any = '';

  constructor(
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    public apiauthservice: ApiauthService,

  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['spruko@admin.com', [Validators.required, Validators.email]],
      password: ['sprukoadmin', Validators.required],
    });

    // Redirect if already logged in
    if (this.apiauthservice.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  get form() {
    return this.loginForm.controls;
  }

  Submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.showLoader = true;
    this.disabled = "btn-loading";
    this.error = '';

    const email = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    this.apiauthservice.login(email, password).subscribe({
      next: (response) => {
        // console.log("res" +response)
        console.log("Login Response:", response); // API Response dekhne ke liye

        this.showLoader = false;
        this.disabled = '';
        if (response.success) {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        this.showLoader = false;
        this.disabled = '';
        this.error = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
