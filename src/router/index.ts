import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import SearchResults from '../views/SearchResults.vue';
import UserDetails from '../views/UserDetails.vue';
import JobDetails from '../views/JobDetails.vue';
import ResultsJobs from '../views/ResultsJobs.vue';
import ResultsUsers from '../views/ResultsUsers.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchResults,
  },
  {
    path: '/users/:id',
    name: 'User Details',
    component: UserDetails,
  },
  {
    path: '/jobs/:id',
    name: 'Job Description',
    component: JobDetails,
  },
  {
    path: '/jobs/results',
    name: 'Job Results',
    component: ResultsJobs,
  },
  {
    path: '/users/results',
    name: 'Users Results',
    component: ResultsUsers,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
