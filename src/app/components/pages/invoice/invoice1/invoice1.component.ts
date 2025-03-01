import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice1',
  templateUrl: './invoice1.component.html',
  styleUrls: ['./invoice1.component.scss']
})
export class Invoice1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

  // rows: any[] = [];
  rows: any[] = [{ title: '', convId: '' }];


  addRow() {
    this.rows.push({ title: '', convId: '' });
  }

  removeRow(index: number) {
    // this.rows.splice(index, 1);
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
    }   
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  }
  onFileSelected1(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Selected file:', file.name); 
    }
  }

}
