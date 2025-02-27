import { fromEvent } from 'rxjs';
import * as sidebarFn from '../sidebar/sidebar';

export function localStorageBackUp() {
  const html = document.querySelector('html')?.style;
  const body = document.querySelector('body');
  if (localStorage.getItem('Admitrolight-primary-color') !== null) {
    body?.classList.add('light-theme');
    const light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme');
    body?.classList.remove('transparent-theme');
    html?.setProperty('--primary-bg-color',localStorage.getItem('Admitrolight-primary-color'));
    html?.setProperty('--primary-bg-hover',localStorage.getItem('Admitrolight-primary-color'));
    html?.setProperty('--primary-bg-border',localStorage.getItem('Admitrolight-primary-color'));
  }
  
  if (localStorage.getItem('Admitrodark-body') !== null) {
    body?.classList.add('dark-theme');

    const darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
    darkBtn.checked = true;
    const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkheader.checked = true;
    const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkmenu.checked = true;
    body?.classList.remove('light-theme');
    html?.setProperty('--dark-body', localStorage.getItem('Admitrodark-body'));
    body?.classList.remove('light-theme');
    html?.setProperty('--dark-theme', localStorage.getItem('Admitrodark-theme'));
  }
  if (localStorage.getItem('Admitrodark-theme') !== null) {
    body?.classList.add('dark-theme');

    const darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
    darkBtn.checked = true;
    const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkheader.checked = true;
    const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkmenu.checked = true;
}

  if (localStorage.getItem('AdmitroLightTheme') !== null ) {
    const light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;
  body?.classList.add('light-theme');
    body?.classList.remove('dark-theme');
    body?.classList.remove('dark-header');

    body?.classList.remove('dark-menu');

    body?.classList.remove('transparent-theme');
  }

  if (localStorage.getItem('AdmitroDarkTheme') !== null ) {
    const darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
    darkBtn.checked = true;
    const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkheader.checked = true;
    const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkmenu.checked = true;
    
    body?.classList.add('dark-theme');

    body?.classList.remove('light-theme');
    body?.classList.remove('light-header');
    body?.classList.remove('light-menu');
  
  }
  if(localStorage.getItem('Admitrocolormenu')){
    const colormenu = document.getElementById('myonoffswitch4') as HTMLInputElement;
    colormenu.checked = true;
    document.querySelector('body')?.classList.add('color-menu');
  }
  if(localStorage.getItem('Admitrolightmenu')){
    const lightmenu = document.getElementById('myonoffswitch3') as HTMLInputElement;
    lightmenu.checked = true;
    document.querySelector('body')?.classList.add('light-menu');
  }
  if(localStorage.getItem('Admitrodarkmenu')){
    const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkmenu.checked = true;
    document.querySelector('body')?.classList.add('dark-menu');
  }
  if(localStorage.getItem('Admitrogradientmenu')){
    const gradientmenu = document.getElementById('myonoffswitch25') as HTMLInputElement;
    gradientmenu.checked = true;
    document.querySelector('body')?.classList.add('gradient-menu');
  }
  if(localStorage.getItem('Admitrodarkheader')){
    const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkheader.checked = true;
    document.querySelector('body')?.classList.add('dark-header');
  }
  if(localStorage.getItem('Admitrolightheader')){
    const lightheader = document.getElementById('myonoffswitch6') as HTMLInputElement;
    lightheader.checked = true;
    document.querySelector('body')?.classList.add('light-header');
  }
  if(localStorage.getItem('Admitrocolorheader')){
    const colorheader = document.getElementById('myonoffswitch7') as HTMLInputElement;
    colorheader.checked = true;
    document.querySelector('body')?.classList.add('color-header');
  }
  if(localStorage.getItem('Admitrogradientheader')){
    const gradientheader = document.getElementById('myonoffswitch26') as HTMLInputElement;
    gradientheader.checked = true;
    document.querySelector('body')?.classList.add('gradient-header');
  }
if(localStorage.getItem('Admitroboxed')){
  const boxed = document.getElementById('myonoffswitch10') as HTMLInputElement;
  boxed.checked = true;
  document.querySelector('body')?.classList.add('layout-boxed');
}

  if(localStorage.getItem('Admitrortl')){
    const rtl = document.getElementById('myonoffswitch55') as HTMLInputElement;
    rtl.checked = true;
    const styleId = document.querySelector('#style');
    document.querySelector('body')?.classList.add('rtl');
    document.querySelector('html')?.setAttribute('dir', 'rtl');
    styleId?.setAttribute('href','./assets/plugins/bootstrap/css/bootstrap.rtl.css');
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
  }
  if(localStorage.getItem('Admitrohorizontal') !== null){
    const horizontal = document.getElementById('myonoffswitch35') as HTMLInputElement;
    horizontal.checked = true;
    const mainContent = document.querySelector('.main-content');
    const mainContainer = document.querySelectorAll('.main-container');
    const appSidebar = document.querySelector('.app-sidebar');
    const header = document.querySelector('.main-header');
    const mainSidemenu = document.querySelector('.main-sidemenu');
    const sideMenu = document.querySelector('.horizontal .side-menu');
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e: { classList: { add: (arg0: string) => void; }; },)=>{
      e.classList.add('container');
    });
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: { classList: { remove: (arg0: string) => void; }; },)=>{
      e.classList.remove('container-fluid');
    });
    // header?.classList.remove('side-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    const li = document.querySelectorAll('.side-menu li');
    li.forEach((e) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    setTimeout(()=>{
      sidebarFn.parentNavActive();
    }, 300);
  }
  if(localStorage.getItem('AdmitrohorizontalHover') !== null){
    const horizontalHover = document.getElementById('myonoffswitch111') as HTMLInputElement;
    horizontalHover.checked = true;
    const mainContent = document.querySelector('.main-content');
    const mainContainer = document.querySelectorAll('.main-container');
    const appSidebar = document.querySelector('.app-sidebar');
    const header = document.querySelector('.main-header');
    const mainSidemenu = document.querySelector('.main-sidemenu');
    const sideMenu = document.querySelector('.horizontal .side-menu');
    //add
    body?.classList.add('horizontal');
    body?.classList.add('horizontal-hover');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e: { classList: { add: (arg0: string) => void; }; },)=>{
      e.classList.add('container');
    });
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-wrap');
    // remove
    sideMenu?.classList.remove('flex-nowrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: { classList: { remove: (arg0: string) => void; }; })=>{
      e.classList.remove('container-fluid');
    });
    // header?.classList.remove('side-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    const li = document.querySelectorAll('.side-menu li');
    li.forEach((e) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    setTimeout(()=>{
      sidebarFn.parentNavActive();
    }, 300);
  }
  if(localStorage.getItem('Admitrocenter-logo')!==null){
    body?.classList.add('centerlogo-horizontal');
    body?.classList.remove('default-horizontal');

    const centerLogo = document.getElementById('#myonoffswitch36') as HTMLInputElement;
    centerLogo.checked = true;
  }
  if(localStorage.getItem('Admitrodefault-logo')!==null){
    body?.classList.add('default-horizontal');
    body?.classList.remove('centerlogo-horizontal');

    const defaultLogo = document.getElementById('#myonoffswitch31') as HTMLInputElement;
    defaultLogo.checked = true;
  }
}

