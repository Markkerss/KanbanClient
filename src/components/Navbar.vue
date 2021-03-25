<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="nav-bar">
        <a class="navbar-brand ml-4" href="#" @click.prevent="changePage('home')">Kanban</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="changePage('add')">Add Task</a>
                </li>
            </ul>
            <div class="nav-item navbar-nav">
                <a class="nav-link" href="#" @click.prevent="logout" :params="params">Log Out</a>    
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            params: {
                client_id: '636567464600-qkci006jnupbbah0irqc5elgu8qgloan.apps.googleusercontent.com'
            }
        }
    },
    methods: {
        changePage(pageValue) {
            if (pageValue === 'home') {
                this.$emit('homePage', 'home');
            } else if (pageValue === 'add') {
                this.$emit('addPage', 'add');
            }
        },
        logout() {
            this.$emit('navbarLogout');
        }
    }
}
</script>

<style>

</style>