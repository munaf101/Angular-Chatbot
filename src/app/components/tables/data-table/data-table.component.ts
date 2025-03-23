import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DatatableComponent implements OnInit {

    modalOptions: NgbModalOptions;
  
  constructor( private modalService: NgbModal
  ) {
    // Create 100 users
    this.modalOptions = {}; // ✅ Assign a default value }
  }
  ngOnInit(): void {
  }

  LargeSizeOpen(largesizemodal:any) {
    this.modalService.open(largesizemodal, { size: 'lg' });
  }
}
