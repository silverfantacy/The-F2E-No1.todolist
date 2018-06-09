var app = new Vue({
  el: '#app',
  data: {
    newTodo: {
      id: '1',
      title: "我要寫甚麼呢?",
      completed: true,
      mark: false,
      deadlineDate: "2018-06-09",
      deadlineTime: "22:53:05",
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
    ]
  }
})

/*
[] 決定資料樣式
*/