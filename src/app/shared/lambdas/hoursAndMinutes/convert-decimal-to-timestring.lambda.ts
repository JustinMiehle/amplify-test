export const convertDecimalToTimestring = (timeAsDecimal: number) => {
    const n = new Date(0, 0);
    n.setMinutes(timeAsDecimal * 60);
    return n.toTimeString().slice(0, 5);
}