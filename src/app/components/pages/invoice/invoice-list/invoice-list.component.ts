import { Component, OnInit } from '@angular/core';
import { invoiceListData } from 'src/app/shared/data/invoice/invoicelist';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ApiauthService } from 'src/app/Service/apiauth.service';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  questionId: number | null = null; // ✅ Property define kar di

  question: any = {};
  // keywords: string[] = [];
  // rows: any[] = [];  // 🔹 Keywords yahan store honge
  rows: any[] = [{ title: '', convId: '' }];


  id!: number;

  
  constructor(private route: ActivatedRoute,private authService: ApiauthService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.authService.getSQuestionById(this.id).subscribe((data) => {
        if (data.error) {
          console.error('Error:', data.error);
        } else {
          this.question = data;

          // ✅ Keywords ko rows array me store karna
          this.rows = data.keywords.map((keyword: string, index: number) => ({
            sno: index + 1,
            convId: keyword
          }));
        }
      });
    }
    
  }

  // rows: any[] = [];


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
