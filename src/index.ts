import { RomanNumeralConverter } from "./class/RomanNumeralConverter";

const conversor = new RomanNumeralConverter();

// console.log(conversor.arabicToRoman(1164));
// console.log(conversor.arabicToRoman(200));
console.log(conversor.romanToArabic("MMMVI"));
console.log(conversor.romanToArabic("MMCMXCIX"));
console.log(conversor.romanToArabic("DCCX"));
console.log(conversor.romanToArabic("IL"));
console.log(conversor.romanToArabic("XIL"));
console.log(conversor.romanToArabic("CIC"));
console.log(conversor.romanToArabic("XMMMMX"));
console.log(conversor.romanToArabic("IIII"));
console.log(conversor.romanToArabic("b"));