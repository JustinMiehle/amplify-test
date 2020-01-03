import { AgencyModule } from '@agency/agency.module';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from '@app/core';
import { environment } from '@env/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { JobService } from '@services/job/job.service';
import { StaffService } from '@services/staff/staff.service';
import { UserModule } from '@user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    LandingModule,
    AgencyModule,
    CustomMaterialModule,
    UserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAG9WLbhTe4L82dQpMWmh-M4ka4MB3VTE0',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [JobService, StaffService],
  bootstrap: [AppComponent]
})
export class AppModule {}
