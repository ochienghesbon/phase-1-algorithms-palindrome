function isPalindrome(string) {
  // Write your algorithm here
  let reversed = string.split("").reverse().join("");
  if (reversed === string) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("madam");

/* 
  Add your pseudocode here
  convert,reverse and join array elements into a string
check if the string and the reversed string are equal
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  The split('') method converts the string into individual array characters
  The reverse() method reverses the position in an array
  The join('') method joins all the elements of an array into a string
  Then the if...else statement is used to check if the string and the reversed string are equal. If they are equal, the string is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
