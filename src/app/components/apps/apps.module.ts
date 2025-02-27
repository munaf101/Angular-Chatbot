import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DragulaCardComponent } from './dragula-card/dragula-card.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PageSessionComponent } from './page-session/page-session.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { AppsRoutingModule } from './apps-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BarRatingModule } from 'ngx-bar-rating';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 15
    },
    vertical: {
      position: 'top',
      distance: 15,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [CalendarComponent, DragulaCardComponent, ImageCropComponent, LoadersComponent, NotificationsComponent, PageSessionComponent, RangeSliderComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    NotifierModule.withConfig(customNotifierOptions),
    SweetAlert2Module,
    FormsModule,
    
    ReactiveFormsModule,
    NgxSliderModule,
    AngularCropperjsModule,
    // DragulaModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    // FlatpickrModule.forRoot(),
    ColorPickerModule,
    NgScrollbarModule ,
    SharedModule,
    DragDropModule,
    BarRatingModule

  ],
  providers: [  ],
})
export class AppsModule { }
