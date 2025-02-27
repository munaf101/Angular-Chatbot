import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, "h-100vh");
    this.renderer.addClass(this.document.body, "login-img");
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

}
