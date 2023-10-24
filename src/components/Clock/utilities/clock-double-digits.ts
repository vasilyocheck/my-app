export const makeDoubleDigitClock = (num: number) => {
    return num < 10 ? '0' + num : num;
}