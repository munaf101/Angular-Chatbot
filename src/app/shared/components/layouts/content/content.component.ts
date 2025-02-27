import { Component, ElementRef, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  sidenavtoggled1: any;

  constructor(
    public navServices: NavService,
    public elementRef: ElementRef,
    public SwitcherService:SwitcherService
  ) { }
  ngOnDestroy(){
    location.reload();
  }
  ngOnInit(): void {
  }
  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;

  }
  toggleSwitcherBody() {
    document.querySelectorAll(".slide-menu").forEach((ele)=>{
      if(ele.classList.contains("open")){
        // ele.classList.remove("open");
        // // Icon Change
        // ele.parentElement?.classList.remove("is-expanded")
        // let Icon :any = ele.parentElement?.querySelector(".side-menu__item")?.querySelectorAll("i")[1];
      }
    })

    this.SwitcherService.emitChange(false);

  }
}
