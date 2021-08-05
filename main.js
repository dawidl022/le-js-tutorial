let Phrase = require("dawidl022-palindrome");

function palindromeTester(e) {
  let string = e.target.phrase.value;

  if (string === null) {
    return;
  } 
  let phrase = new Phrase(string);
  const palindromeResult = document.querySelector("#palindrome-result");
  
  const echoedString = palindromeResult.querySelector(".phrase-holder")
  echoedString.textContent = phrase.content;
  echoedString.classList.add("phrase")
  const resultText = palindromeResult.querySelector(".result");
  
  if (phrase.palindrome()) {
    resultText.textContent = "is a palindrome!"
  } else {
    resultText.textContent =  "is not a palindrome.";
  }
}

const btn = document.querySelector("#palindrome-tester");
btn.addEventListener("submit", function(e) {
  e.preventDefault();
  palindromeTester(e);
});

