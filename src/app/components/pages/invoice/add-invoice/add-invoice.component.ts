import { Component, OnInit } from '@angular/core';
import { ApiauthService } from 'src/app/Service/apiauth.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  introMessage: string = '';

  questions: any[] = [];
   selectedQuestion: number | null = null;
   // keyword: string = '';
   // keywords: string[] = ['']; // Multiple keywords
   keywords: any[] = [{ conv_id:'', introMessage: '',title:'', questions:'',status:''}];
 
 
   message: string = '';
 
 
   constructor(private authService: ApiauthService) { }
  
   ngOnInit(): void {
 
     this.authService.getQuestionData().subscribe(
       data => this.questions = data,
       error => console.error('Error fetching questions:', error)
     );
     
   }
 
  //  submitQuestion() {
  //    // Filter out empty titles and extract only the `title` values
  //    const validKeywords = this.keywords.map(k => ({
  //     parent: this.selectedQuestion, // ✅ Use selected question as parent
  //     conv_id: k.conv_id || '', // ✅ Ensure default value if empty
  //     intro_message: k.intro_message || '',
  //     title: k.title || '',
  //     questions: k.questions || '',
  //     status: k.status || ''
  //   }));
  //     //  .filter(k => typeof k.title === 'string' && k.title.trim() !== '')  // ✅ Only valid titles
  //     //  .map(k => k.title.trim()); // ✅ Extract only titles
   
  //    if (this.selectedQuestion && validKeywords.length > 0) {
  //      this.authService.saveQuestion(this.selectedQuestion, validKeywords.map(k => k.conv_id),
  //      validKeywords.map(k => k.intro_message),
  //      validKeywords.map(k => k.title),
  //      validKeywords.map(k => k.questions),
  //      validKeywords.map(k => k.status)).subscribe(
  //        response => {
  //          this.message = response.message;
  //          this.resetForm(); // ✅ Clear inputs after submission
  //        },
  //        error => this.message = "Error saving keywords"
  //      );
  //    } else {
  //      this.message = "Please select a question and enter at least one keyword.";
  //    }
  //  }
  submitQuestion() {
  console.log('Selected Question:', this.selectedQuestion);
  console.log('Keywords:', this.keywords);
  
  // Convert keywords to JSON object format
  const validKeywords = this.keywords.map(k => ({
    parent: this.selectedQuestion,
    conv_id: k.conv_id || '',
    // intro_message: k.intro_message || '',
    intro_message: this.introMessage, 
    title: k.title || '',
    questions: k.questions || '',
    input_type: k.input_type || '',  
    status: k.status || ''
  }));

  console.log('Valid Keywords:', validKeywords);

  if (this.selectedQuestion && validKeywords.length > 0) {
    this.authService.saveQuestion(validKeywords).subscribe(
      response => {
        console.log('Response from API:', response);
        this.message = response.message;
        this.resetForm();
      },
      error => {
        console.error('Error saving keywords:', error);
        this.message = "Error saving keywords";
      }
    );
  } else {
    this.message = "Please select a question and enter at least one keyword.";
  }
}

   
   resetForm() {
     this.keywords = [{introMessage:'', convId: '',question:'', input:'',pdf:'',status:'',image:''}]; // ✅ Reset with one empty row
     this.selectedQuestion = null; // ✅ Clear selected question
     this.introMessage = ''; // ✅ Clear intro message

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
