// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class singlelinklist{
//     constructor(){
//         this.head = null;
//     }
//     appendData(val) {
//         let temp = new Node(val);
//          if(this.head == null){
//             this.head = temp;
//          }
//          else {
//             let current = this.head;
//             while(current.next != null){
//                 current = current.next
//             }
//             current.next = temp;
//          }
//     }
   
//     display() {
//         let result= [];
//         if(this.head == null){
//             console.log('list is empty');
//         }
//         else{
//              let current = this.head;
//              while(current != null){
//                 result.push(current.data)
//                 current = current.next
//              }
//         console.log(result.join('->'));
//         }
//         }
//         reverseLinkList(){
//             let current = this.head;
//             let previous = null, next = null;
//             while(current != null){
//                 next = current.next;
//                 current.next = previous;
//                 previous = current;
//                 current = next;
//             }
//             this.head = previous;
//         }
// }



// let obj = new singlelinklist();

// obj.appendData(0);
// obj.appendData(1);
// obj.appendData(2);
// obj.display();
// obj.reverseLinkList();
// obj.display();

// expected out put:-

// 0->1->2
// 2->1->0

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     appendData(value) {
//         const newNode = new Node(value);
//         if (this.head === null) {
//             this.head = newNode;
//             return;
//         }
//         let currentNode = this.head;
//         while (currentNode.next !== null) {
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }

//     isPalindrome() {
//         let dataArray = [];
//         let currentNode = this.head;

//         while (currentNode !== null) {
//             dataArray.push(currentNode.data);
//             currentNode = currentNode.next;
//         }

//         let start = 0;
//         let end = dataArray.length - 1;
//         while (start < end) {
//             if (dataArray[start] !== dataArray[end]) {
//                 return false;
//             }
//             start++;
//             end--;
//         }
//         return true;
//     }

//     display() {
//         if (this.head === null) {
//             console.log("The linked list is empty.");
//             return;
//         }
//         let resultArray = [];
//         let currentNode = this.head;
//         while (currentNode !== null) {
//             resultArray.push(currentNode.data);
//             currentNode = currentNode.next;
//         }
//         console.log("Linked List:", resultArray.join(" -> "));
//     }
// }

// let linkedList = new SinglyLinkedList();

// linkedList.appendData(10);
// linkedList.appendData(20);
// linkedList.appendData(30);
// linkedList.appendData(20);
// linkedList.appendData(10);

// linkedList.display();

// console.log("Is Palindrome:", linkedList.isPalindrome());


// Linked List: 10 -> 20 -> 30 -> 20 -> 10
// index.js:140 Is Palindrome: true


// 3. Write a Program for Removing Link list Element at any Position.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkList {
    constructor() {
        this.head = null;
    }

    appendData(val) {
        let temp = new Node(val);
        if (this.head == null) {
            this.head = temp;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = temp;
        }
    }
    removeNode(position) {
        if (this.head == null) {
            console.log("List is already empty...");
            return;
        }

        if (position <= 0) {
            console.log("Invalid position. Use a positive integer.");
            return;
        }

        let current = this.head;
        let prev = null;
        let count = 1;

        if (position === 1) {
            console.log(`Removing node: ${current.data}`);
            this.head = this.head.next;
            this.display();  // Display updated list after removal
            return;
        }

        while (current != null && count < position) {
            prev = current;
            current = current.next;
            count++;
        }

        if (current == null) {
            console.log("Position is out of bounds.");
        } else {
            console.log(`Removing node: ${current.data}`);
            prev.next = current.next;
            this.display(); 
        }
    }

    display() {
        let result = [];
        if (this.head == null) {
            console.log("List is Empty");
        } else {
            let current = this.head;
            while (current != null) {
                result.push(current.data);
                current = current.next;
            }
            console.log("Updated List: " + result.join(" -> "));
        }
    }
}

let obj = new SingleLinkList();

obj.appendData(10);
obj.appendData(20);
obj.appendData(30);
obj.appendData(40);
obj.appendData(50);
obj.appendData(60);
obj.appendData(70);
obj.appendData(80);

console.log("Original List:");
obj.display();

console.log("Removing nodes from the list:");
obj.removeNode(8); 

obj.removeNode(3);  

obj.removeNode(1); 
// expected output:-

// // Original List: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> 80
//  Removing nodes from the list:
// Removing node: 80
//  Updated List: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70
// Removing node: 30
//Updated List: 10 -> 20 -> 40 -> 50 -> 60 -> 70
//Removing node: 10
//Updated List: 20 -> 40 -> 50 -> 60 -> 70