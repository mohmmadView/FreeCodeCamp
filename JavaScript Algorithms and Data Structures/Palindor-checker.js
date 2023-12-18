function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the string and compare with the original
    var reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the reversed string matches the original
    return cleanStr === reversedStr;
  }
  
  // Test cases
  console.log(palindrome("eye")); // true
  console.log(palindrome("_eye")); // true
  console.log(palindrome("race car")); // true
  console.log(palindrome("not a palindrome")); // false
  console.log(palindrome("A man, a plan, a canal. Panama")); // true
  console.log(palindrome("never odd or even")); // true
  console.log(palindrome("nope")); // false
  console.log(palindrome("almostomla")); // false
  console.log(palindrome("My age is 0, 0 si ega ym.")); // true
  console.log(palindrome("1 eye for of 1 eye.")); // false
  console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
  console.log(palindrome("five|\_/|four")); // false