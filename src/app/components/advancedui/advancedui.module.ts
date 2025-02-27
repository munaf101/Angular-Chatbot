import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceduiRoutingModule } from './advancedui-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { CardsComponent } from './cards/cards.component';
import { CardImagesComponent } from './card-images/card-images.component';
import { ModalComponent } from './modal/modal.component';
import { RatingComponent } from './rating/rating.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { HighlightModule } from 'ngx-highlightjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClipboardModule } from 'ngx-clipboard';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AccordionComponent,
    CardsComponent,
    CardImagesComponent,
    ModalComponent,RatingComponent, SweetAlertComponent, TimelineComponent, SearchComponent
  ],
  imports: [
    CommonModule,
    AdvanceduiRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BarRatingModule,
    HighlightModule,
    NgSelectModule,
    ClipboardModule,
    

  ]
})
export class AdvanceduiModule { }
