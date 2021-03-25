<template>
  <div class="drop-zone">
        <div class="big-card" style="min-width:15rem; min-height:10rem;">
            <div class="big-card-label">
                <p>{{ category.name }}</p>             
            </div>
            <TaskItem v-for="(task, i) in category.tasks" :key="i" :task="task" :baseURL="baseURL" :changePage="changePage" @edit='editt' @delete="destroy"></TaskItem>
        </div>
    </div>
</template>
 
<script>
import TaskItem from './TaskItem'

export default {
    name: 'TaskBoard',
    components: {
        TaskItem
    },
    props: ['changePage', 'category', 'baseURL', 'edit', 'delete'],
    methods: {
        editt (id) {
            this.$emit('edit', id)
        },
        destroy(id) {
            this.$emit('delete', id)
        }
    }
}
</script>

<style>

</style>