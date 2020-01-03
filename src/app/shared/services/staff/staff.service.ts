import { getRandom } from '@app/shared/lambdas/get-random-element-in-array.lambda';
import { Gender } from '@models/staff/gender/gender.enum';
import Staff from '@models/staff/staff.model';

export class StaffService {
  static getRandomStaff(id: number): Staff {
    return this.getStaffObject(
      id.toString(),
      getRandom([
        'Kim',
        'Maria',
        'Andrea',
        'Alex',
        'Ivory',
        'Ashley',
        'Bree',
        'Brooklyn',
        'Kay',
        'Rudy',
        'Ryan',
        'Parker',
        'Paris'
      ]),
      getRandom(['Modelling', 'Promotion', 'Hosting']),
      getRandom(['Black', 'Blonde', 'Brunette']),
      getRandom([...Array(100).keys()]),
      getRandom(['Bern, Switzerland', 'Geneva, Switzerland', 'Zurich, Switzerland']),
      getRandom(Object.values(Gender))
    );
  }

  private static getStaffObject(
    id: string,
    name: string,
    specialty: string,
    hairColor: string,
    age: number,
    location: string,
    gender: Gender
  ): Staff {
    return {
      id,
      name,
      specialty,
      hairColor,
      age,
      location,
      gender
    } as Staff;
  }
  getStaff(): Staff[] {
    return [...Array(100).keys()].map(id => StaffService.getRandomStaff(id));
  }
}
