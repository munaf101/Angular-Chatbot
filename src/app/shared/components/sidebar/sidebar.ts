
import { fromEvent } from 'rxjs';

export function switcherArrowFn() {
  // used to remove show class and remove class on clicking arrow buttons
  function slideClick() {
    const slide = document.querySelectorAll<HTMLElement>('.slide');
    const slideMenu = document.querySelectorAll<HTMLElement>('.slide-menu');
    slide.forEach((element, index) => {
      if (element.classList.contains('is-expanded') == true) {
        element.classList.remove('is-expanded');
      }
    });
    slideMenu.forEach((element, index) => {
      if (element.classList.contains('open') == true) {
        element.classList.remove('open');
        element.style.display = 'none';
      }
    });
  }

  checkHoriMenu();

  const slideLeft: HTMLElement | any = document.querySelector('.slide-left');
  const slideRight: HTMLElement | any = document.querySelector('.slide-right');
if(slideLeft){

  fromEvent(slideLeft, 'click').subscribe(() => {

    const menuNav: any = document.querySelector<HTMLElement>('.side-menu');
    const mainContainer1: any =
      document.querySelector<HTMLElement>('.main-sidemenu');
    const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split('px')[0]));
    const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split('px')[0]));
    const mainContainer1Width = mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (!document.body.classList.contains('rtl')) {
        if ( marginLeftValue < 0 && !(Math.abs(marginLeftValue) < mainContainer1Width)) {
          menuNav.style.marginRight = 0;
          menuNav.style.marginLeft = Number(menuNav.style.marginLeft.split('px')[0]) + Math.abs(mainContainer1Width) + 'px';
          slideRight.classList.remove('d-none');
        } else if (marginLeftValue >= 0) {
          menuNav.style.marginLeft = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        } else {
          menuNav.style.marginLeft = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        }
      } else {
        if ( marginRightValue < 0 && !(Math.abs(marginRightValue) < mainContainer1Width)) {
          menuNav.style.marginLeft = 0;
          menuNav.style.marginRight = Number(menuNav.style.marginRight.split('px')[0]) + Math.abs(mainContainer1Width) + 'px';
          slideRight.classList.remove('d-none');
        } else if (marginRightValue >= 0) {
          menuNav.style.marginRight = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        } else {
          menuNav.style.marginRight = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        }
      }
    }

    slideClick();
    
    //
  });
}
if(slideRight){

  fromEvent(slideRight, 'click').subscribe(() => {
    const menuNav: any = document.querySelector<HTMLElement>('.side-menu');
    const mainContainer1: any = document.querySelector<HTMLElement>('.main-sidemenu');
  
    const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split('px')[0]));
    const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split('px')[0]));
    const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
    let mainContainer1Width = mainContainer1.offsetWidth;
  
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (!document.body.classList.contains('rtl')) {
        if (Math.abs(check) > Math.abs(marginLeftValue)) {
          menuNav.style.marginRight = 0;
          if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
            mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
            slideRight.classList.add('d-none');
          }
          menuNav.style.marginLeft = Number(menuNav.style.marginLeft.split('px')[0]) - Math.abs(mainContainer1Width) + 'px';
          slideLeft.classList.remove('d-none');
        }
      } else {
        if (Math.abs(check) > Math.abs(marginRightValue)) {
          menuNav.style.marginLeft = 0;
          if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
            mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
            slideRight.classList.add('d-none');
          }
          menuNav.style.marginRight = Number(menuNav.style.marginRight.split('px')[0]) - Math.abs(mainContainer1Width) + 'px';
          slideLeft.classList.remove('d-none');
        }
      }
    }
  
    slideClick();
    
  });
}

}
export function checkHoriMenu() {

  const menuNav: any = document.querySelector<HTMLElement>('.side-menu');
  const mainContainer1: any = document.querySelector<HTMLElement>('.main-sidemenu');
  const slideLeft: HTMLElement | any = document.querySelector('.slide-left');
  const slideRight: HTMLElement | any = document.querySelector('.slide-right');
  const marginLeftValue = Math.ceil(Number(window?.getComputedStyle(menuNav)?.marginLeft.split('px')[0]));
  const marginRightValue = Math.ceil(Number(window?.getComputedStyle(menuNav)?.marginRight.split('px')[0]));
  const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

  setTimeout(()=>{

    // Show/Hide the arrows
    if (menuNav && slideRight && slideLeft) {
  if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
    slideRight.classList.remove('d-none');
    slideLeft.classList.add('d-none');
  }
  else{
    slideRight.classList.add('d-none');
    slideLeft.classList.add('d-none');
    menuNav.style.marginLeft = '0px';
    menuNav.style.marginRight = '0px';
  }
  if(marginLeftValue == 0 || marginRightValue == 0){
    slideLeft.classList.add('d-none');
  }
  else{
    slideLeft.classList.remove('d-none');
  }
  //
  if(!document.body.classList.contains('rtl')){

    // LTR check the width and adjust the menu in screen
    if (menuNav.scrollWidth > mainContainer1.offsetWidth){
      if(Math.abs(check) < Math.abs(marginLeftValue)){
        menuNav.style.marginLeft = -check + 'px';
        slideLeft.classList.remove('d-none');
        slideRight.classList.add('d-none');
      }
    }
  }
  else{
    // RTL check the width and adjust the menu in screen
    if (menuNav.scrollWidth > mainContainer1.offsetWidth){
      console.log(menuNav.scrollWidth , mainContainer1.offsetWidth);
      if(Math.abs(check) < Math.abs(marginRightValue)){
        menuNav.style.marginRight = -check + 'px';
        slideLeft.classList.remove('d-none');
        slideRight.classList.add('d-none');
      }
    }
  }
  if(marginLeftValue != 0 || marginRightValue !=0 ){
    slideLeft.classList.remove('d-none');
  }
}
}, 500);

}

export function parentNavActive() {
  const slideItemActive = document.querySelector(
    '.slide-item.active:not([href="/"])'
  );
  const SubslideItemActive = document.querySelector(
    '.sub-slide-item.active:not([href="/"])'
  );
  if (slideItemActive) {
    slideItemActive.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.add(
      'active'
    );
  }
  if (SubslideItemActive) {
    SubslideItemActive.parentElement?.classList.add('active');
    SubslideItemActive.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.add(
      'active'
    );
    SubslideItemActive.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.add(
      'active'
    );
  }
}
	// var button = document.getElementById("debounce");
	// const debounce = (func, delay) => {
	// 	let debounceTimer: string | number | NodeJS.Timeout | undefined;
	// 	return function() {
	// 		const context = this
	// 		const args = arguments
	// 			clearTimeout(debounceTimer);
	// 				debounceTimer
	// 			= setTimeout(() => func.apply(context, args), delay);
	// 	}
	// };
	// button.addEventListener('click', debounce(onresize(), 3000));