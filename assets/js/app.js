var app = new Vue({
  el: '#app',
  data: {
    show: false,
    message: 'Hello World!',
    message2: 'Hello Vue!',
    int1: 1,
    int2: 2
  },
  computed: {
    sum: function() {
      return this.int1 + this.int2;
    }
  }
})