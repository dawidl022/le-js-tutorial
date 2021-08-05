let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrom = new Phrase("racecar");
      assert(plainPalindrom.palindrome());
    });
    
    it("should return true for a mixed case palindrome", function() {
      let mixedCasePalindrome = new Phrase ("ReconoCer");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {

      let punctuatedPalindrome = new Phrase("A man, a plan, a canal—Panama!");
      assert(punctuatedPalindrome.palindrome());

      let anotherPunctuatedPalindrome = new Phrase("Madam, I’m Adam.");
      assert(anotherPunctuatedPalindrome.palindrome())
    });

    it("should return false for an empty string", function() {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    })

  });

  describe("#letters", function() {

    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");

      let anotherPunctuatedPalindrome = new Phrase("A man, a plan, a canal—Panama!");
      assert.strictEqual(anotherPunctuatedPalindrome.letters(),
                         "AmanaplanacanalPanama");
    });

    it("should return an empty string if there are no letters", function() {
      let noLetters = new Phrase("!@ 0");
      assert.strictEqual(noLetters.letters(), "");
    })

  });
});
