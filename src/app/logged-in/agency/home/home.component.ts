import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CredentialsService } from '@app/core';
import Job from '@models/job/job.model';
import { JobService } from '@services/job/job.service';
import { calculateSumOfWorkingHours } from '@shared/lambdas/calculate-sum-of-working-hours.lambda';
import { convertDecimalToTimestring } from './../../../shared/lambdas/hoursAndMinutes/convert-decimal-to-timestring.lambda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs: Job[];
  pastJobs: Job[];
  agency: string;
  jobsDisplayedColumns: string[] = [
    'title',
    // 'description',
    'from',
    'to',
    'hourlyWage',
    'totalWage',
    'confirmed',
    'toBeConfirmed',
    'vacant',
    'needed'
  ];
  pastJobsDisplayedColumns: string[] = ['title', 'description', 'confirmed', 'toBeConfirmed', 'vacant', 'needed'];

  jobsSource: MatTableDataSource<Job>;
  pastJobsSource: MatTableDataSource<Job>;

  calculateSumOfWorkingHours = calculateSumOfWorkingHours;
  convertDecimalToTimestring = convertDecimalToTimestring;

  @ViewChild(MatSort, { static: true }) jobsSort: MatSort;
  @ViewChild(MatSort, { static: true }) pastJobsSort: MatSort;

  constructor(
    private router: Router, private jobService: JobService, private credentialsService: CredentialsService
  ) { }

  ngOnInit() {
    this.agency = this.credentialsService.credentials.username;

    this.jobs = this.jobService.getJobs();
    this.pastJobs = this.jobService.getJobs();

    this.jobsSource = new MatTableDataSource(this.jobs);
    this.jobsSource.sort = this.jobsSort;

    this.pastJobsSource = new MatTableDataSource(this.pastJobs);
    this.pastJobsSource.sort = this.pastJobsSort;
  }

  navigateToJob(jobId: number) {
    this.router.navigate(['/agency/job-details/' + jobId]);
  }
}
