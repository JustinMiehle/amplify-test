import { getRandom } from '@app/shared/lambdas/get-random-element-in-array.lambda';
import { convertDecimalToTimestring } from '@app/shared/lambdas/hoursAndMinutes/convert-decimal-to-timestring.lambda';
import Job from '@app/shared/models/job/job.model';
import { WorkingHours } from '@app/shared/models/job/working-hours/working-hours.model';
import { Location } from '@app/shared/models/location/location.model';
import AgeRange from '@app/shared/models/staff/age-range/age-range.model';
import { Gender } from '@app/shared/models/staff/gender/gender.enum';
import Staff from '@app/shared/models/staff/staff.model';
import { StaffService } from '@services/staff/staff.service';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { ageRanges } from './../../models/staff/age-range/age-ranges';

export class JobService {
  jobs = [...Array(100).keys()].map(id => JobService.getRandomJob(id.toString()));

  static getRandomJob(id: string): Job {
    const from = moment().add(Math.floor(Math.random() * 30), 'days')
      .set('hours', Math.floor(Math.random() * 24))
      .set('minutes', Math.floor(Math.random() * 4) * 15);
    const to = from.clone().add(Math.floor(Math.random() * 30), 'days')
      .set('hours', Math.floor(Math.random() * 24))
      .set('minutes', Math.floor(Math.random() * 4) * 15);

    return this.getJobObject(
      id.toString(),
      getRandom([
        'Best Job Ever',
        'Wok WM Cheerleader',
        'Hosting FC Bayern',
        'Promoting Tesla',
        'Distributing Laptop Stickers at ETH'
      ]),
      getRandom(['Trust me.', 'What you see is what you get', 'Underpaid Job with lots of hard Wok']),
      [...Array(Math.floor(Math.random() * 20)).keys()].map(counter => StaffService.getRandomStaff(counter)),
      [...Array(Math.floor(Math.random() * 20)).keys()].map(counter => StaffService.getRandomStaff(counter)),
      getRandom(Object.values(Gender)),
      [...Array(Math.floor(Math.random() * 5)).keys()].map(counter => ageRanges[counter]),
      { lat: 50, lng: 50, display: 'The Crib' },
      from,
      to,
      10 + Math.floor(Math.random() * 100),
      this.getRandomWorkingHours(from, to)
    );
  }

  private static getJobObject(
    id: string,
    title: string,
    description: string,
    confirmed: Staff[],
    toBeConfirmed: Staff[],
    genderWanted: Gender,
    ageRanges: AgeRange[],
    location: Location,
    from: moment.Moment,
    to: moment.Moment,
    hourlyWage: number,
    workingHours: Array<WorkingHours>,
    needed: number = confirmed.length + toBeConfirmed.length + Math.ceil(Math.random() * 10)
  ): Job {
    return {
      id,
      title,
      description,
      confirmed,
      toBeConfirmed,
      needed,
      location,
      genderWanted,
      ageRanges,
      from,
      to,
      workingHours,
      hourlyWage
    } as Job;
  }

  private static getRandomWorkingHours(from: moment.Moment, to: moment.Moment) {
    const workingHours = [];
    const fromClone = from.clone();
    while (fromClone.startOf('day') <= to.clone().startOf('day')) {
      workingHours.push(this.getSingleDayRandomWorkingHours());
      fromClone.add(1, 'day');
    }
    return workingHours;
  }

  private static getSingleDayRandomWorkingHours() {
    const startDecimal = Math.random() * 18;
    return {
      start: convertDecimalToTimestring(startDecimal),
      end: convertDecimalToTimestring(startDecimal + ((24 - startDecimal) * Math.random()))
    }
  }

  getJobs(): Job[] {
    return this.jobs;
  }

  getJob(jobId: string): Observable<Job> {
    return of(this.jobs.find(job => job.id === jobId));
  }
}
