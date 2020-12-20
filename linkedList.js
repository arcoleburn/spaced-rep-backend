'use strict'


class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item, value) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next.value !== value) {
        tempNode = tempNode.next;
      }
      let newAfter = tempNode.next;
      tempNode.next = new _Node(item, newAfter);
    }
  }
  insertAfter(item, value) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.value !== value) {
        if (!tempNode.next) {
          this.insertLast(item);
          return;
        }
        tempNode = tempNode.next;
      }
      let newAfter = tempNode.next;
      tempNode.next = new _Node(item, newAfter);
    }
  }
  insertAt(item, pos) {
    if (this.head === null || pos === 0) {
      this.insertFirst(item);
    } else {
      let counter = 0;
      let tempNode = this.head;
      while (counter !== pos) {
        tempNode = tempNode.next;
        counter++;
        console.log('temp,', tempNode);
        console.log('counter', counter);
      }
      this.insertBefore(item, tempNode.value);
    }
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value == item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.value + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
  listSize() {
    let curr = this.head;
    let counter = 0;
    if (!this.head) {
      return counter;
    } else {
      while (curr) {
        counter++;
        curr = curr.next;
      }
    }
    return counter;
  }
  isEmpty() {
    return !this.head;
  }
  findPrev(item) {
    if (!this.head || !this.head.next) {
      return null;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.next.value == item) {
          return curr;
        } else {
          curr = curr.next;
        }
      }
    }
  }
  findLast() {
    if (!this.head) {
      return null;
    }
    let curr = this.head;
    while (curr) {
      if (curr.next == null) {
        return curr;
      } else {
        curr = curr.next;
      }
    }
  }
}

function toArray(linkedList) {
  let currentNode = linkedList.head;
  let result = [];
  while (currentNode.next !== null) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  result.push(currentNode.value);
  return result;
}

module.exports={
  LinkedList,
  _Node,
  toArray
}