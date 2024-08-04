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

    if (value > 3999) {
      const thousands = Math.floor(value / 1000);
      romanNumeral += `|${this.arabicToRoman(thousands)}|`; //  vinculum
      value %= 1000;
    }

    for (let i = 0; i < this.romanNumeralMappings.length; i++) {
      while (value >= this.romanNumeralMappings[i].value) {
        romanNumeral += this.romanNumeralMappings[i].romanNumeral;

        value -= this.romanNumeralMappings[i].value;
      }
    }

    return romanNumeral;
  }

  romanToArabic(romanNumeral: string): string {
    let arabicNumeral: number = 0
    let romanNumeralUpperCase = romanNumeral.toUpperCase();
    let errorFound = false;
    let errorCount = 0;

    for (let i = 0; i < romanNumeralUpperCase.length; i++) {
      const currentNextRomanNumeral = romanNumeralUpperCase[i] + romanNumeralUpperCase[i + 1];
      errorFound = false

      if (romanNumeralUpperCase[i + 1]) {

        if (currentNextRomanNumeral !== "IX" && currentNextRomanNumeral !== "IV" && currentNextRomanNumeral !== "XL" && currentNextRomanNumeral !== "XC" && currentNextRomanNumeral !== "CD" && currentNextRomanNumeral !== "CM") {

          const currentValue = this.romanNumeralMappings.find(numeral => numeral.romanNumeral === romanNumeralUpperCase[i]);

          const nextValue = this.romanNumeralMappings.find(numeral => numeral.romanNumeral === romanNumeralUpperCase[i + 1]);

          if (!currentValue?.value || !nextValue?.value) {
            return "Informe um algarismo romano válido";
          } else if (currentValue?.value < nextValue?.value) {
            const subtraction = nextValue.value - currentValue.value;
            arabicNumeral += subtraction;
            errorFound = true;
            errorCount++
            i++
          }
        }
      }

      if (!errorFound) {
        for (let j = 0; j < this.romanNumeralMappings.length; j++) {

          if (currentNextRomanNumeral === this.romanNumeralMappings[j].romanNumeral) {
            arabicNumeral += this.romanNumeralMappings[j].value;
            i++;
            break;
          } else if (romanNumeralUpperCase[i] === this.romanNumeralMappings[j].romanNumeral) {
            arabicNumeral += this.romanNumeralMappings[j].value;

            break;
          }
        }
      }
    }

    return errorCount > 0 || arabicNumeral > 3999 ? `${this.arabicToRoman(arabicNumeral)} = ${arabicNumeral}` : `${romanNumeralUpperCase} = ${arabicNumeral}`
  }
}