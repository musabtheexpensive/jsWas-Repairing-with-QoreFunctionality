// function higherOrderHello(greater) {
//   return () => {
//     greater();
//   };
// }

// function sayHello() {
//   console.log("hello");
// }

// const result = higherOrderHello(sayHello);
// result();

// higher order function real implement example

function sumWithHof(arr) {
  function reducer(result, current) {
    return result + current;
  }

  function reducerArray(arr, initialSum, reducer) {
    let result = initialSum;
    for (let i = 0; i < arr.length; i++) {
      result = reducer(result,arr[i]);
    }
    return result;
  }
  return reducerArray(arr, 0, reducer);
}
console.log(sumWithHof([32, 32, 43, 3, 4543, 34]));
