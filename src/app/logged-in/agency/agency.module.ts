import { AgencyRoutingModule } from '@agency/agency-routing.module';
import { AgencyComponent } from '@agency/agency.component';
import { HomeComponent } from '@agency/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAccordion } from '@angular/material';
import { SharedModule } from '@app/shared';
import { CustomMaterialModule } from '@core/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { agencyReducers } from './agency.state';
import { FindStaffComponent } from './find-staff/components/find-staff.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { NewJobComponent } from './new-job/components/new-job.component';
import { NewJobFormFacade } from './new-job/new-job-form.facade';
import { ProfileComponent } from './profile/profile.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgencyRoutingModule,
    NgbModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    AgmCoreModule,
    MatGoogleMapsAutocompleteModule,
    StoreModule.forFeature('agency', agencyReducers)
  ],
  declarations: [
    AgencyComponent,
    HomeComponent,
    NewJobComponent,
    FindStaffComponent,
    JobDetailsComponent,
    SummaryComponent,
    ProfileComponent,
    StaffProfileComponent
  ],
  bootstrap: [AgencyComponent],
  providers: [NewJobFormFacade]
})
export class AgencyModule { }
