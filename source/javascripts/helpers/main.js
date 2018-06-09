var app = new Vue({
  el: '#app',
  data: {
    // newTodo: {
    //   id: '1',
    //   title: "我要寫甚麼呢?",
    //   completed: true,
    //   mark: false,
    //   deadlineDate: "2018-06-09",
    //   deadlineTime: "22:53:05",
    //   file: "",
    //   comment: ""
    // },
    newTodo: {
      id: '',
      title: "",
      completed: false,
      mark: false,
      deadlineDate: "",
      deadlineTime: "",
      file: "",
      comment: ""
    },
    todos: [
      {
        id: '1',
        title: "啟動Vue.js",
        completed: true,
        mark: false,
        deadlineDate: "2018-06-09",
        deadlineTime: "22:53:05",
        file: "",
        comment: ""
      },
      {
        id: '2',
        title: "帶入資料",
        completed: false,
        mark: true,
        deadlineDate: "2018-06-10",
        deadlineTime: "22:53:05",
        file: "有",
        comment: "class錯誤"
      }
    ],
    cacheTodo: [],
    addTask: false,
    editTask: false
  },
  methods: {
    addTodo: function () {
      // alert("OK");
      var value = this.newTodo.title.trim();
      // alert(value);
      // alert(!value);
      if (!value) {
        return;
      };
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.addTask = false;
      alert("新增成功");
    },
    removeTodo: function (key) {
      // console.log(key);
      this.todos.splice(key, 1);
    },
    cancelAdd: function () {
      this.newTodo = '';
      this.addTask = false;
    },
    editTodo: function (item) {
      // console.log(item);
      this.cacheTodo = item;
    },
    saveTodo: function (item) {
      // alert("OK");
      var value = this.cacheTodo.title.trim();
      // alert(value);
      // alert(!value);
      if (!value) {
        return;
      };
      // console.log(item);
      item = this.cacheTodo;
      this.cacheTodo = '';
      this.addTask = false;
      alert("修改成功");
    },
    cancelEdit: function () {
      this.cacheTodo = '';
      this.addTask = false;
    },
  }
})

/*
[] 決定資料樣式
*/