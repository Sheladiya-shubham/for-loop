// 1.write a function for factorial number for given number using recursion function.
// 2.write a function convert feet into meter.
// 3.write a function find sum of natural numbers up to n (with argument with return type)
// 4. write a function find maximum number of three number.(with argument)
// 5.write a function find average of numbers up to n. 


// 1.write a function for factorial number for given number using recursion function.
function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    else{
        return num * factorial(num - 1);
    }
  } 
  console.log(factorial(5)); 
//   expected output:- 120

// 2.write a function convert feet into meter.
function feetToMeters(feet) {
    let meterPerFoot = 0.3048;  
    return feet * meterPerFoot;
  }
  
  console.log(feetToMeters(10));  
//   expected Output:- 3.048 meters

// 3.write a function find sum of natural numbers up to n (with argument with return type)
function sum(n) {
    if (n <= 0) {
      return 0; 
    } else {
      return n + sum(n - 1); 
    }
  }
  
  let n = 70;
  console.log("Sum of natural numbers up to " + n + " is: " + sum(n));
// expected output:- 2485

//   4. write a function find maximum number of three number.(with argument)
function maximum(num1, num2, num3) {
	if (num1 >= num2 && num1 >= num3) {
		return num1;
	} else if (num2 >= num1 && num2 >= num3) {
		return num2;
	} else {
		return num3;
	}
}
let largest = maximum(100, 5, 8);
console.log("Maximum number:", largest);
//Expected output:- 100
  


  // 5.write a function find average of numbers up to n. 

//   function Average(n) {
//     if (n <= 0) {
//       return 0; 
//     } else {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum += i;
//       }
//       return sum / n; 
//     }
//   }
  
// //   Example usage
//   let n = 10;
//   console.log("The average of numbers up to " + n + " is: " + Average(n));

//   expected output:- 5.5
  
  
  