/* eslint-disable */

//write your code here
const pronuns = [
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "them",
  "mine",
  "ours",
  "this",
  "that",
  "these"
];

const adjs = [
  "empty",
  "free",
  "full",
  "soft",
  "weak",
  "wet",
  "whole",
  "bad",
  "deep",
  "far",
  "good",
  "high",
  "long",
  "low",
  "near"
];

let nouns = [
  "Sock",
  "Heat",
  "Bed",
  "Way",
  "Cent",
  "Sky",
  "City",
  "Color",
  "Food",
  "Copy",
  "low",
  "near",
  "short",
  "small",
  "thick"
];
const tlds = ["com", "cl", "dk", "nl", "net", "es", "br", "us", "uk"];

function domainGenerator() {
  let domains = [];
  for (let i = 0; i < pronuns.length; i++) {
    const pronoun = pronuns[i];
    for (let j = 0; j < adjs.length; j++) {
      const adj = adjs[j];
      for (let k = 0; k < nouns.length; k++) {
        const noun = nouns[k];
        for (let l = 0; l < tlds.length; l++) {
          const tld = tlds[l];
          const domain = pronoun + adj + noun + "." + tld;
          domains.push(domain);
        }
      }
    }
  }
  return domains;
}

console.log(domainGenerator());
