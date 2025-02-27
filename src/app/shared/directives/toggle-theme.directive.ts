import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleTheme]'
})
export class ToggleThemeDirective {
  private body:HTMLBodyElement | any = document.querySelector('body');
  constructor() { }

  @HostListener('click') toggleTheme(){
    if (this.body != !this.body) {
      this.body.classList.toggle('dark-theme');
      if(this.body.classList.contains("dark-theme")){
        this.body.classList.remove('light-menu');
        this.body.classList.remove('light-header');
        const lightbtn = document.getElementById('myonoffswitch1') as HTMLInputElement;
        lightbtn.checked = false;
        const btndark = document.getElementById('myonoffswitch2') as HTMLInputElement;
        btndark.checked = true;
        const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
        darkheader.checked = true;
        const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
        darkmenu.checked = true;
        localStorage.setItem("AdmitroDarkTheme","true");
        localStorage.removeItem("Admitrolight-theme");
      }else{
        this.body.classList.remove('dark-menu');
        this.body.classList.remove('dark-header');
        const LightBtn : any = document.querySelector("#myonoffswitch1");
        LightBtn.checked = true;
         const lightheader = document.getElementById('myonoffswitch6') as HTMLInputElement;
    lightheader.checked = true;
    const lightmenu = document.getElementById('myonoffswitch3') as HTMLInputElement;
    lightmenu.checked = true;
        const btndark = document.getElementById('myonoffswitch2') as HTMLInputElement;
        btndark.checked = false;
        const darkheader = document.getElementById('myonoffswitch8') as HTMLInputElement;
        darkheader.checked = false;
        const darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
        darkmenu.checked = false;
        localStorage.setItem("Admitrolight-theme","true");
        localStorage.removeItem("AdmitroDarkTheme");
      }
    }
}
}
