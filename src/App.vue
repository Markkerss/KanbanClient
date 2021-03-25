<template>
    <div id="app">
        <Navbar v-if="page !== 'login' && page !== 'register'" @homePage="changePage" @addPage="changePage" @navbarLogout="logout"></Navbar>
        <AddTask v-if="page === 'add'" @add="add" @changePage="changePage"></AddTask>
        <Login v-if="page === 'login'" @googleLogin="googleLogin" @changePage="changePage" @login="login"></Login>
        <Home v-if="page === 'home'" @changePage="changePage" :combinedArr="combinedArr" @edit="editt" @delete="destroy"></Home>
        <Register v-if="page === 'register'" @changePage="changePage"  @register="register"></Register>
        <EditTask v-if="page === 'edit'" :task="task" @putEdit="edited"></EditTask>
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import AddTask from './views/AddTask.vue'
import EditTask from './views/EditTask.vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'App',
    components: { 
        Navbar,
        Register,
        Login,
        Home,
        AddTask,
        EditTask,
    },
    data () {
        return {
            page: 'login',
            baseURL: 'https://nicekanban-board.herokuapp.com',
            tasks: [],
            task: {},
        }
    },
    methods: {
        changePage(pageValue) {
            this.page = pageValue
        },
        logout() {
            localStorage.removeItem('access_token')
            localStorage.removeItem('email')
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
            this.page='login'
        }, 
        getTasks() {
            axios({
                url: `${this.baseURL}/tasks`,
                method: 'get',
                headers: {
                    access_token: localStorage.access_token,
                }
            })
                .then(data => {
                    this.tasks = data.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editt (ids) {
            axios({
                url: `${this.baseURL}/tasks/${ids}`,
                method: 'get',
                headers: {
                    access_token: localStorage.access_token
                }
            })
                .then(data => {
                    console.log(data.data)
                    this.task = data.data
                    this.changePage('edit')
                })
                .catch(err => {
                    console.log(err.response)
                    Swal.fire (
                        `${err.response.data.message}`,
                        '',
                        'error'
                    )
                })
        },
        destroy (id) {
            axios({
                url: `${this.baseURL}/tasks/${id}`,
                method: 'delete',
                headers: {
                    access_token: localStorage.access_token,
                }
            })
                .then(() => {
                    this.getTasks()
                })
                .catch(err => {
                    Swal.fire (
                        `${err.response.data.message}`,
                        '',
                        'error'
                    )
                })
        },
        edited(editedTask) {
            axios({
                url: `${this.baseURL}/tasks/${editedTask.id}`,
                method: 'put',
                headers: {
                    access_token: localStorage.access_token,
                },
                data: {
                    detail: editedTask.detail,
                    category: editedTask.category
                }
            })
                .then(() => {
                    this.getTasks()
                    this.changePage('home')
                })
                .catch(err => {
                    let errors = ''
                    err.response.data.map(error => {
                        errors += String(error.message) + ', '
                    })
                    errors = errors.slice(0, -2)
                    Swal.fire(
                        `${errors}`,
                        '',
                        'error'
                    )
                })
        },
        register (datas) {
            axios({
                url: `${this.baseURL}/register`,
                method: 'post',
                data: {
                    email: datas.email,
                    password: datas.password
                }
            })
                .then(() => {
                    this.changePage('login')
                })
                .catch(err => {
                    this.email = ''
                    this.password = ''
                    if (err.response.status === 400) {
                        let errors = ''
                        err.response.data.map(error => {
                            errors += String(error.message) + ', '
                        })
                        errors = errors.slice(0, -2)
                        Swal.fire(
                            `${errors}`,
                            '',
                            'error'
                        )
                    } else if (err.response.status === 500) {
                        Swal.fire({
                            title: 'Oops!',
                            text: 'An account exists under the entered username. Would you like to log in?',
                            icon: 'error',
                            showCancelButton: true,
                            confirmButtonText: `Log in`
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    this.changePage('login')
                                }
                            })
                    }
                    
                })
        },
        login (datas) {
            axios({
                url: `${this.baseURL}/login`,
                method: 'post',
                data: {
                    email: datas.email,
                    password: datas.password
                }
            })
                .then(data => {
                    localStorage.access_token = data.data.access_token
                    localStorage.email = data.data.email
                    this.changePage('home')
                    this.getTasks()
                })
                .catch(err => {
                    this.email = ''
                    this.password = ''
                    Swal.fire(
                        `${err.response.data.message}`,
                        '',
                        'error'
                    )
                })
        },
        googleLogin(googleUser) {
            let token = googleUser.getAuthResponse().id_token
            axios({
                url: `${this.baseURL}/google-login`,
                method: 'post',
                data: {
                    token
                }
            })
                .then(data => {
                    console.log(data, "<<<<<dataaaaa")
                    localStorage.access_token = data.data.access_token
                    localStorage.email = data.data.email
                    this.changePage('home')
                    this.getTasks()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        add (datas) {
            axios({
                url: `${this.baseURL}/tasks`,
                method: 'post',
                data: {
                    detail: datas.detail,
                    category: datas.category
                },
                headers: {
                    access_token: localStorage.access_token,
                }
            })
                .then(() => {
                    this.changePage('home')
                    this.getTasks()
                })
                .catch(err => {
                    this.detail = ''
                    this.category = ''
                    let errors = ''
                    err.response.data.map(error => {
                        errors += String(error.message) + ', '
                    })
                    errors = errors.slice(0, -2)
                    Swal.fire(
                        `${errors}`,
                        '',
                        'error'
                    )
                })
        }
    },
    created() {
        if (localStorage.access_token) {
            this.page='home'
            this.getTasks()
        } else {
            this.page='login'
        }
    },
    computed: {
        combinedArr: function() {
            let arr = []
            arr.push({name: 'Backlog', tasks: this.tasks.filter(task => task.category === 'backlog')})
            arr.push({name: 'To Do', tasks: this.tasks.filter(task => task.category === 'todo')})
            arr.push({name: 'Doing', tasks: this.tasks.filter(task => task.category === 'doing')})
            arr.push({name: 'Done', tasks: this.tasks.filter(task => task.category === 'done')})
            return arr
        }
    }
}
</script>

<style>

</style>