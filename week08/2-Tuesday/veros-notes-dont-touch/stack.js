class Stack {
  constructor() {
    this.data = [4, 6, 8, 9, 2];
  }

  pop() {
    return this.data.pop();
  }

  push(val) {
    return this.data.push(val);
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
