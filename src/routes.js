import { createWebHistory, createRouter } from 'vue-router'
const Home = () => import('./components/Home.vue');
const About = () => import('./components/About.vue');
 const Jobs = () => import('./components/Jobs.vue');
const JobDetails = () => import('./components/JobDetails.vue');
const NotFound = () => import('./components/NotFound.vue');

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/About',
        component: About,
    },
    {
        name: 'Jobs',
        path: '/jobs',
        component: Jobs,
    },
     {
        name: 'JobDetails',
         path: '/jobs/:id',
         component: JobDetails,
         props: true,
    },
     {
        name: 'NotFound',
         path: '/:pathMatch(.*)*',
         component: NotFound
     }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;