export function handleThemeUpdate(cssVars: { [x: string]: string | null; }) {
  const root = document.querySelector(':root') as HTMLElement | null ;
  if (root) {
    const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
}
// to check the value is hexa or not
const isValidHex = (hexValue: string) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: string, chunkSize: number) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: string) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: number, alpha: number) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: string, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  if (hexArr === null) {
    // Handle the case where hexArr is null
    return '';
  }
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

//////Bg Transparent  primary
export function dynamicBgPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    const cssPropName3 = `--primary-${item.getAttribute('data-id9')}`;

    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
      [cssPropName3]: hexToRgba(color),
    });
  });
}

///background dark
export function dynamicBgDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--dark-${item.getAttribute('data-id5')}`;
    const cssPropName2 = `--dark-${item.getAttribute('data-id6')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color, 1.2),
    });
  });
}
export function customClickFn() {
  const body:HTMLBodyElement | any= document.querySelector('body');
  const html: any = document.querySelector('html');
  const ltr = document.querySelectorAll('#myonoffswitch54');
  const rtl = document.querySelectorAll('#myonoffswitch55');
  const vertical = document.querySelectorAll('#myonoffswitch34');
  const horizontal = document.querySelectorAll('#myonoffswitch35');
  const horizontalHover  = document.querySelectorAll('#myonoffswitch111');
  const defaultTheme  = document.querySelector('#myonoffswitch9')as HTMLInputElement;
  const boxed  = document.querySelector('#myonoffswitch10')as HTMLInputElement;
  const fixedLayout  = document.querySelector('#myonoffswitch11')as HTMLInputElement;
  const scrollableLayout = document.querySelector('#myonoffswitch12')as HTMLInputElement;
  const mainContent  = document.querySelector('.main-content')as HTMLInputElement;
  const mainContainer  = document.querySelectorAll('.main-container');
  const appSidebar  = document.querySelector('.app-sidebar')as HTMLInputElement;
  const header  = document.querySelector('.main-header')as HTMLInputElement;
  const mainSidemenu = document.querySelector('.main-sidemenu')as HTMLInputElement;
  const lightBtn = document.getElementById('myonoffswitch1') as HTMLInputElement ;
  const darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement ;
  const sideMenu  = document.querySelector('.horizontal .side-menu')as HTMLInputElement;
  const lightMenu  = document.querySelector('#myonoffswitch3')as HTMLInputElement;
  const colorMenu  = document.querySelector('#myonoffswitch4')as HTMLInputElement;
  const darkMenu  = document.querySelector('#myonoffswitch5')as HTMLInputElement;
  const gradientMenu= document.querySelector('#myonoffswitch25')as HTMLInputElement;
  const lightHeader  = document.querySelector('#myonoffswitch6')as HTMLInputElement;
  const darkHeader  = document.querySelector('#myonoffswitch8')as HTMLInputElement;
  const gradientHeader  = document.querySelector('#myonoffswitch26')as HTMLInputElement;
  const defaultBody  = document.querySelector('#myonoffswitch07')as HTMLInputElement;
  const bodyStyle  = document.querySelector('#myonoffswitch06')as HTMLInputElement;
  const centerLogo = document.querySelectorAll('#myonoffswitch36');
  const defaultLogo = document.querySelectorAll('#myonoffswitch31');
  const colorHeader = document.querySelector('#myonoffswitch7')as HTMLInputElement;

  const styleId = document.querySelector('#style');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.css'
    );
    //remove
    body?.classList.remove('rtl');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Admitroltr', 'true');
    localStorage.removeItem('Admitrortl');
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Admitrortl', 'true');
    localStorage.removeItem('Admitroltr');
  });
  // Layouts
  fromEvent(vertical, 'click').subscribe(() => {
    //add
    mainContent?.classList.add('app-content');
    mainContainer.forEach((e: { classList: { add: (arg0: string) => void; }; },)=>{
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
    mainContainer.forEach((e: { classList: { remove: (arg0: string) => void; }; },)=>{
      e.classList.remove('container');
    });
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    localStorage.setItem('AdmitrosidebarMini', 'true');
    localStorage.removeItem('Admitrohorizontal');
    localStorage.removeItem('AdmitrohorizontalHover');
  });
  fromEvent(horizontal, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e: { classList: { add: (arg0: string) => void; }; })=>{
      e?.classList.add('container');
    });
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: { classList: { remove: (arg0: string) => void; }; })=>{
      e?.classList.remove('container-fluid');
    });
    header?.classList.remove('side-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    const li = document.querySelectorAll('.side-menu li');
    li.forEach((e) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    setTimeout(()=>{
      sidebarFn.parentNavActive();
    }, 300);
    localStorage.setItem('Admitrohorizontal', 'true');

    localStorage.removeItem('Admitrohorizontalhover');
  });
  fromEvent(horizontalHover, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    body?.classList.add('horizontal-hover');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e: { classList: { add: (arg0: string) => void; }; },)=>{
      e.classList.add('container');
    });
    console.log(mainContainer);
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: { classList: { remove: (arg0: string) => void; }; },)=>{
      e.classList.remove('container-fluid');
    });
    header?.classList.remove('side-header');

    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    const li = document.querySelectorAll('.side-menu li');
    li.forEach((e) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    setTimeout(()=>{
      sidebarFn.parentNavActive();
    }, 300);
    localStorage.setItem('AdmitrohorizontalHover', 'true');
    localStorage.removeItem('Admitrohorizontal');
    localStorage.removeItem('AdmitrosidebarMini');
  });
    //logo
    fromEvent(centerLogo,'click').subscribe(()=>{
      body?.classList.add('centerlogo-horizontal');
      body?.classList.remove('default-horizontal');
      localStorage.setItem('Admitrocenter-logo','true');
      localStorage.removeItem('Admitrodefault-logo');
  
    });
    fromEvent(defaultLogo,'click').subscribe(()=>{
      body?.classList.add('default-horizontal');
      body?.classList.remove('centerlogo-horizontal');
      localStorage.setItem('Admitrodefault-logo','true');
      localStorage.removeItem('Admitrocenter-logo');
    });
  // Theme
  fromEvent(lightBtn, 'click').subscribe(() => {
    lightBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('light-theme');
    // remove
    document.querySelector('body')?.classList.remove('dark-theme');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('color-header');
    body?.classList.remove('dark-header');
    body?.classList.add('light-menu');
    body?.classList.add('light-header');
    localStorage.setItem('Admitrolight-theme', 'true');
    localStorage.removeItem('AdmitroDarkTheme');

  });
  fromEvent(darkBtn, 'click').subscribe(() => {
    darkBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('dark-theme');
    // remove
    document.querySelector('body')?.classList.remove('light-theme');
    document.querySelector('body')?.classList.remove('light-header');
    document.querySelector('body')?.classList.remove('light-menu');


    localStorage.setItem('AdmitroDarkTheme', 'true');
    localStorage.removeItem('Admitrolight-theme');
    const darkHeader = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkHeader.checked = true;
    const darkMenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkMenu.checked = true;
  });
  // layout width  style
  fromEvent(defaultTheme, 'click').subscribe(() => {
    body?.classList.add('layout-fullwidth');
    body?.classList.remove('layout-boxed');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Admitrofullwidh','true');
    localStorage.removeItem('Admitroboxed');

  });
  fromEvent(boxed, 'click').subscribe(() => {
    body?.classList.add('layout-boxed');
    body?.classList.remove('layout-fullwidth');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Admitroboxed','true');
    localStorage.removeItem('Admitrofullwidth');
  });
  // layout position
  fromEvent(fixedLayout, 'click').subscribe(() => {
    body?.classList.add('fixed-layout');
    body?.classList.remove('scrollable-layout');
  });
  fromEvent(scrollableLayout, 'click').subscribe(() => {
    body?.classList.add('scrollable-layout');
    body?.classList.remove('fixed-layout');
  });
  //body styles
  fromEvent(defaultBody, 'click').subscribe(() => {
    body?.classList.add('default-body');
    body?.classList.remove('body-style1');
    sidebarFn.checkHoriMenu();
  });
  fromEvent(bodyStyle, 'click').subscribe(() => {
    body?.classList.add('body-style1');
    body?.classList.remove('default-body');
    sidebarFn.checkHoriMenu();
  });
  // menu
  fromEvent(lightMenu, 'click').subscribe(() => {
    body?.classList.add('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    localStorage.setItem('Admitrolightmenu','true');
    localStorage.removeItem('Admitrodarkmenu');
    localStorage.removeItem('Admitrocolormenu');
    localStorage.removeItem('Admitrogradientmenu');
  });
  fromEvent(colorMenu, 'click').subscribe(() => {
    body?.classList.add('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    localStorage.setItem('Admitrocolormenu','true');
    localStorage.removeItem('Admitrodarkmenu');
    localStorage.removeItem('Admitrolightmenu');
    localStorage.removeItem('Admitrogradientmenu');

  });
  fromEvent(darkMenu, 'click').subscribe(() => {
    body?.classList.add('dark-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('gradient-menu');
    localStorage.setItem('Admitrodarkmenu','true');
    localStorage.removeItem('Admitrocolormenu');
    localStorage.removeItem('Admitrolightmenu');
    localStorage.removeItem('Admitrogradientmenu');
  });
  fromEvent(gradientMenu, 'click').subscribe(() => {
    body?.classList.add('gradient-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
    localStorage.setItem('Admitrogradientmenu','true');
    localStorage.removeItem('Admitrocolormenu');
    localStorage.removeItem('Admitrolightmenu');
    localStorage.removeItem('Admitrodarkmenu');
  });

  // header
  fromEvent(lightHeader, 'click').subscribe(() => {
    body?.classList.add('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
    localStorage.setItem('Admitrolightheader','true');
    localStorage.removeItem('Admitrodarkheader');
    localStorage.removeItem('Admitrocolorheader');
    localStorage.removeItem('Admitrogradientheader');
  });
  fromEvent(darkHeader, 'click').subscribe(() => {
    body?.classList.add('dark-header');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    localStorage.setItem('Admitrodarkheader','true');
    localStorage.removeItem('Admitrocolorheader');
    localStorage.removeItem('Admitrolightheader');
    localStorage.removeItem('Admitrogradientheader');

  });
  fromEvent(colorHeader, 'click').subscribe(() => {
    body?.classList.add('color-header');
    body?.classList.remove('light-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('gradient-header');
    localStorage.setItem('Admitrocolorheader','true');
    localStorage.removeItem('Admitrodarkheader');
    localStorage.removeItem('Admitrolightheader');
    localStorage.removeItem('Admitrogradientheader');
  });
  fromEvent(gradientHeader, 'click').subscribe(() => {
    body?.classList.add('gradient-header');
    body?.classList.remove('light-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('color-header');
    localStorage.setItem('Admitrogradientheader','true');
    localStorage.removeItem('Admitrodarkheader');
    localStorage.removeItem('Admitrolightheader');
    localStorage.removeItem('Admitrodarkheader');
  });
}

export function removeForTransparent() {
  if (document.querySelector('body')?.classList.contains('light-header')) {
    document.querySelector('body')?.classList.remove('light-header');
  }
  // color header
  if (document.querySelector('body')?.classList.contains('color-header')) {
    document.querySelector('body')?.classList.remove('color-header');
  }

  // dark header
  if (document.querySelector('body')?.classList.contains('dark-header')) {
    document.querySelector('body')?.classList.remove('dark-header');
  }

  // light menu
  if (document.querySelector('body')?.classList.contains('light-menu')) {
    document.querySelector('body')?.classList.remove('light-menu');
  }
  // color menu
  if (document.querySelector('body')?.classList.contains('color-menu')) {
    document.querySelector('body')?.classList.remove('color-menu');
  }

  // dark menu
  if (document.querySelector('body')?.classList.contains('dark-menu')) {
    document.querySelector('body')?.classList.remove('dark-menu');
  }
}

export function checkOptions() {
  // light header
  if (document.querySelector('body')?.classList.contains('light-header')) {
    const light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;
  }
  // color header
  if (document.querySelector('body')?.classList.contains('color-header')) {
    const light = document.getElementById('myonoffswitch7') as HTMLInputElement;
    light.checked = true;
  }

  // dark header
  if (document.querySelector('body')?.classList.contains('dark-header')) {
    const light = document.getElementById('myonoffswitch8') as HTMLInputElement;
    light.checked = true;
  }

  // light menu
  if (document.querySelector('body')?.classList.contains('light-menu')) {
    const light = document.getElementById('myonoffswitch3') as HTMLInputElement;
    light.checked = true;
  }
  // color menu
  if (document.querySelector('body')?.classList.contains('color-menu')) {
    const light = document.getElementById('myonoffswitch4') as HTMLInputElement;
    light.checked = true;
  }

  // dark menu
  if (document.querySelector('body')?.classList.contains('dark-menu')) {
    const light = document.getElementById('myonoffswitch5') as HTMLInputElement;
    light.checked = true;
  }
  if (document.querySelector('body')?.classList.contains('dark-menu')) {
    const light = document.getElementById('myonoffswitch5') as HTMLInputElement;
    light.checked = true;
  }

}

let myVarVal;
export function updateChanges() {
  const primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-bg-color')
    .trim();

  //get variable
  myVarVal =
    localStorage.getItem('Admitrolight-primary-color') ||
    localStorage.getItem('Admitrodark-primary-color') ||
    primaryColorVal;

  const colorData1 = hexToRgba(myVarVal, 0.1);
  document.querySelector('html')?.style.setProperty('--primary01', colorData1);

  const colorData2 = hexToRgba(myVarVal, 0.2);
  document.querySelector('html')?.style.setProperty('--primary02', colorData2);
  const colorData3 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary03', colorData3);

  const colorData6 = hexToRgba(myVarVal, 0.6);
  document.querySelector('html')?.style.setProperty('--primary06', colorData6);
  const colorData9 = hexToRgba(myVarVal, 0.9);
  document.querySelector('html')?.style.setProperty('--primary09', colorData9);

}
updateChanges();
