<template>
  <div id="boards-page" class="background-image">
        <button type="button" class="btn btn-primary btn-sm" id="add-task">Add Task</button>
        <div id="backlog" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p >Backlog</p>             
                </div>
                
            </div>
        </div>
        <div id="product" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p>In Progress</p>    
                </div> 
               
            </div>
        </div>
        <div id="development" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p>Tested</p>     
                </div>
               
            </div>
        </div>
        <div id="done" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p>Done</p>   
                    <span>
                        <i class="fal fa-plus fa-lg btn" aria-hidden="true" style="position:relative; top:-0.4rem; right:-9.5rem;"></i>
                    </span>   
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'HomePage',
    // props: ["baseUrl", "addPageProp", "getTasks", "tasks"],
    // data() {
    //     return {
    //         categories: ['backlog', 'todo', 'doing', 'done'],
    //         editTask: false,
    //         editedTask: ''
    //     }
    // },
    // methods: {
    //     editTaskPage (value) {
    //         this.editTask = value;
    //     },
    //     editedTask(value) {
    //         this.editedTask = value;
    //     }
    // },
    // components: {
    //     EditTask
    // },
    // created() {
    //     this.getTasks();
    // }
}
</script>

<style>
    
</style>