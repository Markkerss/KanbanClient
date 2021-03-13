<template>
  <div>
    <Navbar :pageProp="page" @navbarBoard="changePage" @navbarLogout="logout"></Navbar>
    <HomePage v-if="page === 'home'" @homeLogin="changePage" @homeSignUp="changePage" :baseUrl="baseUrl"></HomePage>
    <LoginPage v-else-if="page === 'login'" :baseUrl="baseUrl" :changePageProp="changePage"></LoginPage>
    <SignUpPage v-else-if="page === 'signup'" :changePageProp="changePage" :baseUrl="baseUrl"></SignUpPage>
    <BoardPage v-if="page === 'board'" :baseUrl="baseUrl" :changeAddPageProp="changeAddPage" :getTasks="getTasks" :tasks="tasks"></BoardPage>
    <AddTaskPage v-if="addTask === true" :changeAddPageProp="changeAddPage" :baseUrl="baseUrl" :getTasks="getTasks"></AddTaskPage>
    <EditTaskPage v-if="editTask === true" :changeEditPageProp="changeEditPage" :editedTask="editedTask" :baseUrl="baseUrl" :getTasks="getTasks"></EditTaskPage>
  </div>
</template>

<script>
import Navbar from './components/NavBar';
import LoginPage from './views/Login';
import SignUpPage from './views/SignUp';
import HomePage from './views/Home';
import AddTaskPage from './views/AddTask';
import EditTaskPage from './views/EditTask';
import BoardPage from './views/Board';
import BoardCardEdit from './components/BoardCardEdit';
import axios from 'axios';
 
export default {
  name: 'App',
  data() {
    return {
      page: 'login',
      addTask: false,
      baseUrl: 'http://localhost:3000',
      tasks: []
    }
  },
  methods: {
    changePage(value) {
      if (value === 'login') {
          this.page = 'login';
      } else if (value === 'register') {
          this.page = 'register';
      } else if (value === 'home') {
          this.page = 'home';
      }
    },
    changeAddPage(value) {
      this.addTask=value;
    },
    logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('email');
      this.page='login';
    },
    getTasks() {
      axios({
          url: `${this.baseUrl}/tasks`,
          method: 'GET',
          headers: {
              access_token: localStorage.access_token,
          }
      })
      .then(({data}) => {
          this.tasks = data;
      })
      .catch(err => {
          console.log(err);
      })
    }
  },
  components: {
    Navbar,
    LoginPage,
    SignUpPage,
    HomePage,
    AddTaskPage,
    EditTaskPage,
    BoardPage,
    BoardCardEdit
  },
  created() {
    if (localStorage.access_token) {
        this.page='home';
    } else {
        this.page='login';
    }
  }
</script>

<style>
</style>