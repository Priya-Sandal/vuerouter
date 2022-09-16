<template>
    <h1>JobDetails</h1>
    <h2>Job id : {{id}}</h2>
    <h2>DETAILS</h2>
    <h3>{{details}}</h3>
</template>
    
<script>
import {
    jobs
} from './jobs';
export default {
    name: 'JobDetails',
    props: {
        id: String
    },
    data() {
        return {
            details: "",
        }
    },
    mounted() {
        this.details = jobs.filter(job => job.id === parseInt(this.id))[0].details;
    }
}
</script>
    
<style>

</style>