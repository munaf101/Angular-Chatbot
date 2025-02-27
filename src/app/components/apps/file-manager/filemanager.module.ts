import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManager1Component } from './file-manager1/file-manager1.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FilemanagaerDetailsComponent } from './filemanagaer-details/filemanagaer-details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FileManager1Component, FileManagerListComponent, FilemanagaerDetailsComponent],
  imports: [
    CommonModule,
    FilemanagerRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot(),
    SharedModule
  ]
})
export class FilemanagerModule { }
