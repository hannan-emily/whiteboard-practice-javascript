function Stack(){
  var items = [];

  this.push = function(element){
    items.push(element);
  }

  this.pop = function(){
    items.pop();
  }

  this.peek = function(){
    return items[items.length-1];
  }

  this.isEmpty = function(){
    return items.length === 0;
  }

  this.size = function(){
    return items.length;
  }

  this.clear= function(){
    items = [];
  }

  this.print = function(){
    console.log(items);
  }

}

var stack = new Stack();
// stack.push(27);
// stack.push(7);
// stack.push(12);
// stack.push(3);
// stack.peek();
// stack.print();



function Queue(){
  var items = [];

  this.enqueue = function(element){
    items.push(element);
  }

  this.dequeue = function(){
    return items.shift();
  }

  this.front = function(){
    return items[0];
  }

  this.isEmpty = function(){
    return items.length === 0;
  }

  this.size = function(){
    return items.length;
  }

  this.print = function(){
    console.log(items);
  }

}

var queue = new Queue();
// queue.enqueue('Lauren');
// queue.enqueue('Jordan');
// queue.enqueue('David');
// queue.enqueue('Chris');
// queue.enqueue('Meredith');
// queue.print();
// queue.dequeue();
// queue.print();
// queue.size();
