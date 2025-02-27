import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  public days :any;
  public hours:any;
  public minutes:any;
  public seconds:any;

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2) { }

 
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, "h-100vh");
    this.renderer.removeClass(this.document.body, "login-img");
    this.renderer.removeClass(this.document.body, "page-style1");
    this.renderer.addClass(this.document.body, "app");
    this.renderer.addClass(this.document.body, "ltr");
    this.renderer.addClass(this.document.body, "sidebar-mini");
    this.renderer.addClass(this.document.body, "main-body");

}
  ngOnInit(): void{
    this.renderer.addClass(this.document.body, "h-100vh");
    this.renderer.addClass(this.document.body, "login-img");
    this.renderer.removeClass(this.document.body, "app");
    this.renderer.removeClass(this.document.body, "ltr");
    this.renderer.removeClass(this.document.body, "sidebar-mini");
    this.renderer.removeClass(this.document.body, "main-body");
    let countDown = new Date('Dec 31, 2025 00:00:00').getTime();
    let time = setInterval(()=>{
      let now = new Date().getTime();
      let distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60 ));
      this.seconds = Math.floor((distance % (1000 * 60 )) / 1000);

      if(distance < 0){
        clearInterval(time);
      }
    }, 1000)

  }

}
