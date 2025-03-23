import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiauthService } from 'src/app/Service/apiauth.service';
import { Router } from '@angular/router';


export interface UserData {
  // id: string;
  // name: string;
  // progress: string;
  // fruit: string;
  id: string;
  conv_id: string;
  questions: string;
  title: string;
  parent: string;
  agent_link: string;
  view_link: string;   
  action: string;
  
}   


/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-basic-data-table',
  templateUrl: './basic-data-table.component.html',
  styleUrls: ['./basic-data-table.component.scss']
})
export class BasicDataTableComponent implements OnInit {

  viewreportData: UserData[] = [];
  view_reportss = "http://localhost:4200/view/report/bot_messages"; // Define the variable

  // viewquestionData: any;
  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  displayedColumns: string[] = ['id','phone', 'message','time', 'bot', 'agent'];

  // dataSource: MatTableDataSource<UserData>;
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private authService: ApiauthService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }
  
truncateText(text: string, wordLimit: number): string {
  if (!text) return '';

  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text; // Agar words 3 ya usse kam hain, full text return kare
  }
  return words.slice(0, wordLimit).join(' ') + '...'; // Pehle 3 words + "..."
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnInit(): void {
    

    this.authService.getviewreportData().subscribe(data => {
      console.log("API REsponse"+data);
      this.viewreportData = data.data.map((item: any, index: number) => ({
        id: (index + 1).toString(),  // 1, 2, 3, ... jitna record ho
        message: item.message,    
        // questions: item.questions,
        questions: item.questions,
        created: item.created,
        // parent: item.parent_hierarchy ? `hi -> ${item.parent_hierarchy}` : 'hi',
        phone_no: item.sender,   
        view_link: item.sender,
        agent_link: item.sender,
        action: 'Action Button'  // Ye sirf example ke liye, aap apna logic laga sakte hain
      }));
      this.dataSource.data = this.viewreportData;  // ✅ Corrected


      // this.dataSource = new MatTableDataSource(this.viewquestionData);

      // Sorting aur pagination set karo
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });


  }

  

}
