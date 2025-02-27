import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat1Component } from './chat1/chat1.component';
import { Chat3Component } from './chat3/chat3.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule  } from 'ngx-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [Chat1Component, Chat3Component],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule,
    NgScrollbarModule,
    SharedModule
  ],
 
})
export class ChatModule { }
