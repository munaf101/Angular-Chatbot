import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
// import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LeafletMapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    LeafletModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA'
    // }),
    HttpClientModule,
    SharedModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule { }
