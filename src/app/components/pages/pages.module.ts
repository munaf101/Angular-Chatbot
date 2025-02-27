import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import 'mousetrap'
import { NgSelectModule } from '@ng-select/ng-select';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TermsComponent,   FaqsComponent, EmptyPageComponent, GalleryComponent, EditProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    GalleryModule,
    NgSelectModule,
    SharedModule
  ]
})
export class PagesModule { }
