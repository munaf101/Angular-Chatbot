import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DragulaCardComponent } from './dragula-card/dragula-card.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PageSessionComponent } from './page-session/page-session.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'dragula-card',
        component: DragulaCardComponent
      },
      {
        path: 'image-crop',
        component: ImageCropComponent
      },
      {
        path: 'loaders',
        component: LoadersComponent
      },
      {
        path: 'notify',
        component: NotificationsComponent
      },
      {
        path: 'page-sessiontimeout',
        component: PageSessionComponent
      },
      {
        path: 'rangeslider',
        component: RangeSliderComponent
      },
    
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
