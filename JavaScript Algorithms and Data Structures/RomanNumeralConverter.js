function convertToRoman(num) {
    // Create arrays for Roman numerals and their corresponding values
    const romanSymbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    const arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    let romanNumeral = "";
  
    // Iterate through the arabicValues array
    for (let i = 0; i < arabicValues.length; i++) {
      // Repeat subtracting the arabic value from num while it's greater than or equal to the current value
      while (num >= arabicValues[i]) {
        romanNumeral += romanSymbols[i];
        num -= arabicValues[i];
      }
    }
  
    return romanNumeral;
  }
  
  
  console.log(convertToRoman(2));   // Output: II
  console.log(convertToRoman(3));   // Output: III
  console.log(convertToRoman(4));   // Output: IV
  console.log(convertToRoman(5)); // Output: V