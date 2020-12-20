var app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
    escKey: function() {
      this.message = 'you pressing esc key'
    },
    spaceKey: function() {
      this.message = 'you pressing space key'
    },
    upKey: function() {
      this.message = 'you pressing up key'
    },
    downKey: function() {
      this.message = 'you pressing down key'
    },
    aKey: function() {
      this.message = "you pressing alphabet 'a' key"
    },
  }
})