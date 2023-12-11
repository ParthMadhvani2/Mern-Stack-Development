// The map function is a built-in method in JavaScript that allows you to apply a function to every element of an array and returns a new array with the results.
// The mар function is one of the most useful and commonly used functions in JavaScript because it provides an easy way to transform and
// manipulate data in an array.

// The syntax of the map function is as follows:

array.map(callback(element, index, array), thisArg)

// Here, array is the array that you want to map, callback is the function that will be called on each element of the array, element is the current element being processed,
// index is the index of the current element, and array is the original array that is being mapped. thisArg is an optional parameter
// that refers to the this value that will be used when executing the callback function.
// The callback function takes three arguments: element, index, and array. The element argument is the current element being processed, the index argument
// is the index of the current element, and the array argument is the original array that is being mapped. The callback function returns a new value that
// will be added to the new array that is being created.

// Here is an example of using the map function:

const numbers = [1, 2, 3, 4, 51];
const doubledNumbers = numbers.map(number => number * 2);
console. log (doubledNumbers); // [2, 4, 6, 8, 10]

// In this example, we have an array of numbers [1, 2, 3, 4, 51. We use the map function to apply the number * 2 function to every element of the array.
// The map function creates a new array called doubledNumbers with the results of the number * 2 function applied to every element of the original array.
// The map function is often used in combination with other JavaScript methods, such as filter, reduce, and forEach, to manipulate and transform data in an array.