import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [Profile1Component, Profile2Component],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ProfileModule { }
