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

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ") // Split into words
      .map(word => {
        // Capitalize the first letter and keep the rest as is
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // Join words back into a sentence
  });
};

console.log(titleCased());
