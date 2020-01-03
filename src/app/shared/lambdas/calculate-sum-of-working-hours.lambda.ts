import { WorkingHours } from '../models/job/working-hours/working-hours.model';
import { convertTimestringToDecimal } from './hoursAndMinutes/convert-timestring-to-decimal.lambda';

export const calculateSumOfWorkingHours = (workingHours: WorkingHours[]) =>
    Math.round(workingHours.reduce(
        (accumulator, singleDayWorkingHours) => {
            return accumulator +
                convertTimestringToDecimal(singleDayWorkingHours.end) -
                convertTimestringToDecimal(singleDayWorkingHours.start)
        }
        , 0))

