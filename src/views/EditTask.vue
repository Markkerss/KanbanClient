<template>
    <div>
        <body style= "min-height: 78.6vh" class="background-image container-fluid" >
            <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
                <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded" >
                    <div class="card-body">
                        <h1 class="text-center mb-3">Edit Task</h1>
                        <form>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="addTask-task" placeholder="Add a Log In module" v-model="task.detail">
                                <label for="addTask-task">Details</label>
                            </div>
                            <div class="form-floating">
                                <select class="form-control" id="addTask-category" v-model="task.category">
                                    <option value="backlog">Backlog</option>
                                    <option value="todo">To Do</option>
                                    <option value="doing">Doing</option>
                                    <option value="done">Done</option>
                                </select>
                                <label for="addTask-category">Category</label>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <a class="btn mt-3 col-md-7" type="button" href="#" id="btn-login-submit" @click.prevent="edited(task)">Edit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
        <footer class="footer" style="margin-top:0px">
            <p id="footer-text">&copy; Copyright Marco Laju 2021</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Edit',
    props: ['task', 'putEdit'],
    methods: {
        edited (data) {
            this.$emit('putEdit', data)
        }
    }
}
</script>

<style>

</style>