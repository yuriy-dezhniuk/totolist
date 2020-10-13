let vm = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    // todos: [
    //   // {
    //   //   id: 1,
    //   //   title: 'Помыть посуду',
    //   //   stage: true,
    //   // },
    //   // {
    //   //   id: 2,
    //   //   title: 'Вынести мусор',
    //   //   stage: false,
    //   // },
    //   // {
    //   //   id: 3,
    //   //   title: 'Подстричь газон',
    //   //   stage: false,
    //   // }
    // ],
    // nextTodoId: 0,
  },
  methods: {
    generateTodoId() {
      return '_' + (new Date - Math.random()).toString(36).substr(1, 9)
    },
    updateToDoState(updatedStage, todoIndex) {
      this.todos[todoIndex].stage = updatedStage;
      this.sendDataToLS();
    },
    addNewTodo: function () {
      if(this.newTodoText === '') {
        alert('Task should not be empty')
      } else {
        this.todos.unshift({
          id: this.generateTodoId(),
          title: this.newTodoText,
          stage: false,
        });
        this.sendDataToLS();
        this.newTodoText = '';
      }
    },
    sendDataToLS() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },   
  },


})