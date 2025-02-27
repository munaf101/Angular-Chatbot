import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2,private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, "h-100vh");
    this.renderer.addClass(this.document.body, "login-img");
    this.renderer.addClass(this.document.body, "page-style1");
    this.renderer.removeClass(this.document.body, "app");
    this.renderer.removeClass(this.document.body, "ltr");
    this.renderer.removeClass(this.document.body, "sidebar-mini");
    this.renderer.removeClass(this.document.body, "main-body");

  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, "h-100vh");
    this.renderer.removeClass(this.document.body, "login-img");
    this.renderer.removeClass(this.document.body, "page-style1");
    this.renderer.addClass(this.document.body, "app");
    this.renderer.addClass(this.document.body, "ltr");
    this.renderer.addClass(this.document.body, "sidebar-mini");
    this.renderer.addClass(this.document.body, "main-body");

}
email="";
password="";
message = '';
errorMessage = ''; // validation error handle
error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle




clearErrorMessage()
{
  this.errorMessage = '';
  this.error = {name : '' , message:''};
}

register()
{
  this.clearErrorMessage();
  if (this.validateForm(this.email, this.password)) {
    this.authservice.registerWithEmail(this.email, this.password)
      .then(() => {
        this.message = "you are register with data on firbase";
        this.router.navigate(['/dashboard']);
      }).catch((_error:any) => {
        this.error = _error;
        this.router.navigate(['/auth/register']);
      });
  }
}

validateForm(email:string, password:string)
{
  if(email.length === 0)
  {
    this.errorMessage = "please enter email id";
    return false;
  }

  if (password.length === 0) {
    this.errorMessage = "please enter password";
    return false;
  }

  if (password.length < 6)
  {
    this.errorMessage = "password should be at least 6 char";
    return false;
  }

  this.errorMessage = '';
  return true;

}
}
