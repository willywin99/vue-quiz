Vue.component('greeting', {
  template: `
    <div>
      <b>Hello, Vue</b> <br>
      <i>Hello, Vue</i> <br>
      <u>Hello, Vue</u>
    </div>
  `
});

var app = new Vue({
  el: '#app',
});