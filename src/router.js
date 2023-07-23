import {createRouter, createWebHashHistory} from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import About from "@/components/About.vue";
import SacaceProducts from "@/components/SacaceProducts.vue";
import Virus from "@/components/Virus.vue";
import Contact from "@/components/Contact.vue";
const routes = [
    { path: '/', component: MainContent },
    { path: '/about', component: About},
    { path: '/about-sacace', component: SacaceProducts},
    { path: '/virus-component', component: Virus},
    { path: '/contact-us', component: Contact}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;