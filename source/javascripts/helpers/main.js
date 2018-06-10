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
    editTask: false,
    page: 'all'
  },
  methods: {
    addTodo: function () {
      // alert("OK");
      var idTime = Math.floor(Date.now());
      var value = this.newTodo.title.trim();
      // alert(value);
      // alert(!value);
      if (!value) {
        return;
      };
      // this.id_count += 1;
      // alert(this.id_count);
      this.todos.push({
        id: idTime,
        title: value,
        completed: false,
        mark: false,
        deadlineDate: this.newTodo.deadlineDate,
        deadlineTime: this.newTodo.deadlineTime,
        file: "",
        comment: this.newTodo.comment
      });
      this.newTodo = {
        id: '',
        title: "",
        completed: false,
        mark: false,
        deadlineDate: "",
        deadlineTime: "",
        file: "",
        comment: ""
      };
      this.addTask = false;
      // alert("新增成功");
    },
    removeTodo: function (key) {
      this.todos.splice(key, 1);
    },
    cancelAdd: function () {
      this.newTodo = {
        id: '',
        title: "",
        completed: false,
        mark: false,
        deadlineDate: "",
        deadlineTime: "",
        file: "",
        comment: ""
      };
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
      this.cacheTodo = [];
      this.addTask = false;
      // alert("修改成功");
    },
    cancelEdit: function () {
      this.cacheTodo = [];
      this.addTask = false;
    },
  },
  computed: {
    filterTodo: function () {
      switch (this.page) {
        case 'all':
          return this.todos;
          break;
        case 'active':
          var newTodos = [];
          this.todos.forEach(
            function (item) {
              if (item.completed == true) {
                newTodos.push(item);
              }
            }
          );
          return newTodos;
          break;
        case 'completed':
          var newTodos = [];
          this.todos.forEach(function (item) {
            if (item.completed == false) {
              newTodos.push(item);
            }
          });
          return newTodos;
          break;
      }
    },
    activeNumber: function () {
      var newTodos = [];
      this.todos.forEach(function (item) {
        if (item.completed == false) {
          newTodos.push(item);
        }
      });
      return newTodos.length;
    }
  }
})

/*
[] 決定資料樣式
*/