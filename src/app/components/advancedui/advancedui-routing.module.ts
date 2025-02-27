import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardImagesComponent } from './card-images/card-images.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { RatingComponent } from './rating/rating.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
 { path:'',
  children:[
    {
      path: 'accordion',
      component: AccordionComponent
    },
    {
      path: 'cards',
      component: CardsComponent
    },
    {
      path: 'card-images',
      component: CardImagesComponent
    },
    {
      path: 'modal',
      component: ModalComponent
    },
    {
      path: 'rating',
      component: RatingComponent
    },
    {
      path: 'sweetalert',
      component: SweetAlertComponent
    },
    {
      path: 'time-line',
      component: TimelineComponent
    },
    { path: 'search', component: SearchComponent},

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceduiRoutingModule { }
