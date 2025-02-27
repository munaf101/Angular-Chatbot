import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';

import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/layouts/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ContentStyleComponent } from './components/layouts/content-style/content-style.component';
import { FullContentComponent } from './components/layouts/full-content/full-content.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import {  NgScrollbarModule } from 'ngx-scrollbar';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ElementCardHeaderComponent } from './components/element-card-header/element-card-header.component';

import { FullscreenToggleDirective } from './directives/fullscreen-toggle.directive';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    ContentComponent,
    SidebarComponent,
    FullContentComponent,
    ContentStyleComponent,
    ContentComponent,
    SwitcherComponent,
    ToggleThemeDirective,
    PageHeaderComponent,
    ElementCardHeaderComponent,
    FullscreenToggleDirective,
    HoverEffectSidebarDirective
],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgScrollbarModule,NgxColorsModule,FormsModule
  ],
  providers: [
   
  ],
  exports: [
    ContentComponent,
    LoaderComponent,
    FullContentComponent,
    ContentComponent,
    ContentStyleComponent,
    ToggleThemeDirective,
    PageHeaderComponent,
    ElementCardHeaderComponent,
    FullscreenToggleDirective,
    HoverEffectSidebarDirective
  ],
})
export class SharedModule { }
