Vue.component('todo-item', {
  props: ['todo'],
  template: '<li> {{ todo.text  }}</li>'
});

let app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: "Vege"},
      { id: 1, text: "Chese"},
      { id: 2, text: "Bread"},
      { id: 3, text: "Notebook"}
    ]
  }
});


let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    message2: 'FooBar123',
    message3: 'example text',
    seen: true,
    todos: [ {txt: "one"}, {txt: "two"}, {txt: "three"} ] 
  },
  methods: {
    reverseMessage: function(){
      this.message2 = this.message2.split('').reverse().join('');
    }
  }
});

app.message = 'Masahiko';
