(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("dawidl022-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");

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
btn.addEventListener("click", palindromeTester);


},{"dawidl022-palindrome":2}],2:[function(require,module,exports){
"use strict";
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  return !!this.match(/^\s*$/);
}

Array.prototype.last = function() {
  return this.slice(-1)[0];
}

// Defines a phrase object
function Phrase(content) {
  this.content = content;

  this.processContent = function() {
    return this.letters().toLowerCase();
  } 

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    let processedContent = this.processContent();
    return processedContent === processedContent.reverse();
  }

  this.louder = function () {
    return this.content.toUpperCase();
  }

  this.letters = function(string = this.content) {
    return (string.match(/[a-z]+/ig) ?? []).join("");
  }
}

},{}]},{},[1]);
