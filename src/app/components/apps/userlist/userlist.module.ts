import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList1Component } from './user-list1/user-list1.component';
import { UserList2Component } from './user-list2/user-list2.component';
import { UserList3Component } from './user-list3/user-list3.component';
import { UserlistRoutingModule } from './userlist-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [UserList1Component, UserList2Component, UserList3Component],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class UserlistModule { }
