// /*
//
//
// 1. String -> ""
// 2. Number -> 2
// 3. Array -> []
// 4. Float -> 1.2 1.2e10
// 5. Object -> {}
// 6. undefined -> not defined
// 7. null -> no value
// 8. NaN
// 9. Boolean
//
//
// */
//
// function beef(steak) {
//   console.log("beef", steak);
// }
//
// const sum = function(a, b) {
//   return a + b;
// };
//
// // const multiplier = function(a, b) {
// //   return a * b;
// // };
//
// function compute(a, b, operator) {
//   return operator(a, b);
// }
//
// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
//   return array;
// }
//

//
// map([1, 2, 3], function(element) {
//   return element * 12;
// });
//
// function reduce(array, val, callback) {
//   let accumulator = val;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + 1;
//     accumulator = callback(accumulator, array[i]);
//   }
//   return accumulator;
// }
//
// let val = reduce([1, 2, 3], 0, function(sum, element) {
//   console.log(sum, element);
//   return sum + element;
// });
//
function multiplier(num) {
  return function(val) {
    return val * num;
  };
}

const beefjs = (function() {
  return {
    map: function(array, callback) {
      let returnArray = [];
      for (let i = 0; i < array.length; i++) {
        returnArray.push(callback(array[i]));
      }
      return returnArray;
    }
  };
})();
