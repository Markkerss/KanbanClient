<template>
    <div id="login-page" class="background-image">
        <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
            <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded" >
                <div class="card-body">
                    <h1 class="text-center mb-3">Login</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="login-email" placeholder="name@example.com">
                            <label for="login-email">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="login-password" placeholder="Password">
                            <label for="login-password">Password</label>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <a class="btn mt-3 col-md-7" type="button" href="#" id="btn-login-submit">Login</a>
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
    .background-image {
        background-image: url("mountain2.webp");
        height: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>