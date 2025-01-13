class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class singlelinklist{
    constructor(){
        this.head = null;
    }
    appendData(val) {
        let temp = new Node(val);
         if(this.head == null){
            this.head = temp;
         }
         else {
            let current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = temp;
         }
    }
    ispalindrome(){
        let res = [];
        let current = this.head;
        while ( current != null){
            res.push(current.data)
            current =current.next
        }
    
        let start = 0;
        let end =res.length -1;
        while(start<end){
            if(res[start]!== res[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    
    display() {
        let result= [];
        if(this.head == null){
            console.log('list is empty');
        }
        else{
             let current = this.head;
             while(current != null){
                result.push(current.data)
                current = current.next
             }
        console.log(result.join('->'));
        }
        }
}



let obj = new singlelinklist();

obj.appendData(1);
obj.appendData(2);
obj.appendData(5);
console.log("is palindrome:", obj. ispalindrome());
obj.display();
