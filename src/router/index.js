import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactsView from "../views/ContactsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
     path: "/services",
    name:'services',
     component: ServicesView 
    },
  { 
    path: "/contacts", 
    name:'contacts',
    component: ContactsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
