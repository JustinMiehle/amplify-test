import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkingHours } from '@app/shared/models/job/working-hours/working-hours.model';
import { jobTypes } from '@models/job/job-type/job-types';
import { outfits } from '@models/job/outfit/outfits';
import { languages } from '@models/language/languages';
import { hairColors } from '@models/staff/hair-color/hair-colors';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@services/notifications/notification.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NewJobFormFacade } from '../new-job-form.facade';
import { NewJobForm } from '../new-job-form.model';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
  routeAnimationsElements = 'route-animations-elements';
  hairColors = hairColors;
  outfits = outfits;
  jobTypes = jobTypes;
  languages = languages;

  workingHours: Array<WorkingHours> = [];

  form = this.formBuilder.group({
    title: ['', [Validators.required]],
    password: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
    startTime: ['', [Validators.required]],
    endTime: ['', [Validators.required]],
    jobType: ['', [Validators.required]],
    outfit: ['', [Validators.required]],
    hourlyWage: ['', [Validators.required]],
    languages: ['', [Validators.required]],
    hairColor: ['', []],
    healthCertificateMandatory: ['', []],
    imagesMandatory: ['', []],
    businessLicenseMandatory: ['', []],
    requiredStaff: [1, Validators.required]
  });

  formValueChanges$: Observable<NewJobForm>;

  startMoment: moment.Moment;
  endMoment: moment.Moment;

  constructor(
    private formBuilder: FormBuilder,
    private _store: NewJobFormFacade,
    private notificationService: NotificationService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.formValueChanges$ = this.form.valueChanges.pipe(debounceTime(500));
    this._store.form$.subscribe(newJobForm => (!!newJobForm ? this.form.patchValue(newJobForm) : {}));
  }

  update(newJobForm: NewJobForm) {
    this._store.updateNewJobForm(newJobForm);
  }

  submit() {
    if (this.form.valid) {
      this.update(this.form.value);
      this.notificationService.info(this.translate.instant('Form submitted successfully'));
    }
  }

  setStartMoment(startTime: string) {
    const hoursMinutes = startTime.split(':');
    this.startMoment = moment(this.form.value.startDate).add(hoursMinutes[0], 'hours').add(hoursMinutes[1], 'minutes');
  }

  setEndMoment(endTime: string) {
    const hoursMinutes = endTime.split(':');
    this.endMoment = moment(this.form.value.endDate).add(hoursMinutes[0], 'hours').add(hoursMinutes[1], 'minutes');
    if (!!this.endMoment && !!this.startMoment) {

      const startMomentClone = this.startMoment.clone();
      while (startMomentClone.startOf('day') <= this.endMoment.clone().startOf('day')) {
        this.workingHours.push({ start: '00:00', end: '24:00' });
        startMomentClone.add(1, 'day');
      }
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
    this._store.resetNewJobForm();
  }
}
