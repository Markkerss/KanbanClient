<template>
    <div id="home-page">
        <h1 id="home-title">Kanban</h1>
        <h5 id="home-subtitle">Be at peace. Organize life.</h5>
        <button type="button" class="btn btn-primary" id="btn-login" href='#home-page'>Log in</button>
        <button type="button" class="btn btn-primary" id="btn-signup" href='#home-page'>Sign Up</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #home-page {
        background-image: url("mountain2.webp");
        height: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #home-title {
        color: whitesmoke;
        font-size: 4rem;
        position: absolute;
        top:  47%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #home-subtitle {
        color: whitesmoke;
        position: absolute;
        top:  57%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #btn-login {
        font-size: 1rem;
        position: absolute;
        top:  67%;
        left: 45%;
        transform: translate(-50%, -50%);
        min-width: 7rem;
    }

    #btn-signup {
        font-size: 1rem;
        position: absolute;
        top:  67%;
        left: 55%;
        transform: translate(-50%, -50%);
        min-width: 7rem;
    }
</style>