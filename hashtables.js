const util = require('util');

class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
        console.log(" Set Key " + key);
        console.log(" Set Value " + value);
        console.log(" ");

      let address = this._hash(key);
      console.log("Hash address + " + address);
      console.log(" ");
      
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }

    keys() { 
        let keyset = [];
        //run loop for every memory space
        for(let i =0; i < this.data.length; i++) {
            if(this.data[i]) { 
                //current key
                keyset.push(this.data[i][0][0]);
            } 
        }
        console.log(keyset);
        return keyset;
    }

    keysWithCollisions() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              const l = this.data.length;
              const currentBucket = this.data[i];
              if (this.data.length > 1) {
                for (let j = 0; j < currentBucket.length; j++) {
                  result.push(currentBucket[j][0])
                }
              } else {
                result.push(currentBucket[0])
              } 
            }
        }
        console.log(result);
        return result; 
      }
   
  }
  
  const myHashTable = new HashTable(2);
//   myHashTable.set('grapes', 10000)
  myHashTable.set('apples', 9)
  myHashTable.set('oranges', 2);
  myHashTable.set('pears', 200);
  myHashTable.keysWithCollisions();
// myHashTable.keys();
