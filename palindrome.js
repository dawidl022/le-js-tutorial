// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise

function isPalindrome(string) {
  processedString = string.toLowerCase();
  return processedString === reverse(processedString);
}

function emailParts(emailAddress) {
  return emailAddress.toLowerCase().split("@");
}
