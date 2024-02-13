// array destructuring
const numbers = [50, 60];
const [y, x] = numbers;
const [y, x] = [50, 60];

const numbers1 = [23, 43, 53, 45, 34, 2, 32];
const [z, , , , n] = numbers1;
console.log(n);

// object destructuring
const person = {
  age: 21,
  roll: 2,
  details: {
    height: 5.3,
    drink: "jira pani",
  },
};
const { roll, age, details } = person;
console.log(details, age, roll);

const { height, drink } = details;
console.log(drink, height);
