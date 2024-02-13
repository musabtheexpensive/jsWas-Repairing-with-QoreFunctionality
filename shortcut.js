// falsy value = "",0,undefined,null,false
// truthy value = "",1,true,[],{}

// ternary operator
const money = 50;
const tour = money < 50 ? "ghurte jabo na" : "ghurte jabo";
console.log(tour);

// string theke number korar shortcut techniq
const num1 = "40";
const numInt = +num1;
console.log(typeof numInt);

// number theke string korar shortcut techniq
const num = 30;
const numSt = num + "";
console.log(typeof numSt);

// extra shortcut
const userName = "rahim";
const newName = userName || "name nai";
console.log(newName);
