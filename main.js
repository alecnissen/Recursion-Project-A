// Fibonacci (warmup)

// which sums each number with the one before it 

// 

// warmup problem
// function Fibonacci(n) { 
//     if (n < 2) { 
//         // base case would be? 
//         return n;
//     } 
//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// } 

// console.log(Fibonacci(0)); // 0 
// console.log(Fibonacci(1)); // 1 
// console.log(Fibonacci(6)); // 8 
 
// Using iteration, write a function fibs which takes a number and 

// returns an array containing that many numbers from the fibonacci sequence. 

// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// function fibs(n) { 
//   let num = n;
//   let arr = [];

//   for (let i = 0; i < num.length; i++) { 
//     let number = num[i];
//     arr.push(number);
// }
// console.log(arr);

// } 

// fibs(2);

// how am I supposed to access the fibonacci sequence using iteration?

// how am I supposed to loop through the numbers?

// How am I supposed to reference the sequence, am I calling the fibonacci function? 

// 



// 
// we need a loop, 
// takes a number, 
// init an array. 


// function Fibonacci(n) { 
//     if (n < 2) { 
//         // base case would be? 
//         return n;
//     } 
//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// } 



// function fibs(n) { 
   // let arr = []; 
   
   // loop 

   // return the array
// } 


// // Using iteration, write a function fibs which takes a number and 

// returns an array containing that many numbers from the fibonacci sequence. 

// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13]. 

// A loop is needed, but what are we looping through? 

// it's input is number, 

// references the fib sequence somehow, am I supposed access another function? 

// returns an array so init an array 

// how am I supposed to access the sequence? 

// inside the function or another function? 


// You're okay, you're learning right now. Yes, we should be return that many numbers from the fib sequence. 

// This is also mb, I miss up with the count above, we should be return array on n length, so if n == 0, we should return [], if n==1 we should return [0] and so forth


// assignment #1 step 1: iterative 


// function fibs(n) { 

//    let arr = [0, 1];

//    if (n == 0) { 
//       return [];
//    }

//    if (n === 1) { 
//       return [0];
//    } 

//    for (let i = 2; i < n; i++) { 
//       arr.push(arr[i - 1] + arr[i - 2]);
//    }
//    return arr;
// }   

// console.log(fibs(8));



// assignment #1 step 2: recursively 

// what would keep the function to keep recursing? 

// I need to figure out the recursive step, what would keep the function to keep recursing? 

// I would think calling fibsRec and keep subtracting from the values till they reach the base case?

// I am still confused on the recursive step, 

// yes, return a spread
// So [...????, ????]


// function fibsRec(n, arr = []) {

//    // let arr = [0, 1];

//    if (n === 0) {
//       return [];
//    }

//    if (n === 1) { 
//       return [0];
//    } 

//    // return (n - 2) + (n - 1);
//    return fibsRec(n - 2) + (n - 1);
// }   

// console.log(fibsRec(8));



// function fibsRec(num, arr=[0,1]) {
//   if(num<=arr.length)
//     return arr.slice(0, num);
  
//   return fibsRec(
//     num, [...arr, arr.at(-1)+arr.at(-2)])
  
// } 

// console.log(fibsRec(8));




// merge sort






// merge sort 

// first divide the array into halfs left and right 

// split the left half of the array, into two parts 

// split the left array of much as possible until left with two numbers 

// array of length 1 is ready to merge, 

// merge them back into sorted order, select the minimum value 

// same process for the right side 

// merge the smaller parts into the larger array, 

// go left to right, append smallest number. 

// repeat process for right side, 


// when the values are ready to be merged back into the original array, 

// start on the left side with the first number and compare that number to the 

// first number on the right hand side 

// compare the first number with the numbers on the right side, 

// if smaller than the first number on the left side, then add all the numbers on the right side, 

// summary 

// the basic overall concept of merge sort is to take in an array of certain length 

// split the array as evenly as possible, 

// split into left and right halves, 

// split the left & right halves as evenly as possible, 

// keep splitting till you get to one value 

// once split to one value or length

// if the array is length of 1, it cannot be split, merge them 

// select the smaller value and merge them back into the array 

// same exact process for left and right sides, 

// once ready to merge back into the main array 

// start at first value 

// Select the smallest value from the front of each list 

// (excluding values already in the sorted array) 

// select the smaller value, 

// when one list becomes empty, copy the rest of the values over in correct order, 

// smallest to largest. 


// I will attempt to write a little more of a gameplan I will probably need to ask for help, but let me get the ball rolling on this, 

// declare a function 

// function will take in a number, depending on number will be the size of the array 

// I would say some sort of way to split the array evenly into two halves 

// and then split further and further into the array until you get a single value

// somehow use push the smallest values back into the array 

// use some type of method to split the array evently, math.round or / 2

// start with the base array, keep it simple, init an array, loop thru them, 

// push them into the array and console.log them, 

// start with an array, and push values/ add values the array,

// function mergeSort(arr) { 
//    let array = arr;
 
//    for (let i = 0; i < arr.length; i++) { 
//      let num = arr[i];
 
//      array.push(num); 
//    }
//    console.log(array);
//  } 
 
//  mergeSort([3, 4, 5, 6, 7, 8, 9]); 

// this will need to solved recurisvely, elimate the loop, 

// try to split the array into left and right halves 

// left half

// google how to split an array into left and right halves 

// ok I split the array into left and right halves, 

// so I need to start splitting the array as much as possible, 

// I'm confused on how I can further split the right and left halves further down 

// base case for merge sort, keep recursing until the arr is sorted? 

// how can I split the left side of the array further down 

// I have no fucking clue what to do, 

// I feel like I'm never gonna figure out how to solve this stupid problem 

// fuck merge sort, 

// how can I break the array further, left side, split it and get only the 

// first two numbers. 

// using HOW CAN I split the FUCKING ARRAY!!! 

// so just use the function again, make a variable, then 

function mergeSort(arr) { 
   let sortedArray = []; 

   if (arr.length <= 1) { 
      return;
   }

   let half = arr.length / 2;

   let leftSide = arr.slice(0, half);

   let rightSide = arr.slice(half);

   console.log(leftSide);

   console.log(rightSide); 

  let nextSplitLeft = mergeSort(leftSide); 

  console.log(nextSplitLeft);

  let nextSplitRight = mergeSort(rightSide); 

  console.log(nextSplitRight);

} 

// mergeSort([3, 5, 8, 7, 5, 4, 3, 2]);

mergeSort([3, 5, 8, 7, 5, 4]);










// var numbers= [1,2,3,4,5,6,7,8,9,10],
//     leftEnd= Math.ceil(numbers.length/2),
//     result= {
//         left: numbers.slice(0,leftEnd),
//         right: numbers.slice(leftEnd) 

//       };
      
      
      // console.log(result.left);
      // console.log(result.right);

