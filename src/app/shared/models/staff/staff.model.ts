import { Gender } from './gender/gender.enum';

export default interface Staff {
  id: string;
  name: string;
  age: number;
  specialty: string;
  location: string;
  hairColor: string;
  gender: Gender;
}
