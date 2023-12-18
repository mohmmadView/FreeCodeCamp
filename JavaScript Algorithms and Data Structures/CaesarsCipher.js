function rot13(str) {
    var decodedStr = "";
  
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Check if it's an uppercase letter
        // Apply ROT13 cipher by shifting the char code by 13 positions
        charCode = ((charCode - 65 + 13) % 26) + 65;
      }
  
      decodedStr += String.fromCharCode(charCode); // Append the decoded character to the result
    }
  
    return decodedStr;
  }
  
  console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
  console.log(rot13("SERR CVMMN!")); // Output: "FREE PIZZA!"
  console.log(rot13("SERR YBIR?")); // Output: "FREE LOVE?"
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."