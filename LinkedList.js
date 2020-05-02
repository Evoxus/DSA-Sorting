class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Constant Complexity O(1)
  insertFirst(value) {
    if (this.head === null) {
      this.head = new _Node(value);
    } else {
      const oldHead = this.head;
      this.head = new _Node(value, oldHead);
    }
  }

  // Linear Complexity O(n)
  insertBefore(value, beforeValue) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode !== null && currentNode.value !== beforeValue) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = new _Node(value, currentNode);
    }
  }

  // Linear Complexity O(n)
  insertAfter(value, afterValue) {
    if (this.head === null) {
      this.insertFirst(value);
      return;
    }

    let currentNode = this.head;

    while (currentNode.value !== afterValue && currentNode !== null) {
      currentNode = currentNode.next;
    }

    let after = currentNode.next;
    currentNode.next = new _Node(value, after);
  }

  // Linear Complexity O(n)
  insertAt(value, position) {
    if (this.head === null) {
      this.insertFirst(value);
      return;
    }

    let counter = 0;
    let currentNode = this.head;
    let previousNode;
    while (counter !== position) {
      counter++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = new _Node(value, currentNode);
  }

  // Linear Complexity O(n)
  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(value);
    }
  }

  // Linear Complexity O(n)
  remove(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currentNode.next;
  }

  // Linear Complexity O(n)
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        console.log("Item not found");
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

class _Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  LinkedList,
  _Node,
};
