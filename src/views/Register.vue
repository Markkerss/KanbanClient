<template>
    <div id="signup-page" class="background-image">
        <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
            <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded" >
                <div class="card-body">
                    <h1 class="text-center mb-3">Register</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="signup-email" placeholder="xxx@example.com" v-model="email">
                            <label for="signup-email">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="signup-password" placeholder="Password" v-model="password">
                            <label for="signup-password">Password</label>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <a class="btn mt-1 col-md-7 mb-4" type="button" id="btn-login-submit" href='#' @click.prevent="registers({email, password})">Register</a>
                            <p style="margin-top: 5px; padding-bottom:-15px">Already have an account? <a href="#" @click.prevent="login()">Log In</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    props: ['changePage', 'register'],
    data () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        registers(data) {
            this.$emit('register', data)
        },
        login() {
            this.$emit('changePage', 'login')
        }
    },
}
</script>

<style>

</style>