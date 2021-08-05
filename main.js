let Phrase = require("dawidl022-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");

  if (string === null) {
    return;
  } 
  let phrase = new Phrase(string);
  const palindromeResult = document.querySelector("#palindrome-result");
  
  
  if (phrase.palindrome()) {
    palindromeResult.textContent = `"${phrase.content}" is a palindrome!`
  } else {
    palindromeResult.textContent =  `"${phrase.content}" is not a palindrome.`;
  }
}

const btn = document.querySelector("#palindrome-tester");
btn.addEventListener("click", palindromeTester);

