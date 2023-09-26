import { createRouter, createWebHashHistory } from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import About from "@/components/About.vue";
import SacaceProducts from "@/components/SacaceProducts.vue";
import EntrogenProducts from "@/components/EntrogenProducts.vue";
import EntrogenProduct from "@/components/EntrogenProduct.vue"
import Virus from "@/components/Virus.vue";
import Contact from "@/components/Contact.vue";
const routes = [
    { path: '/', component: MainContent },
    { path: '/about', component: About },
    { path: '/about-sacace', component: SacaceProducts },
    { path: '/about-entrogen', component: EntrogenProducts },
    { path: '/entrogen-component', component: EntrogenProduct },
    { path: '/virus-component', component: Virus },
    { path: '/contact-us', component: Contact }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;