import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/components/Profile.vue";
import Contact from "@/components/Contact.vue";
import Main from "@/Pages/MainProfile.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/Profile", name: "Profile", component: Profile },
  { path: "/Contact", name: "Contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
