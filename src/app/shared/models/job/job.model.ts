import * as moment from 'moment';
import { Location } from '../location/location.model';
import AgeRange from '../staff/age-range/age-range.model';
import { Gender } from '../staff/gender/gender.enum';
import Staff from '../staff/staff.model';
import { WorkingHours } from './working-hours/working-hours.model';

export default class Job {
  id: string;
  title: string;
  description: string;
  confirmed: Staff[];
  toBeConfirmed: Staff[];
  needed: number;
  genderWanted: Gender;
  ageRanges: AgeRange[];
  location: Location;
  from: moment.Moment;
  to: moment.Moment;
  workingHours: WorkingHours[];
  hourlyWage: number;
}
