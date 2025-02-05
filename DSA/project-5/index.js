// Write a program for Circular Queue.
// write a program Queue using two stacks.
// write a program check first string swap can make strings equal. (leetcode question no 1790)


// 1.
class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.elements = new Array(capacity);
        this.head = -1;
        this.tail = -1;
    }


    isFull() {
        return (this.tail + 1) % this.capacity === this.head;
    }

    isEmpty() {
        return this.head === -1;
    }

    add(element) {
        if (this.isFull()) {
            console.log("Queue is full, cannot add.");
            return;
        }
        if (this.isEmpty()) {
            this.head = this.tail = 0;
        } else {
            this.tail = (this.tail + 1) % this.capacity;
        }
        this.elements[this.tail] = element;
    }

    remove() {
        if (this.isEmpty()) {
            console.log("Queue is empty, cannot remove.");
            return null;
        }
        let removedElement = this.elements[this.head];
        if (this.head === this.tail) {
            this.head = this.tail = -1; // Queue becomes empty
        } else {
            this.head = (this.head + 1) % this.capacity;
        }
        return removedElement;
    }

    peek() {
        return this.isEmpty() ? "Queue is empty" : this.elements[this.head];
    }

    size() {
        if (this.isEmpty()) return 0;
        return (this.tail >= this.head) ? 
            (this.tail - this.head + 1) : 
            (this.capacity - this.head + this.tail + 1);
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        let result = [];
        let i = this.head;
        while (true) {
            result.push(this.elements[i]);
            if (i === this.tail) break;
            i = (i + 1) % this.capacity;
        }
        console.log(result.join(" -> "));
    }
}

const queue = new CircularQueue(5);
queue.add(10);
queue.add(20);
queue.add(30);
queue.add(40);
queue.add(50);
queue.display();  // Output: 10 -> 20 -> 30 -> 40 -> 50

console.log("Removed:", queue.remove());  // Output: Removed: 10
queue.add(60);
queue.display();  // Output: 20 -> 30 -> 40 -> 50 -> 60

console.log("Peek Element:", queue.peek());  // Output: Peek Element: 20
console.log("Queue Size:", queue.size());  // Output: Queue Size: 5

// expected out-put:-
// 10 -> 20 -> 30 -> 40 -> 50
//  Removed: 10
//  20 -> 30 -> 40 -> 50 -> 60
//  Peek Element: 20
//  Queue Size: 5


// 2
// class StackBasedQueue {
//     constructor() {
//         this.inputStack = [];
//         this.outputStack = [];
//     }

//     add(element) {
//         this.inputStack.push(element);
//     }

//     remove() {
//         if (this.inputStack.length === 0 && this.outputStack.length === 0) {
//             console.log("Queue is empty! Cannot remove.");
//             return null;
//         }

//         if (this.outputStack.length === 0) {
//             while (this.inputStack.length > 0) {
//                 this.outputStack.push(this.inputStack.pop());
//             }
//         }

//         return this.outputStack.pop();
//     }

//     peek() {
//         if (this.inputStack.length === 0 && this.outputStack.length === 0) {
//             return "Queue is empty!";
//         }

//         if (this.outputStack.length === 0) {
//             while (this.inputStack.length > 0) {
//                 this.outputStack.push(this.inputStack.pop());
//             }
//         }

//         return this.outputStack[this.outputStack.length - 1];
//     }

//     isEmpty() {
//         return this.inputStack.length === 0 && this.outputStack.length === 0;
//     }

//     count() {
//         return this.inputStack.length + this.outputStack.length;
//     }

//     display() {
//         let output = [...this.outputStack.reverse(), ...this.inputStack];
//         console.log("Queue:", output.join(" -> "));
//     }
// }

// const queue = new StackBasedQueue();
// queue.add(10);
// queue.add(20);
// queue.add(30);
// queue.add(40);
// queue.add(50);
// queue.add(60);
// queue.add(70);
// queue.display();  // Queue: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70  

// console.log("Peek Element:", queue.peek());  // Peek Element: 10
// console.log("Removed:", queue.remove());  // Removed: 10
// console.log("New Peek Element:", queue.peek());  // New Peek Element: 20
// console.log("Queue Size:", queue.count());  // Queue Size: 6
// console.log("Is Queue Empty?", queue.isEmpty());  // Is Queue Empty? false

// queue.display();  // Queue: 20 -> 30 -> 40 -> 50 -> 60 -> 70


// expected out put:-
// Queue: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70
//  Peek Element: 10
//  Removed: 10
//  New Peek Element: 20
//  Queue Size: 6
//  Is Queue Empty? false


// 3.
function isSwappableToEqual(str1, str2) {
    if (str1 === str2) return true;

    let mismatches = []; 

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            mismatches.push(i);
            if (mismatches.length > 2) return false; 
        }
    }
    return (
        mismatches.length === 2 &&
        str1[mismatches[0]] === str2[mismatches[1]] &&
        str1[mismatches[1]] === str2[mismatches[0]]
    );
}

console.log(isSwappableToEqual("aa", "bb")); // false (different characters)
console.log(isSwappableToEqual("bank", "kanb")); // true (swap 'b' and 'k')
console.log(isSwappableToEqual("abcd", "abcd")); // true (already equal)
console.log(isSwappableToEqual("attack", "defend")); // false (too many mismatches)
console.log(isSwappableToEqual("abcd", "abdc")); // true (swap 'c' and 'd')

// expected output:-
// false
// true
// true
// false
// true

