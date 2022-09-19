<template>
    <h1>JobDetails</h1>
    <h2>Job id : {{id}}</h2>

    <h3>{{details}}</h3>
</template>
    
<script>
// import { onMounted } from 'vue';
import {
    jobs
}
    from './jobs.js';
export default {
    name: 'JobDetails',
    data() {
        // console.log(this.route.params)
        return {

            details: '',
            id: this.$route.params.id,
            // details:this.$route.params.details
        }



    },
    mounted() {
        this.details = jobs.filter(job => job.id === parseInt(this.$route.params.id))[0].details;

    }

}
</script>
    
<style>

</style>
