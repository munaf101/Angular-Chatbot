import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admitro';
  public isSpinner = false;

  ngOnInit(): void { 
    setTimeout(() => {
      this.isSpinner = false;
    },3000)
  }
}
