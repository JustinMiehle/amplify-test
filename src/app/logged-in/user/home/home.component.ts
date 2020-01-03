import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/core';
import Job from '@models/job/job.model';
import { JobService } from '@services/job/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs: Job[];
  user: string;
  constructor(private jobService: JobService, private credentialsService: CredentialsService) {}

  ngOnInit() {
    this.user = this.credentialsService.credentials.username;

    this.jobs = this.jobService.getJobs();
  }
}
