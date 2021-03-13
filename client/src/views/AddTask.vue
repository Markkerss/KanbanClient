<template>
    <div id="addTask-page" class="background-image">
        <div class="masthead d-flex align-items-center justify-content-center" id="addTask-page-css">
            <div id="addTask-card" class="card shadow p-3 mb-5 bg-body rounded" >
                <div class="card-body">
                    <h1 class="text-center mb-3">Add Task</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="addTask-task" placeholder="Add a Log In module">
                            <label for="addTask-task">Task</label>
                        </div>
                        <div class="form-floating">
                            <select class="form-control" id="addTask-category">
                                <option selected>-- Select Category</option>
                                <option value="backlog">Backlog</option>
                                <option value="inProgress">In Progress</option>
                                <option value="tested">Tested</option>
                                <option value="done">Done</option>
                            </select>
                            <label for="addTask-category">Category</label>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <a class="btn mt-3 col-md-7" type="button" href="#" id="btn-add-task">Add</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>