class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const elements = [];

    let currentNode = this.head;

    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("foo");
linkedList1.append("bar");
linkedList1.append(2);
linkedList1.append("baz");
linkedList1.append(4);

console.log(linkedList1.toArray());
