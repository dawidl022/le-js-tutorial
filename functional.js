"use strict";

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeUrls(elements) {
  let urls = []
  elements.forEach(element => {
    urls.push(urlify(element));
  });
  return urls;
}

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function toCompleteUrl(string){
  return `https://example.com/${urlify(string)}`;
}

function functionalUrls(elements) {
  return elements.map(urlify);
}

function getCompleteUrls(elements) {
  return elements.map(toCompleteUrl)
}

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(element => {
    if (elements.split(/\s+/).length === 1) {
      singles.push(element)
    }
  });
  return singles;
}

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

function daktotaStates(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}

function twoWordStates(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(x => {
    total += x;
  });
  return total;
}

function functionalSum(elements) {
  return elements.reduce((total, x) => total + x)
}

function functionalProduct(elements) {
  return elements.reduce((product, x) => product * x)
}

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(element => {
    lengths[element] = element.length;
  });
  return lengths;
}

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
