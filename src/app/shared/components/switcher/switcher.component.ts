import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {  Subscription } from 'rxjs';
import { SwitcherService } from '../../services/switcher.service';
import * as switcher from '../switcher/switcher';
@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent implements OnInit {
  layoutSub: Subscription;

  body = document.querySelector('body');
  closeResult = '';

  @ViewChild('switcher', { static: false }) switcher!: ElementRef;
  constructor(
    public renderer: Renderer2,
    public switcherServic: SwitcherService,
  ) {
    this.layoutSub = switcherServic.changeEmitted.subscribe((value) => {

      if (value) {
        this.renderer.addClass(this.switcher.nativeElement.firstElementChild,'active');
        this.renderer.setStyle(this.switcher.nativeElement.firstElementChild,'right','0px');
        value = true;
      } else {
        this.renderer.removeClass(this.switcher.nativeElement.firstElementChild,'active');
        this.renderer.setStyle(this.switcher.nativeElement.firstElementChild,'right','-270px');
        value = false;
      }
    });
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    document.querySelector(".slide-rightRTL")?.classList.add("d-none");
  }
  ngOnInit(): void {
    switcher.localStorageBackUp();
    switcher.customClickFn();
    switcher.updateChanges();

  }
  reset(){
    const btnlight = document.getElementById('myonoffswitch1') as HTMLInputElement;
    btnlight.checked = true;
    const lightmenu = document.getElementById('myonoffswitch3') as HTMLInputElement;
    lightmenu.checked = true;
    const vertical = document.getElementById('myonoffswitch34') as HTMLInputElement;
    vertical.checked = true;
    const ltr = document.getElementById('myonoffswitch54') as HTMLInputElement;
    ltr.checked = true;
    const lightheader = document.getElementById('myonoffswitch6') as HTMLInputElement;
    lightheader.checked = true;
    const fullwidth = document.getElementById('myonoffswitch9') as HTMLInputElement;
    fullwidth.checked = true;
    const fixed = document.getElementById('myonoffswitch11') as HTMLInputElement;
    fixed.checked = true;
    const defaultLogo= document.getElementById('myonoffswitch31') as HTMLInputElement;
    defaultLogo.checked = true;
    localStorage.clear();
    const html:any = document.querySelector('html');
    const body = document.querySelector('body');
    html.style = '';
    body?.classList.remove('rtl');
    body?.classList.remove('dark-theme');
    body?.classList.remove('light-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('layout-boxed');
    body?.classList.remove('centerlogo-horizontal');
    body?.classList.remove('scrollable-layout');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
    switcher.updateChanges();
    switcher.checkOptions();
    html.setAttribute('dir', 'ltr');
    const styleId = document.querySelector('#style');
    styleId?.setAttribute('href','./assets/plugins/bootstrap/css/bootstrap.css');
    localStorage.removeItem('Admitrohorizontal');
    localStorage.removeItem('AdmitrohorizontalHover');
    const mainContent = document.querySelector('.main-content');
    const mainContainer = document.querySelectorAll('.main-container');
    const appSidebar = document.querySelector('.app-sidebar');
    const header = document.querySelector('.main-header');
    const mainSidemenu = document.querySelector('.main-sidemenu');
    mainContent?.classList.add('app-content');
    mainContainer.forEach((e)=>{
      e.classList.add('container-fluid');
    });
    header?.classList.add('side-header');
    body?.classList.add('sidebar-mini');
    //remove
    body?.classList.remove('horizontal');
    body?.classList.remove('horizontal-hover');
    appSidebar?.classList.remove('horizontal-main');
    mainSidemenu?.classList.remove('container');
    mainContent?.classList.remove('horizontal-content');
    header?.classList.remove('hor-header');
    mainContainer.forEach((e: { classList: { remove: (arg0: string) => void; }; })=>{
      e.classList.remove('container');
    });
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    localStorage.setItem('AdmitrosidebarMini', 'true');
    localStorage.removeItem('Admitrohorizontal');
    localStorage.removeItem('AdmitrohorizontalHover');
  }
  public color4: string = '#0162e8';
  public color1: string = '#0162e8';
  public color2: string = '#0162e8';
  public color3: string = '#0162e8';

  LightTheme(){
    // localStorage.clear()

    // Adding
    this.body?.classList.add('light-theme');

    // Removing
    localStorage.setItem("AdmitroLightTheme","true");
    this.body?.classList.remove("transparent-mode");
    this.body?.classList.remove("dark-mode");
    localStorage.removeItem("AdmitroTransparentTheme");
    localStorage.removeItem("AdmitroDarkTheme");
  }

  DarkTheme(){
    // localStorage.clear()
    const dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
    const darkHeader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkHeader.checked = true;
    const darkMenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkMenu.checked = true;
    //Adding
    localStorage.setItem("AdmitroDarkTheme","true");
    this.body?.classList.add("dark-theme");
    this.body?.classList.add("dark-header");
    this.body?.classList.add("dark-menu");

    // Removing
    this.body?.classList.remove("transparent-mode");
    this.body?.classList.remove("light-mode");
    this.body?.classList.remove("light-header");
    this.body?.classList.remove("light-menu");
    this.body?.classList.remove("color-header");
    this.body?.classList.remove("color-menu");
    this.body?.classList.remove("gradient-header");
    this.body?.classList.remove("gradient-menu");

    localStorage.removeItem("AdmitroTransparentTheme");
    localStorage.removeItem("AdmitroLightTheme");
  }
  public dynamicBgPrimary(data: string): void {
    this.color3 = data;
    const dynamicPrimaryBg = document.querySelectorAll('.color-primary-Bg');

    switcher.dynamicBgPrimaryColor(dynamicPrimaryBg, this.color1);
    localStorage.setItem('Admitro-primary-color', this.color1);
    localStorage.setItem('Admitro-primary-hover', this.color1);
    localStorage.setItem('Admitro-primary-border', this.color1);

    // Adding
    this.body?.classList.add('light-theme');
    localStorage.setItem('AdmitrodarkTheme', 'true');

    this.body?.classList.remove('light-theme');
    localStorage.removeItem('AdmitroDarkTheme');
    localStorage.removeItem('AdmitroLightTheme');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
 
    localStorage.removeItem('Admitrolight-primary-color');
    localStorage.removeItem('Admitrolight-primary-hover');
    localStorage.removeItem('Admitrolight-primary-border');
    localStorage.removeItem('Admitrodark-primary-color');
    localStorage.removeItem('Admitrodark-primary-hover');
    localStorage.removeItem('Admitrodark-primary-border');
    localStorage.removeItem('Admitrodark-body');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
  public dynamicBgDarkPrimary(data: string): void {
    document.body.classList.add('dark-theme');

    this.color4 = data;

    const dynamicPrimaryBgDark = document.querySelectorAll('.color-bg-Dark');

    switcher.dynamicBgDarkPrimaryColor(dynamicPrimaryBgDark, this.color4);
    localStorage.setItem('Admitrodark-body', this.color4 +'dd');
    localStorage.setItem('Admitrodark-theme', this.color4);

    const lightbtn = document.getElementById('myonoffswitch1') as HTMLInputElement;
    lightbtn.checked = false;
    const darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
    darkBtn.checked = true;
    const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkheader.checked = true;
    const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkmenu.checked = true;

    // Removing
    localStorage.removeItem('AdmitroLightTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');

    localStorage.removeItem('Admitrolight-primary-color');
    localStorage.removeItem('Admitrolight-primary-hover');
    localStorage.removeItem('Admitrolight-primary-border');
    localStorage.removeItem('Admitrodark-primary-color');
    localStorage.removeItem('AdmitroBgImage');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }

}

