import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiauthService } from 'src/app/Service/apiauth.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {
  
  // question: any = {}; 
  // parentOptions: any[] = [];
  // childQuestions: any[] = [];
  // rows: any[] = [];
  // edit_id = 256; // API call ke liye question ID (example)

  question: any = {
    id: null,
    title: '',
    description: '',
    parent: '',
    // other properties...
  };
  parentOptions: any[] = [];
  childQuestions: any[] = [];
  rows: any[] = [];
  edit_id: number = 0;
  // questionId: number | null = null; // ✅ Property define ki

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     const idParam = params.get('id'); // ✅ Get parameter
  //     if (idParam !== null) {
  //       this.questionId = Number(idParam); // ✅ Convert string to number
  //       console.log('Received Question ID:', this.questionId);
  //     } else {
  //       console.error('ID not found in URL');
  //     }
  //   });
      
  // }


  // rows: any[] = [{ title: '', convId: '', question: '', input: '', image : '' ,pdf: '',status: '' }];

  
    questionId: number | null = null; // ✅ Property define kar di
  
    // question: any = {};
    // keywords: string[] = [];
    // rows: any[] = [];  // 🔹 Keywords yahan store honge
    // rows: any[] = [{ title: '', convId: '' }];
  
  
    id!: number;
  
    
    constructor(private route: ActivatedRoute,private authService: ApiauthService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        if (idParam !== null) {
          this.edit_id = Number(idParam);
          this.loadQuestionData();
        } else {
          console.error('ID not found in URL');
        }
      });
      // this.id = Number(this.route.snapshot.paramMap.get('id'));
  
      // if (this.id) {
      //   this.authService.getSQuestionById(this.id).subscribe((data) => {
      //     if (data.error) {
      //       console.error('Error:', data.error);
      //     } else {
      //       this.question = data;
  
      //       // ✅ Keywords ko rows array me store karna
      //       this.rows = data.keywords.map((keyword: string, index: number) => ({
      //         sno: index + 1,
      //         convId: keyword
      //       }));
      //     }
      //   });
      // }
      
      
    // this.authService.getQuestionById(this.edit_id).subscribe(
    //   (data) => {
    //     console.log('API Response:', data); // ✅ Debugging ke liye

    //     this.question = data.question || {};
    //     this.parentOptions = data.parent_options || [];
    //     this.childQuestions = data.child_questions || [];
    //     this.rows = [...this.childQuestions]; // Table rows ko fill karne ke liye
    //   },
    //   (error) => {
    //     console.error('Error fetching question:', error);
    //   }
    // );
    this.authService.getQuestionById(this.edit_id).subscribe(
      (data) => {
        console.log('Raw API Response:', JSON.stringify(data)); // This will show the exact structure
        this.question = data.question || {};
        console.log('Question object:', this.question); // See what's in the question object
        if (data.parent_hierarchy) {
          this.question.parent_hierarchy = data.parent_hierarchy;
        }
        this.parentOptions = data.parent_options || [];
        this.childQuestions = data.child_questions || [];
        
        // If no child questions, initialize with an empty row
        if (this.childQuestions.length > 0) {
          this.rows = [...this.childQuestions];
        } else {
          this.rows = [{ title: '', convId: '', question: '', input: '', image: '', pdf: '', status: '' }];
        }
        
        console.log('Rows after setup:', this.rows); // Check your rows array
      },
      (error) => {
        console.error('Error fetching question:', error);
      }
    );
    }
    ///


loadQuestionData() {
  this.authService.getQuestionById(this.edit_id).subscribe(
    (data) => {
      console.log('API Response:', data);
      // console.log('Parent Options:', data.parent_options); 
      console.log('Parent hierarchy:', this.question.parent_hierarchy);



      this.question = data.question || {};
      this.parentOptions = data.parent_options || [];
      this.childQuestions = data.child_questions || [];
      this.rows = this.childQuestions.length > 0 ? [...this.childQuestions] : 
        [{ title: '', convId: '', question: '', input: '', image: '', pdf: '', status: '' }];
    },
    (error) => {
      console.error('Error fetching question:', error);
    }
  );
}
    ///
  
    // rows: any[] = [];
  
  

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

  // onFileSelected(event: Event, row: any) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     row.image = file;
  //     console.log('Selected image:', file.name);
  //   }
  // }
  
  // onFileSelected1(event: Event, row: any) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     row.pdf = file;
  //     console.log('Selected PDF:', file.name);
  //   }
  // }

}
