import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import PerfectScrollbar from 'perfect-scrollbar';
import { Menu, NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit{
  public isCollapsed = true;

  @ViewChild('messageMenu1') messageMenu1: ElementRef | any;
  @ViewChild('notifMmenu') notifMmenu: ElementRef | any;
  toggleSidebar(){
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector("body")?.classList.toggle("sidenav-toggled");
    }
  }
  
  sidebarClose() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
      this.navServices.collapseSidebar = false;
    }
  }

  // public menuItems!: Menu[];
  // public items!: Menu[];
  public elem : any;
  public sidenavtoggled1 : any;

  constructor(
    public navServices: NavService,
    public SwitcherService : SwitcherService,
    @Inject(DOCUMENT) private document: any,
  ) { }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
    document.querySelector('body')?.classList.remove("sidenav-toggled-open")
  }

  toggleFullScreen() {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    this.navServices.megaMenu = false;
  }
  ngOnInit(): void {
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
    // To clear and close the search field by clicking on body
    document.querySelector('.main-content')?.addEventListener('click',()=>{
      this.clearSearch();
    });
    this.text = '';
  }
  ngAfterViewInit(){

    // let ps = new PerfectScrollbar(this.messageMenu1, { wheelPropagation: false });
    // let ps1 = new PerfectScrollbar(messageMenu, { wheelPropagation: false });
    // let ps2 = new PerfectScrollbar(notifyMenu, { wheelPropagation: false });
  }

  searchAdd() {
    const searchShow:any = document.querySelector('body');
    searchShow.classList.add('search-show');
  }
  searchRemove(e:any) {
    const searchRemove:any = document.querySelector('body');
    searchRemove.classList.remove('search-show');
    e.preventDefault();

  }
  // Search
  public menuItems!: Menu[];
    public items!: Menu[];
    public text!: string;
    public SearchResultEmpty:boolean = false;

  Search(searchText: any) {
    if (!searchText) return this.menuItems = [];
    // items array which stores the elements
    const items:any[] = [];
    // Converting the text to lower case by using toLowerCase() and trim() used to remove the spaces from starting and ending
    searchText = searchText.toLowerCase().trim();
    this.items.filter((menuItems:any) => {
      // checking whether menuItems having title property, if there was no title property it will return
      if (!menuItems?.title) return false;
      //  checking wheteher menuitems type is text or string and checking the titles of menuitems
      if (menuItems.type === 'link' && menuItems.title.toLowerCase().includes(searchText)) {
        // Converting the menuitems title to lowercase and checking whether title is starting with same text of searchText
        if( menuItems.title.toLowerCase().startsWith(searchText)){// If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(menuItems))
          // If both are matching then the code is pushed to items array
          items.push(menuItems);
        }
      }
      //  checking whether the menuItems having children property or not if there was no children the return
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems:any) => {
        if (subItems.type === 'link' && subItems.title.toLowerCase().includes(searchText)) {
          if( subItems.title.toLowerCase().startsWith(searchText)){         // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subItems))
            items.push(subItems);
          }

        }
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems:any) => {
          if (subSubItems.title.toLowerCase().includes(searchText)) {
            if( subSubItems.title.toLowerCase().startsWith(searchText)){// If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subSubItems))
              items.push(subSubItems);
            }
          }
        });
        return true;
      });
      return this.menuItems = items;
    });
    // Used to show the No search result found box if the length of the items is 0
    if(!items.length){
      this.SearchResultEmpty = true;
    }
    else{
      this.SearchResultEmpty = false;
    }
    return true;
  }

   //  Used to clear previous search result
   clearSearch() {
    this.text = '';
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems;
  }
}
