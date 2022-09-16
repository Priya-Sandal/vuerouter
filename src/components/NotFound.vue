<template>
    <div id="error">
        <p id="error 404">404 error</p>
        <h1>Oops! Page has not been found.</h1>
        <router-link to="/" class="notfound">Go to Home

        </router-link>
    </div>
</template>
<script>
    export default{
        name:'NotFound'
    }
</script>
<style>
    #error
    {
        display:flex;
        justify-content: center;
        height: 80vh;
    }
    .notfound{
color:blue;
text-decoration: none;
    }
    
</style>
