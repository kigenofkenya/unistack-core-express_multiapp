var tCache=[];
riot.tag('todos', todos.value, function(opts) {

  this.todos = [];
  var self = this;
  this.on('mount', function() {
    if(opts.todos) this.todos = opts.todos;
    tCache=this.todos;
    setTimeout(function(){self.update()},0); // why do I have to hack?
  });
  

  this.edit = function(e) {
    this.text = e.target.value;
      tCache=this.todos;
  }.bind(this);

  this.add = function(e) {
    if (this.text) {
      this.todos.push({title: this.text, items: []});
      this.text = this.input.value = '';
        tCache=this.todos;
    }
  }.bind(this);

  this.remove = function(e) {
    for (var i = this.todos.length -1; i>=0; i--) {
      if (this.todos[i].items.length === 0) {
        this.todos.splice(i, 1);
      }
    }
      tCache=this.todos;
  }.bind(this);
  
  this.canRemove = function() {
    for(var i in this.todos) {
      if (this.todos[i].items.length === 0) return false;
    }
    return true;
  }.bind(this);

});


riot.tag('todo', todotag.value, function(opts) {
  var parent = this.parent
  this.items = parent.items || [];
  
  this.add = function(e) {
    if (this.text) {
      this.items.push({
        title: this.text
      });
      this.text = this.input.value = '';
      parent.update();
    }
  }.bind(this);

  this.remove = function(e) {
    for (var i = this.items.length-1; i>=0;i--) {
      if (this.items[i].done) {
        this.items.splice(i, 1);
        parent.update();
      }
    }
  }.bind(this);

  this.edit = function(e) {
    this.text = e.target.value;
  }.bind(this);

  this.toggle = function(e) {
    var item = e.item;
    item.done = !item.done;
    return true;
  }.bind(this);
  
  this.canRemove = function() {
    for(var i in this.items) {
      if(this.items[i].done) return false;
    }
    return true;
  }.bind(this);

});

