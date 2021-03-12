<template>
  <div id="app">

  </div>
</template>

<script>
import draggable from "vuedraggable"

export default {
  name: 'App',
  components: {
    draggable
  },
  data () {
    return {
      newTask: "",
      arrBacklog: [
        {task: "Create an HTML template"},
        {task: "Do CSS Styling"}
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    }
  },
  methods: {
    add(destination) {
      if (this.newTask) {
        if (destination === 'backlog') {
          this.arrBacklog.push({task: this.newTask})
        } else if (destination === 'inProgress') {
          this.arrInProgress.push({task: this.newTask})
        } else if (destination === 'tested') {
          this.arrTested.push({task: this.newTask})
        } else {
          this.arrDone.push({task: this.newTask})
        }
      }
    }
  }
};
</script>

<style>
</style>