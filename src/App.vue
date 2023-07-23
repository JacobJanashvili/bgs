<script>
import Header from "@/components/Header.vue";
import MainContent from "@/components/MainContent.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router'
import router from "@/router";
import {provide} from "vue";
provide('router', router);
export  default{
  name: 'App',
  components: {Footer, MainContent, Header}
}
</script>

<template>
    <router-view/>
</template>

<style scoped>

</style>
