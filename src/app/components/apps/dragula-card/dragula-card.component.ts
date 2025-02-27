import { Component, HostListener, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

// import {dragula} from 'ng2-dragula';
@Component({
  selector: 'app-dragula-card',
  templateUrl: './dragula-card.component.html',
  styleUrls: ['./dragula-card.component.scss']
})
export class DragulaCardComponent implements OnInit {

  todo = [
    "",
  ];
  todo1 = [
    "",
  ];
  todo2 = [
    "",
  ];
  todo3 = [
    "",
  ];
  todo4 = [
    "",
  ];
  
    done = [""
  ];
  drag = [
    "",
  ];
  drag1 = [
    "",
  ];
  drag2=[

  ];
  drag3=[

  ];
  
    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
  
    constructor() { }

    ngOnInit(): void {
  
    }
    scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  
    scrolled: boolean | unknown = false;
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.scrolled = window.scrollY > 10;
  
    }

}
