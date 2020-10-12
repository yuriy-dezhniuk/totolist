let vm = new Vue({
  el: '#todo-list',
  data: {
    newTodoText: '',
    todos: [
      // {
      //   id: 1,
      //   title: 'Помыть посуду',
      //   stage: false,
      // },
      // {
      //   id: 2,
      //   title: 'Вынести мусор',
      //   stage: false,
      // },
      // {
      //   id: 3,
      //   title: 'Подстричь газон',
      //   stage: false,
      // }
    ],
    nextTodoId: new Date() - Math.random(),
    // "ID-"+(new Date()).getTime().toString()
  },
  methods: {
    addNewTodo: function () {
      if(this.newTodoText === '') {
        alert('Task should not be empty')
      } else {
        this.todos.unshift({
          id: this.nextTodoId++,
          title: this.newTodoText,
          stage: false,
        });
        console.log(this.todos[0].id);
        this.newTodoText = '';
      }
    },
  },


})