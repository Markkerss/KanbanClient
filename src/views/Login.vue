<template>
    <div id="login-page" class="background-image">
        <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
            <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded" >
                <div class="card-body">
                    <h1 class="text-center mb-3">Login</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="login-email" placeholder="name@example.com" v-model="email">
                            <label for="login-email">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="login-password" placeholder="Password" v-model="password">
                            <label for="login-password">Password</label>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <a class="btn mt-3 col-md-7 mb-4" type="button" href="#" id="btn-login-submit" @click.prevent="logins({email, password})">Login</a>
                        </div>
                        <div class="row d-flex justify-content-center">    
                            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                            <p style="margin-top: 30px">Don't have an account? <a href="#" @click.prevent="register()">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogin  from 'vue-google-login'

export default {
    name: 'Login',
    props: ['changePage', 'login', 'googleLogin'],
    components: {
        GoogleLogin
    },
    data () {
        return {
            email: '',
            password: '',
            params: {
                client_id: "636567464600-qkci006jnupbbah0irqc5elgu8qgloan.apps.googleusercontent.com"
            },
            renderParams: {
                width: 130,
                height: 40,
                longtitle: false
            }
        }
    },
    methods: {
        logins (data) {
            this.$emit('login', data)   
        },
        register () {
            this.$emit('changePage', 'register')
        },
        onSuccess(googleUser) {
            this.$emit('googleLogin', googleUser);
        }
    }
}
</script>

<style>

</style>