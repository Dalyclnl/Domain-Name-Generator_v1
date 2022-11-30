/* eslint-disable */

window.onload = function() {
  //write your code here
  const pronuns = [
    "I",
    "you",
    "he",
    "she",
    "it",
    "we",
    "they",
    "me",
    "you",
    "him",
    "her",
    "it",
    "us",
    "them",
    "mine",
    "yours",
    "his",
    "hers",
    "its",
    "ours",
    "theirs",
    "this",
    "that",
    "these",
    "those"
  ];

  const adjs = [
    "bright",
    "cheap",
    "clean",
    "dark",
    "dirty",
    "dry",
    "easy",
    "empty",
    "expensive",
    "free",
    "full",
    "hard",
    "heavy",
    "hungry",
    "light",
    "soft",
    "strong",
    "thirsty",
    "weak",
    "wet",
    "whole",
    "bad",
    "deep",
    "far",
    "fat",
    "good",
    "high",
    "large",
    "long",
    "low",
    "narrow",
    "near",
    "shallow",
    "short",
    "skinny",
    "small",
    "thick"
  ];

  let nouns = [
    "Cotton",
    "Ring",
    "Year",
    "Sand",
    "Art",
    "Seat",
    "Bus",
    "Sugar",
    "Bank",
    "Ship",
    "Bicycle",
    "Horse",
    "Head",
    "Box",
    "Sock",
    "Street",
    "Heat",
    "Bed",
    "Way",
    "Face",
    "Folder",
    "Cent",
    "Sky",
    "Circle",
    "City",
    "Class",
    "Color",
    "Food",
    "Company",
    "Copy",
    "low",
    "narrow",
    "near",
    "shallow",
    "short",
    "skinny",
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
  function printDomains(domainsInput) {
    for (let i = 0; i < domainsInput.length; i++) {
      console.log(domainsInput[i]);
    }
  }
};

printDomains(domainGenerator());
