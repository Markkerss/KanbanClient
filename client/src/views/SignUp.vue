<template>
    <div id="signup-page" class="background-image">
        <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
            <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded" >
                <div class="card-body">
                    <button type="button" href='#' class="close" aria-label="Close" style="position:absolute; top:0.5rem; right:0.8rem;">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h1 class="text-center mb-3">Sign Up</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="signup-email" placeholder="xxx@example.com">
                            <label for="signup-email">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="signup-password" placeholder="Password">
                            <label for="signup-password">Password</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="signup-username" placeholder="Username">
                            <label for="signup-username">Username</label>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <a class="btn mt-3 col-md-7" type="button" href="#" id="btn-login-submit">Sign Up</a>
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