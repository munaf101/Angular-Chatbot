import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import { CarouselRoutingModule } from './carousel-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [Carousel1Component, Carousel2Component, Carousel3Component],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    NgbModule,
    HighlightModule
  ],
})
export class CarouselModule { }
