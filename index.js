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
