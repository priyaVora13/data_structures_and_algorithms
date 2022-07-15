const util = require('util');

class Node { 
    constructor(value) { 
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList { 
    constructor(value) { 
        this.head = { 
            value: value,
            next: null,
            previous:  null
        }
        this.tail = this.head;
        this.length = 1;
    }

    prepend(value) { 
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    append(value) { 
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

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
        newNode.next.previous = newNode;
        leader.next = newNode;
        newNode.previous = leader;
        this.length++;
        return this;
        
    }

    delete(index) { 
        if(index <= this.length) { 
        const deleteNode = this.traverseToIndex(index);
        const leaderNode = this.traverseToIndex(index-1);
        const nextConnectingNode = deleteNode.next;
        leaderNode.next = nextConnectingNode;
        nextConnectingNode.previous = leaderNode;
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
}

const myDoublyLinkedList = new DoublyLinkedList(2);
myDoublyLinkedList.prepend(33);
myDoublyLinkedList.insert(1, 4);
console.log(util.inspect(myDoublyLinkedList));
console.log(myDoublyLinkedList.printList());

