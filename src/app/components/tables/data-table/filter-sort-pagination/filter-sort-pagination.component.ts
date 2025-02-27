import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiauthService } from 'src/app/Service/apiauth.service';

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
  selector: 'app-filter-sort-pagination',
  templateUrl: './filter-sort-pagination.component.html',
  styleUrls: ['./filter-sort-pagination.component.scss']
})
export class FilterSortPaginationComponent implements OnInit {
  viewquestionData: UserData[] = [];

  // viewquestionData: any;
  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  displayedColumns: string[] = ['id','parent', 'conv_id','title', 'question', 'action'];

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

    this.authService.getViewquestionData().subscribe(data => {
      console.log("API REsponse"+data);
      this.viewquestionData = data.map((item: any, index: number) => ({
        id: (index + 1).toString(),  // 1, 2, 3, ... jitna record ho
        conv_id: item.conv_id,
        questions: item.questions,
        title: item.title,
        parent: item.parent_hierarchy ? `hi -> ${item.parent_hierarchy}` : 'hi',
        action: 'Action Button'  // Ye sirf example ke liye, aap apna logic laga sakte hain
      }));
      this.dataSource.data = this.viewquestionData;  // ✅ Corrected


      // this.dataSource = new MatTableDataSource(this.viewquestionData);

      // Sorting aur pagination set karo
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });


  }
 
}


/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     // id: id.toString(),
//     // name: name,
//     // progress: Math.round(Math.random() * 100).toString(),
//     // fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],

//     id: id.toString(),
//     conv_id: `conv_${id}`,
//     questions: `Questions ${id}`,
//     title: `Title ${id}`,
//     parent: `Parent ${id}`,
//     action: 'Action Button'
//   };
  
// }
