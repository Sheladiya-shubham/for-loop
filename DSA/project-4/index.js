// // 1.Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length)
// class Stack {
//     constructor() {
//         this.stackArray = []; 
//     }

//     push(element) {
//         this.stackArray.push(element);
//         console.log(`${element} pushed into stack`);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             console.log("Stack Underflow! No elements to pop.");
//             return null;
//         }
//         return this.stackArray.pop();
//     }

//     isEmpty() {
//         return this.stackArray.length === 0;
//     }

//     length() {
//         return this.stackArray.length;
//     }

//     printStack() {
//         console.log("Stack:", this.stackArray.join(" -> "));
//     }
// }

// const stack = new Stack();


// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.printStack();
// // Output: Stack: 10 -> 20 -> 30

// console.log("Popped Element:", stack.pop()); 
// // Output: Popped Element: 30
// stack.printStack();
// // Output: Stack: 10 -> 20

// console.log("Is Stack Empty?", stack.isEmpty()); 
// // Output: false
// console.log("Stack Length:", stack.length()); 
// // Output: 2


// 2.Write a program for Next Greater Element using Stack.


function nextGreaterElements(arr) {
    let elementStack = [];
    let result = new Array(arr.length).fill(-1); 

    for (let i = arr.length - 1; i >= 0; i--) {
        while (elementStack.length > 0 && elementStack[elementStack.length - 1] <= arr[i]) {
            elementStack.pop(); 
        }

        if (elementStack.length > 0) {
            result[i] = elementStack[elementStack.length - 1];
        }

        elementStack.push(arr[i]); 
    }

    return result;
}

const arr = [16, 8, 8, 7, 12, 29];
console.log(nextGreaterElements(arr));

// Expected Output: [5, 10, 10, -1, -1]



// 3.Write a program for a reverse string using Stack
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty!");
      }
      return this.items.pop();
    }

    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseStringUsingStack(inputString) {
    const stack = new Stack();
  
    for (let char of inputString) {
      stack.push(char);
    }
  
    let reversedString = "";
  
    while (!stack.isEmpty()) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Example usage
  const input = "hello world";
  const reversed = reverseStringUsingStack(input);
  console.log("Original String:", input);
  console.log("Reversed String:", reversed);

//   expected out-put:-
// Original String: hello world
// index.js:124 Reversed String: dlrow olleh

  
