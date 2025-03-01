import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  rows: any[] = [{ title: '', convId: '', question: '', input: '', image : '' ,pdf: '',status: '' }];


  addRow() {
    this.rows.push({ title: '', convId: '' , question: '', input: '', image : '' ,pdf: '',status: '' });
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
