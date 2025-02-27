import { Component, Directive, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { checkHoriMenu, parentNavActive, switcherArrowFn } from './sidebar';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @ViewChild ('perfectScroll', {static:true}) perfectScroll : ElementRef |any;

  public menuItems: Menu[] | any;
  public url: any;
  sidenavtoggled1: any;

  //For Horizontal Menu
  public margin: any = 0;
  public width: any = window.innerWidth;
  public windowSubscribe$!: any;

  constructor(
    private router: Router,
    private navServices: NavService,
    public elementRef: ElementRef,
    public sanitizer:DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              
              return true;
            });

            return true;
          });
        }
      });
    });
    this.checkNavActiveOnLoad();

  }
  checkNavActiveOnLoad() {
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.closeNavActive();
          setTimeout(() => {
            const sidemenu = document.querySelectorAll('.side-menu__item.active');
            const subSidemenu = document.querySelectorAll(
              '.sub-side-menu__item.active'
            );
            sidemenu.forEach((e) => e.classList.remove('active'));
            subSidemenu.forEach((e) => e.classList.remove('active'));
          }, 100);
        }
        if (event instanceof NavigationEnd) {
          menuItems.filter((items) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return true;
            });
            return true;
          });
          setTimeout(() => {
            parentNavActive();
          }, 200);
        }
      });
    });
  }
  @HostListener('window: resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.width = event.target.innerWidth - 480;
  }
  //Active NavBar State
  setNavActive(item:any) {
    this.menuItems.filter((menuItem:any) => {
      if (menuItem !== item) {
        menuItem.active = false;
        const sidemini:any = document.querySelector('.sidebar-mini');
        sidemini?.classList.remove('sidenav-toggled');
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems:any) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }
  checkCurrentActive() {
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
      const currentUrl = this.router.url;
      menuItems.filter((items) => {
        if (items.path === currentUrl) {
          this.setNavActive(items);
        }
        if (!items.children) {
          return false;
        }
        items.children.filter((subItems) => {
          if (subItems.path === currentUrl) {
            this.setNavActive(subItems);
          }
          if (!subItems.children) {
            return false;
          }
          subItems.children.filter((subSubItems) => {
            if (subSubItems.path === currentUrl) {
              this.setNavActive(subSubItems);
            }
          });
          return true;
        });
        return true;
      });
    });
  }
  // Toggle menu
  toggleNavActive(item: Menu) {
    if (!item.active) {

      this.menuItems.forEach((a: any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) {
            return false;
          }
          b.children.forEach((c: any) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
          return true;
        });
        return true;
      });
    }
    item.active = !item.active;
    document.querySelector("#custom-main-container")?.addEventListener("click",()=>{
      if(document.querySelector("body")?.classList.contains("horizontal")){
        item.active =  false;
      }
    });
  }
  // Close Nav menu
  closeNavActive() {
    this.menuItems.forEach((a: any) => {
      if (this.menuItems) {
        a.active = false;
      }
      if (!a.children) {
        return false;
      }
      a.children.forEach((b: any) => {
        if (a.children) {
          b.active = false;
        }
      });
      return true;
    });
  }
  closeNavActive1(item:any,menuItem:any = ""){
    if(document.querySelector('body')?.classList.contains(".horizontal")){
      setTimeout(() => {
        item.active = false;
        if(menuItem != ""){
          menuItem.active = false;
        }
      }, 100);
    }
  }

  ngOnInit(): void {
    switcherArrowFn();

// detect screen size changes
 this.breakpointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          // small screen
          this.checkCurrentActive();
        } else {
          // large screen
          document
            .querySelector('body.horizontal')
            ?.classList.remove('sidenav-toggled');
            setTimeout(() => {
          if (document.querySelector('.horizontal')) {
            this.closeNavActive();

              parentNavActive();

          } }, 100);
        }
      });
      setTimeout(() => {
        const horizontal = document.querySelectorAll('#myonoffswitch35');
        const vertical = document.querySelectorAll('#myonoffswitch34');
        const horizontalHover = document.querySelectorAll('#myonoffswitch111');
        fromEvent(vertical, 'click').subscribe(() => {
          this.checkCurrentActive();
        });
        fromEvent(horizontal, 'click').subscribe(() => {
          this.closeNavActive();
        });
        fromEvent(horizontalHover, 'click').subscribe(() => {
          this.closeNavActive();
        });
      }, 100);

    const WindowResize = fromEvent(window, 'resize');
    // subscribing the Observable
    this.windowSubscribe$ = WindowResize.subscribe(() => {

      checkHoriMenu();
    });

  const maincontent = document.querySelectorAll('.main-content');
    fromEvent(maincontent, 'click').subscribe(() => {
      if (document.querySelector('body')?.classList.contains('horizontalmenu')) {
        this.closeNavActive();

        setTimeout(()=> { parentNavActive(); }, 100);
      }
    });
  }

  ngAfterViewInit(){

  }
  ngOnDestroy() {
    // unsubscribing the Observable
    this.windowSubscribe$.unsubscribe();
  }
  hoverEffect($event:any){
    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  
  sidebarClose() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
      this.navServices.collapseSidebar = false;
    }
  }
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 74;
  }

}
