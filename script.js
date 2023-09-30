function firstNonRepeatedChar(str) {
 for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (str.indexOf(char) === i && str.lastIndexOf(char) === i) {
      return char;
    }
  }
  
  // If there are no non-repeating characters, return null or a suitable message
  return null;
}
console.input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input));