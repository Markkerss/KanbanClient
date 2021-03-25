<template>
    <div>
        <body style= "min-height: 150vh" class="background-image container-fluid" >
            <h1 style="color:white; font-size:4rem; padding-top:3.5rem; text-align:center">Tasks</h1>
            <div class="row mx-2">
                <TaskBoard v-for="(category, i) in combinedArr" :key="i" :category="category" :baseURL="baseURL" :changePage="changePage" @edit="editt" @delete="destroy"></TaskBoard>
            </div>
        </body>
        <footer class="footer" style="margin-top:0px">
            <p id="footer-text">&copy; Copyright Marco Laju 2021</p>
        </footer>
    </div>
</template>

<script>
import TaskBoard from '../components/TaskBoard'

export default {
    name: 'Home',
    components: {
        TaskBoard
    },
    props: ['changePage', 'combinedArr', 'baseURL', 'edit', 'delete'],
    methods: {
        editt(id) {
            this.$emit('edit', id)
        },
        destroy(id) {
            this.$emit('delete', id)
        }
    }
}
</script>

<style>
    footer {
        text-align: center;
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 5px;
        height: 5rem;
        background-color: grey;
        margin-top: 100px;
    }

    #footer-text {
        vertical-align: middle;
        margin-top: 1.5rem;
        color: white;
    }
</style>