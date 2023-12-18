function telephoneCheck(str) {
    // Regular expression pattern for valid US phone number formats
    var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return pattern.test(str);
  }
  
  // Example tests
  console.log(telephoneCheck("555-555-5555"));              // true
  console.log(telephoneCheck("1 555-555-5555"));            // true
  console.log(telephoneCheck("1 (555) 555-5555"));          // true
  console.log(telephoneCheck("5555555555"));                // true
  console.log(telephoneCheck("555-5555"));                  // false
  console.log(telephoneCheck("5555555"));                   // false
  console.log(telephoneCheck("1 555)555-5555"));            // false
  console.log(telephoneCheck("1 555 555 5555"));            // true
  console.log(telephoneCheck("1 456 789 4444"));            // true
  console.log(telephoneCheck("123**&!!asdf#"));             // false
  console.log(telephoneCheck("2 (757) 622-7382"));          // false