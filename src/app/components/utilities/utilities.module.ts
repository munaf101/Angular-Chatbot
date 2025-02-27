import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderComponent } from './border/border.component';
import { ColorsComponent } from './colors/colors.component';
import { DisplayComponent } from './display/display.component';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { TyphographyComponent } from './typhography/typhography.component';
import { WidthComponent } from './width/width.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BorderComponent, ColorsComponent, DisplayComponent, FlexItemsComponent, HeightComponent, MarginComponent, PaddingComponent, TyphographyComponent, WidthComponent],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    NgbModule,
    HighlightModule,
    ClipboardModule,
    SharedModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
})
export class UtilitiesModule { }
