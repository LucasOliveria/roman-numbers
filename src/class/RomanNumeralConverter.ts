import { TRomanNumeralMapping } from "../types/TRomanNumeralMapping";

export class RomanNumeralConverter {
  // Atributo com mapeamento dos algarismos romanos
  private romanNumeralMappings: TRomanNumeralMapping[];


  constructor() {
    this.romanNumeralMappings = [
      { romanNumeral: 'M', value: 1000 },
      { romanNumeral: 'CM', value: 900 },
      { romanNumeral: 'D', value: 500 },
      { romanNumeral: 'CD', value: 400 },
      { romanNumeral: 'C', value: 100 },
      { romanNumeral: 'XC', value: 90 },
      { romanNumeral: 'L', value: 50 },
      { romanNumeral: 'XL', value: 40 },
      { romanNumeral: 'X', value: 10 },
      { romanNumeral: 'IX', value: 9 },
      { romanNumeral: 'V', value: 5 },
      { romanNumeral: 'IV', value: 4 },
      { romanNumeral: 'I', value: 1 }
    ];
  }

  arabicToRoman(value: number): string {
    let romanNumeral: string = "";

    for (let i = 0; i < this.romanNumeralMappings.length; i++) {
      while (value >= this.romanNumeralMappings[i].value) {
        romanNumeral += this.romanNumeralMappings[i].romanNumeral;

        value -= this.romanNumeralMappings[i].value;
      }
    }

    return romanNumeral;
  }

  romanToArabic(romanNumeral: string): number {
    let arabicNumeral: number = 0
    return arabicNumeral;
  }

}