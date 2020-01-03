import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Job from '@app/shared/models/job/job.model';
import Staff from '@app/shared/models/staff/staff.model';
import { JobService } from '@app/shared/services/job/job.service';
import { Observable } from 'rxjs';
import { flatMap, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job$: Observable<Job>;

  staffDisplayedColumns: string[] = ['name', 'age', 'hairColor', 'location', 'specialty', 'gender'];

  confirmedStaffSource = new MatTableDataSource<Staff>();
  toBeConfirmedStaffSource = new MatTableDataSource<Staff>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.job$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.jobService.getJob(params.get('jobId'))),
      tap(job => {
        console.log(job);
        this.confirmedStaffSource.data = job.confirmed;
        this.toBeConfirmedStaffSource.data = job.toBeConfirmed;
      })
    );
  }

  navigateToFindStaff(job: Job) {
    this.router.navigate(['/agency/find-staff'], {
      queryParams: {
        gender: job.genderWanted,
        ageRange: job.ageRanges.map(ageRange => ageRange.display),
        forJob: job.id
      }
    });
  }

  navigateToStaff(staffId: string) {
    this.router.navigate(['/agency/staff-profile/' + staffId]);
  }

  navigateBack() {
    this._location.back();
  }
}
