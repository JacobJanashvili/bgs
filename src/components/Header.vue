<script setup>
import Menubar from 'primevue/menubar';
import {computed, inject, onBeforeUnmount, onMounted,  ref} from "vue"
import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import '@fortawesome/fontawesome-free/css/all.css';
const selectedLanguage = ref('GEO'); // Initial language selection
const isDropdownOpen = ref(false);

import { useRouter } from 'vue-router';
import router from "@/router";

const handleMenuItemClick = (item) => {

  console.log("clicked")
};

let scrolled = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const handleScroll = () => {
  const scrollOffset = window.scrollY
  scrolled.value = scrollOffset > 0
}
onMounted(() =>{
  window.addEventListener('scroll', handleScroll);
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
const changeLanguage = (language) => {
  selectedLanguage.value = language;
  isDropdownOpen.value = false;
};
const otherLanguages = computed(() => {
  return languages.filter((language) => language !== selectedLanguage.value);
});
const languages = ['GEO','ENG'];
const items = ref([
  {
    label: 'ჩვენს შესახებ',
    to: '/about'
  },
  {
    label: 'პროდუქტები',
    items: [
      {
        label: 'საკაჩე',
        to: '/about-sacace'
      },
      {
        label: 'ენტროჯენი',
        to: '/about-entrogen'
      }
    ]
  },
  {
    label: 'სიახლეები'
  },
  {
    label: 'უკუკავშირი',
    to: '/contact-us'
  }
])
</script>

<template>
    <Menubar :model="items" class="p-menubar" :class="{'scrolled': scrolled}" @click="handleMenuItemClick">
      <template #start>
        <router-link to="/" >
          <img src="@/assets/logo.svg" alt="">
        </router-link>
      </template>
      <template #end>
        <div class="contact_wrapper">
          <div class="contact_sub_wrapper">
            <img src="../assets/phone.svg" alt="">
            <p>(+995) 599 74 00 44</p>
          </div>
          <div class="contact_sub_wrapper">
            <img src="../assets/phone.svg" alt="">
            <p>(+995) 579 22 01 56</p>
          </div>
          <div class="divider"></div>
           <div class="language-picker">
               <div class="selected-language" @click="toggleDropdown">
                 {{ selectedLanguage }}
                 <i class="arrow-icon" :class="isDropdownOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
               <ul class="dropdown-menu" v-if="isDropdownOpen">
                 <li v-for="language in otherLanguages" :key="language" @click="changeLanguage(language)">
                   {{ language }}
                 </li>
               </ul>
           </div>

          </div>
        </div>
      </template>

    </Menubar>

</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
*{
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.p-menubar{
  width: 99%;
  position: fixed;
  left: 8px;
  top: 10px;
  z-index: 5;
  font-family: 'Helvetica Neue', sans-serif;
}
.p-menubar.scrolled{
  background-color: white;
  margin: 0;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
}
.contact_sub_wrapper{
  display: flex;
  align-items: center;
  padding-right: 8px;
}
.contact_wrapper{
  display: flex;
  align-items: center;
}
.divider{
  display: block;
  width: 1px;
  height: 25px;
  background-color: black;
  margin-right: 10px;
}
.language-picker {
  position: relative;
}

.selected-language {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.arrow-icon {
  margin-left: 5px;
}



.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  padding: 0;
  margin: 5px 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f5f5f5;
}
@media (min-width: 200px) and (max-width: 900px){
  .p-menubar{
    width: 100%;
    left: 0;
    top: 0;
  }
  .contact_sub_wrapper{
    display: none;
  }
  .divider{
    display: none;
  }
}
</style>