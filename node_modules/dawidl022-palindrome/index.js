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
