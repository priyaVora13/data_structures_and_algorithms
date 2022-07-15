const util = require('util');

class Node { 
    constructor(value) { 
        this.value = value;
        this.next = null;
    }
}

class LinkedList { 
    constructor(value) { 
        this.head = { 
            value: value, 
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }

    //o(1)
    prepend(value) { 
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //o(1)
    append(value) { 

        const newNode = new Node(value);
        //insert newnode after the current tail by changing the existing null next node to the new one.
        this.tail.next = newNode;
        //change the tail pointer to the new tail node
        this.tail = newNode;
        this.length++;
        return this;
    }

//o(n)
// 0      1      2      3
// 10 --> 1 --> 5 --> 16 
//Change pointer of next for of previous node of the index 
//Assign pointer of the next of the newNode to the previous Node's next before
// const newNode = new Node(value);
        // let counter = 0;
        // let currentNode = this.head;
        // while(counter !== index) { 
            
        // }
    insert(index, value) { 
        if(index >= this.length) { 
            return this.append(value);
        } 
        if(index < 0) { 
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
        return this;
        
    }
    
    //10 --> 5 --> 16
    //o(n)
    delete(index) { 
        if(index <= this.length) { 
        const deleteNode = this.traverseToIndex(index);
        const leaderNode = this.traverseToIndex(index-1);
        const nextConnectingNode = deleteNode.next;
        leaderNode.next = nextConnectingNode;
         this.length--;   

        }
        return this;
    }

    traverseToIndex(index) { 
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) { 
                currentNode = currentNode.next;
                counter++; 
            
        }
        return currentNode;
    }

    printList() { 
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) { 
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    reverse() { 
        if(!this.head.next) { 
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second) { 
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this;
    }
}



const myLinkedList = new LinkedList(10);
// console.log("LinkedList : " + util.inspect(myLinkedList));
// myLinkedList.append(16);
// myLinkedList.delete(2);
// myLinkedList.insert(1, 15);
// myLinkedList.insert(2, 13);
// myLinkedList.insert(2000, 33);
// myLinkedList.insert(-2000, 53);
// console.log(myLinkedList.printList());
// console.log("Length of linkedlist " + myLinkedList.length);
// if(!myLinkedList.head.next) { 
//     console.log("This Head Next " + myLinkedList.head.next);
// }
// console.log(!myLinkedList.head.next);
console.log(myLinkedList.append(15));
console.log(myLinkedList.append(20));
console.log(myLinkedList.reverse());



