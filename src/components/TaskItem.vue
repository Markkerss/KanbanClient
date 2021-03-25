<template>
  <div class="card text-white bg-primary mb-3">
        <div class="card-body">
            <div class="card-text">
                {{ task.detail }}
            </div>
            <button class="btn" href='#' @click="editt(task.id)"><i class="fal fa-pencil-alt" aria-hidden="true" style="position:absolute; right:20%;"></i></button>
            <button class="btn" href='#' @click.prevent="destroy(task.id)"><i class="fal fa-trash-alt" aria-hidden="true" style="position:absolute; right:10%;"></i></button>                  
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: ['task', 'baseURL', 'edit', 'delete'],
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