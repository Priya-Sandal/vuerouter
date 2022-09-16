
<template>
    <h1>Jobs</h1>
    <div v-for="(job,index) in jobs" class="job" :key="index"> 
         <router-link  :to ="{name:'JobDetails',params: {id:job.id}}" class="JobDetail">{{job.title}} 
     </router-link> 
    </div>
</template>
<script>
    import{jobs} from './jobs';
    export default{
        name:'Jobs',
        data(){
            return{
                jobs:jobs
            }
        },
    }
</script>
<style>
    .job{
        font-size: 1.5em;
        width:20%;
        height: 10%;
        background-color: rgb(224, 224, 224);

         cursor:pointer; 
        margin: 10px auto;
        

    }
    .JobDetail{
        text-decoration: none;
        width:100%;
        height:100%;
        color: blueviolet;

    }
  
</style>