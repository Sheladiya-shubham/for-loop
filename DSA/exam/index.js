// Q.1 WAP to check array is palindrome or not using JavaScript (only with Numbers)



// Q.2 WAP to Merge two array in single Array using JavaScript.



// Q.3 WAP to implements Quick Sort using JavaScript.



// Q.4 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function) 



// Q.5 WAP to implement insert and remove element from Queue using JavaScript




// 1.
function isPalindromeArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      if (arr[left] !== arr[right]) {
        return false; 
      }
      left++;
      right--;
    }
    return true; 
  }
  
  const testArray1 = [1, 2, 3, 2, 1];
  const testArray2 = [1, 2, 3, 4, 5];
  
  console.log(isPalindromeArray(testArray1)); 
  console.log(isPalindromeArray(testArray2));

//   expected out-put:- 
//                      testArray1= true;
//                      testArray2= false;





// 2.
function mergeArrays(arr1, arr2) {
    let mergedArray = [];
  
    for (let i = 0; i < arr1.length; i++) {
      mergedArray.push(arr1[i]);
    }
  
    for (let j = 0; j < arr2.length; j++) {
      mergedArray.push(arr2[j]);
    }

  
    return mergedArray;
  }
  
  const array1 = [11, 33, 55];
  const array2 = [22, 44, 66];
  
  const result = mergeArrays(array1, array2);
  console.log("Merged Array:", result);
  
//   expected out-put:- 

// merged array[11,33,55,22,44,66]





// 3.
function partition(arr, low, high) {
    let pivot = arr[high]; 
    let i = low - 1; 
  
    for (let j = low; j < high; j++) {
      
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
    return i + 1; 
  }
  
  function quickSort(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
  
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  
  let array = [68,54,134,34,44,5,4];
  console.log("Original Array:", array);
  
  quickSort(array, 0, array.length - 1);
  
  console.log("Sorted Array:", array);


//   expected out-put:-

// original array :[68,54,134,34,44,5,4]
// sorted array :[4,5,34,44,54,68,134]
  


// 4.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    addElement(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    deleteNode(value) {
      if (!this.head) {
        console.log("List is empty.");
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        console.log(`Node with value ${value} deleted.`);
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current && current.value !== value) {
        previous = current;
        current = current.next;
      }
  
      if (!current) {
        console.log(`Node with value ${value} not found.`);
        return;
      }
  
      previous.next = current.next;
      console.log(`Node with value ${value} deleted.`);
    }
  
    displayList() {
      if (!this.head) {
        console.log("List is empty.");
        return;
      }
  
      let current = this.head;
      let result = "";
      while (current) {
        result += current.value + " -> ";
        current = current.next;
      }
      console.log(result + "null");
    }
  }
  
  const list = new SinglyLinkedList();
  list.addElement(10);
  list.addElement(20);
  list.addElement(30);
  list.addElement(40);
  
  console.log("Initial Linked List:");
  list.displayList();
  
  list.deleteNode(20);
  console.log("After Deleting Node 20:");
  list.displayList();
  
  list.deleteNode(50); 

//   expected out-put:-
// Initial Linked List:
// 10 -> 20 -> 30 -> 40 -> null
//  Node with value 20 deleted.
// After Deleting Node 20:
//  10 -> 30 -> 40 -> null
// Node with value 50 not found.


//   5.


class Queue {
    constructor() {
      this.items = []; 
    }

    enqueue(element) {
      this.items.push(element);
      console.log(`${element} added to the queue`);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty. Cannot dequeue!");
        return null;
      }
      const removedElement = this.items.shift();
      console.log(`${removedElement} removed from the queue`);
      return removedElement;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0];
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        console.log("Queue elements:", this.items.join(" -> "));
      }
    }
  }
  
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.display();
  
  queue.dequeue();
  queue.display();
  
  queue.front();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();


//   expected out-put:-
// 10 added to the queue
// 20 added to the queue
//  30 added to the queue
//  Queue elements: 10 -> 20 -> 30
//   10 removed from the queue
//  Queue elements: 20 -> 30
//  20 removed from the queue
//  30 removed from the queue
//  Queue is empty. Cannot dequeue!
  
  