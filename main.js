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

// console.log(fibs(13));



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


// For the record, recursively:


function fibsRec(num, arr=[0,1]) {
  if(num<=arr.length)
    return arr.slice(0, num);
  
  return fibsRec(
    num, [...arr, arr.at(-1)+arr.at(-2)])
  
} 

console.log(fibsRec(8));