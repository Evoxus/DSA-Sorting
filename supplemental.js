// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

// Linear Complexity O(n)
function display(list) {
  if (list.head === null) {
    return 'List is empty';
  }

  let currentNode = list.head
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

// Linear Complexity O(n)
function size(list) {
  if(list.head === null) {
    return 0;
  }

  let currentNode = list.head;
  let i = 1;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    i++;
  }

  return i;
}

// Constant Complexity O(1)
function isEmpty(list) {
  return !list.head
}

// Linear Complexity O(n)
function findPrevious(list, item) {
  if(list.head === null) {
    return 'Item not found';
  }

  if(list.head.value === item) {
    return 'Item at head, nothing before head';
  }

  let currentNode = list.head;
  let previousNode;
  while ((currentNode !== null) && (currentNode.value !== item)) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  
  if (currentNode === null) {
    return 'Item not found';
  }

  return previousNode.value;
}

// Linear Complexity O(n)
function findLast(list) {
  if(list.head === null) {
    return 0;
  }

  let currentNode = list.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  return currentNode.value;
}

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast
}