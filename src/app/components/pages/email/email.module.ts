import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailReadComponent } from './email-read/email-read.component';
import { EmailRoutingModule } from './email-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [EmailComposeComponent, EmailInboxComponent, EmailReadComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class EmailModule { }
