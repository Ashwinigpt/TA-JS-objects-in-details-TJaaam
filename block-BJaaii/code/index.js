// Stack

class Stack {
    constructor(){
        this.stack = [];
    }
    push(elm) {
        this.stack.push(elm);
        return this.stack;
    }
    pop(){
        this.stack.pop();
        return this.stack;
    }
    peek(index = this.stack.length - 1){
        return this.stack[index];
    }
    reverse(){
        this.stack.reverse();
        return this.stack;
    }
    isEmpty(){
        return !(this.stack.length > 0);
    }
    displayStack(){
        return this.stack.join(" ");
    }
    length(){
        return this.stack.length;
    }
}

// Queue

class Queue {
    constructor(){
        this.queue = [];
    }
    enqueue(elm){
        this.queue.push(elm);
        return this.queue;
    }
    dequeue(){
        this.queue.shift();
        return this.queue;
    }
    peek(index = this.queue.length){
        return this.queue[index];
    }
    isEmpty(){
        return !(this.queue.length > 0);
    }
    displayQueue(){
        return this.queue.join(" ");
    }
    length(){
        return this.queue.length;
    }
}