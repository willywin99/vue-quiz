let pos = 0;

var app = new Vue({
  el: '#app',
  data: {
    content: '',
    names: ['Muhammad Iqbal Mubarok', 'Faqih Muhammad', 'Rayhan Murtaza'],
    editStatus: false,
    // pos: 0,
  },
  methods: {
    updateName: function () {
      // console.log(pos);
      // console.log(this.names[pos]);
      // console.log(this.content);
      this.names[pos] = this.content;
      this.editStatus = false;
    },
    editName: function (index) {
      this.content = this.names[index];
      this.editStatus = true;
      pos = index;
      // console.log(pos)
    },
    addName: function () {
      this.names.push(this.content);
      this.content = '';
    },
    removeName: function (index) {
      this.names.splice(index, 1);
    }
  }
}) 