import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ToRecruiters from "./views/ToRecruiters.vue";

const routes = [
  { 
    path: "/", 
    component: Home,
    props: {
      content: true
    } 
  },
  { 
    path: "/to-recruiters", 
    component: ToRecruiters ,
    props: {
      content: true
    } 
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  linkActiveClass: 'font-bold'
});

export default router;
