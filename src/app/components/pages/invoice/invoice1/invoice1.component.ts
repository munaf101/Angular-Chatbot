import { Component, OnInit } from '@angular/core';
import { ApiauthService } from 'src/app/Service/apiauth.service';

@Component({
  selector: 'app-invoice1',
  templateUrl: './invoice1.component.html',
  styleUrls: ['./invoice1.component.scss']
})
export class Invoice1Component implements OnInit {
  questions: any[] = [];
  selectedQuestion: number | null = null;
  // keyword: string = '';
  // keywords: string[] = ['']; // Multiple keywords
  keywords: any[] = [{ title: '', convId: '' }];


  message: string = '';


  constructor(private authService: ApiauthService) { }

  ngOnInit(): void {

    this.authService.getaddkeysData().subscribe(
      data => this.questions = data,
      error => console.error('Error fetching questions:', error)
    );
    
  }
  // submitKeywords() {
  //   const validKeywords = this.keywords
  //     .filter(k => typeof k === 'string' && k.trim() !== ''); // ✅ Fixed
  
  //   if (this.selectedQuestion && validKeywords.length > 0) {
  //     this.authService.saveKeywords(this.selectedQuestion, validKeywords).subscribe(
  //       response => {
  //         this.message = response.message;
  //         this.resetForm();
  //       },
  //       error => this.message = "Error saving keywords"
  //     );
  //   } else {
  //     this.message = "Please select a question and enter at least one keyword.";
  //   }
  // }

  submitKeywords() {
    // Filter out empty titles and extract only the `title` values
    const validKeywords = this.keywords
      .filter(k => typeof k.title === 'string' && k.title.trim() !== '')  // ✅ Only valid titles
      .map(k => k.title.trim()); // ✅ Extract only titles
  
    if (this.selectedQuestion && validKeywords.length > 0) {
      this.authService.saveKeywords(this.selectedQuestion, validKeywords).subscribe(
        response => {
          this.message = response.message;
          this.resetForm(); // ✅ Clear inputs after submission
        },
        error => this.message = "Error saving keywords"
      );
    } else {
      this.message = "Please select a question and enter at least one keyword.";
    }
  }
  
  resetForm() {
    this.keywords = [{ title: '', convId: '' }]; // ✅ Reset with one empty row
    this.selectedQuestion = null; // ✅ Clear selected question
  }
  
  

  addRow() {
    this.keywords.push({ title: '', convId: '' });
  }

  removeRow(index: number) {
    // this.rows.splice(index, 1);
    if (this.keywords.length > 1) {
      this.keywords.splice(index, 1);
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
