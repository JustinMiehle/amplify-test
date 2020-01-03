export const convertTimestringToDecimal = (timeString) => {
    const timeStringArray = timeString.split(':');
    return parseInt(timeStringArray[0], 10) + (timeStringArray[1] / 60);
}