import { AgencyComponent } from '@agency/agency.component';
import { FindStaffComponent } from '@agency/find-staff/components/find-staff.component';
import { HomeComponent } from '@agency/home/home.component';
import { NewJobComponent } from '@agency/new-job/components/new-job.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard, extract } from '@app/core';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ProfileComponent } from './profile/profile.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'agency',
    component: AgencyComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: extract('Home') }
      },
      {
        path: 'new-job',
        component: NewJobComponent,
        data: { title: extract('Upload New Job') }
      },
      {
        path: 'find-staff',
        component: FindStaffComponent,
        data: { title: extract('Find Staff') }
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: { title: extract('Summary') }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: extract('Profile') }
      },
      {
        path: 'job-details/:jobId',
        component: JobDetailsComponent,
        data: { title: extract('Job Details') }
      },
      {
        path: 'staff-profile/:staffId',
        component: StaffProfileComponent,
        data: { title: extract('Staff Profile') }
      }
    ],
    canActivate: [AuthenticationGuard],
    data: {
      reuse: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AgencyRoutingModule {}
