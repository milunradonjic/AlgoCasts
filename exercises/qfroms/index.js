// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.start = new Stack();
    this.end = new Stack();
  }

  add(el) {
    this.start.push(el);
  }

  remove() {
    while (this.start.peek()) {
      this.end.push(this.start.pop());
    }

    const removed = this.end.pop();

    while (this.end.peek()) {
      this.start.push(this.end.pop());
    }

    return removed;
  }

  peek() {
    while (this.start.peek()) {
      this.end.push(this.start.pop());
    }

    const removed = this.end.peek();

    while (this.end.peek()) {
      this.start.push(this.end.pop());
    }

    return removed;
  }
}

module.exports = Queue;
