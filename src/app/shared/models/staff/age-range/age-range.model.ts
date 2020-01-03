export default class AgeRange {
  static fromString(ageRangeString: string): AgeRange {
    // TODO: Check for format of string with regex
    if (!!!ageRangeString) {
      return null;
    }
    const ageRangeArray = ageRangeString.split('-');
    return new AgeRange(parseInt(ageRangeArray[0], 10), parseInt(ageRangeArray[1], 10), ageRangeString);
  }

  constructor(public lower: number, public upper: number, public display: string) {}
}
