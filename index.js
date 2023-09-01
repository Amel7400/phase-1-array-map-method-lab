const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((sentence) => { 
    return sentence
      .split(" ") //to split the sentences into separate words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) //there is charAt that search for the first character and uppercase it and add it to the rest of the word with slice
      .join(" "); //this is to join the words and reform the sentences
  });
}
console.log(titleCased)


