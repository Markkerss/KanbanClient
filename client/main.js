var app = new Vue({
  el: '#app',
  data: {
    addTaskCategory: 'backlogs',
    page: 'login',
    backlogs: [],
    todos: [],
    doings: [],
    dones: [],
    inputTitleTask: '',
    inputDescTask: '',
  },
  methods: {
      changePage(destination) {
          this.page = destination;
      },
      addNewTaskCategory(category) {
          this.addTaskCategory = category;
      },
      sendTask(){
          if (this.addTaskCategory === 'backlogs') {
              this.backlogs.push({
                  detail: this.inputDetailTask
              })
          } else if (this.addTaskCategory === 'inProgresses') {
              this.inProgresses.push({
                  detail: this.inputDetailTask
              })
          } else if (this.addTaskCategory === 'testeds') {
              this.testeds.push({
                detail: this.inputDetailTask
              })
          } else if (this.addTaskCategory === 'dones') {
              this.dones.push({
                detail: this.inputDetailTask
              })
          }
          this.inputDetailTask = '';
      }
  }
}) 