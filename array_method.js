// map
const arr = [423, 5343245, 235433, 22, 334235, 32];
const multiply = arr.map((p) => console.log(p * 2)); // ekhane array 3 tta parameter neyy

// for each // for each backend a beshi use hoy
const arr1 = [423, 5343245, 235433, 22, 334235, 32];
const single_number = arr.forEach((p) => {
  return p;
});
console.log(single_number);

// filter
// filter return kore array
// 1. object er upore id onujayei filter
const userData = [
  {
    id: 1,
    name: "age",
  },
  {
    id: 2,
    name: "age",
  },
  {
    id: 3,
    name: "age",
  },
];
const deletedId = 2;
const newData = userData.filter((p) => p.id != deletedId);
console.log(newData);

// 2. ekti array theke notun r ekta array korar jonno filter

const newArray = arr1.filter((curr) => 10);
console.log(newArray);
// r jodi filter na use kortam tahole ettogulon code likha lagttto
let newArray1 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr[i] > 10) {
    newArray1.push(arr1[i]);
  }
}

// find
// find return kore object. jehetu 1 tta datai shhe find kore dey
const id = 1;
const newData1 = userData.find((p) => p.id == id);
