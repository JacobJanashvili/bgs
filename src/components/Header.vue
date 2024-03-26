<script setup>
import Menubar from 'primevue/menubar';
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import '@fortawesome/fontawesome-free/css/all.css';

const selectedLanguage = ref('GEO'); // Initial language selection
const isDropdownOpen = ref(false);
let burgerMenuClicked = ref(false)
let windowWidth = window.innerWidth
let windowTopScroll = ref(window.scrollY)


onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onResize)
  window.removeEventListener('scroll', onScroll)
})

const onScroll = () => {
  windowTopScroll.value = window.scrollY
}

const onResize = () => {
  windowWidth = window.innerWidth
}


let scrolled = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const handleScroll = () => {
  const scrollOffset = window.scrollY
  scrolled.value = scrollOffset > 0
}
onMounted(() => {
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
const languages = ['GEO'];
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
  // {
  //   label: 'სიახლეები'
  // },
  {
    label: 'კონტაქტი',
    to: '/contact-us'
  }
])
</script>

<template>
  <Menubar v-if="windowWidth > 900" :model="items" class="p-menubar" :class="{ 'scrolled': scrolled }"
    @click="handleMenuItemClick">
    <template #start>
      <router-link to="/">
        <img class="header-logo" src="@/assets/Bgs-home-icon-big.svg" alt="">
      </router-link>
    </template>
    <template #end>
      <div class="contact_wrapper">
        <div class="contact_sub_wrapper">
          <img src="@/assets/phone-icon.svg" alt="">
          <p>(+995) 599 74 00 44</p>
        </div>
        
          <!-- <div class="selected-language">
            {{ selectedLanguage }}
          </div> -->
      </div>
    </template>
  </Menubar>
  <div v-if="windowWidth < 900" class="mobile-menu"
    :style="{ backgroundColor: windowTopScroll > 0 ? 'white' : 'transparent' }">
    <div class="hamburger-menu" @click="burgerMenuClicked = !burgerMenuClicked">
      <div class="top"
        :style="{ rotate: burgerMenuClicked ? '45deg' : '', width: burgerMenuClicked ? '16.97056274844px' : '21px', }">
      </div>
      <div class="middle" :style="{ opacity: burgerMenuClicked ? 0 : 1, width: burgerMenuClicked ? 0 : '21px' }"></div>
      <div class="bottom"
        :style="{ rotate: burgerMenuClicked ? '-45deg' : '', width: burgerMenuClicked ? '16.97056274844px' : '21px', translate: burgerMenuClicked ? '0 1px' : '' }">
      </div>
    </div>
    <img class="mobile-menu-home_logo" src="/Bgs-home-icon.svg" @click="$router.push('/')" alt="">
    <p class="mobile-menu-language">GEO</p>
  </div>
  <div class="mobile-menu-popup" v-if="windowWidth < 900"
    :style="{ opacity: burgerMenuClicked ? 1 : 0, zIndex: burgerMenuClicked ? 6 : -1 }">
    <div class="mobile-menu-popup-items">
      <router-link class="mobile-menu-popup-item" to="/about">ჩვენ შესახებ</router-link>
      <router-link class="mobile-menu-popup-item" to="/about-sacace">საკაჩე</router-link>
      <router-link class="mobile-menu-popup-item" to="/about-entrogen">ენტროჯენი</router-link>
      <router-link class="mobile-menu-popup-item" to="/contact-us">უკუკავშირი</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.header-logo {
  margin-left: 92px;
}

.hamburger-menu .top,
.hamburger-menu .middle,
.hamburger-menu .bottom {
  width: 21px;
  height: 2px;
  margin: 3px 0;
  background-color: #8D00EF;
  transition: opacity 200ms ease-in-out, width 200ms ease-in-out, rotate 200ms ease-in-out, translate 200ms ease-in-out;
  transform-origin: left center;
}

.hamburger-menu .top {
  transform: translate(50% -100%);
}

.hamburger-menu {
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
}

.mobile-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 5;
  border: 1px solid #CFCFCF;
}



.mobile-menu-language {
  margin-top: 10px;
  margin-right: 21px;
}

.mobile-menu-popup {
  margin-top: 99px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 6;
  transition: 200ms ease-in-out;
}

.mobile-menu-popup-items {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.mobile-menu-popup-item {
  text-decoration: none;
  color: black;
  font-size: 28px;
  font-weight: 500;
  margin: 24px 0;
}

.mobile-menu-home_logo {
  margin-top: 10px;
}

.p-menubar {
  position: fixed;
  width: 99%;
  left: 8px;
  top: 10px;
  z-index: 5;
  font-family: 'Helvetica Neue', sans-serif;
}

.p-menubar.scrolled {
  background-color: white;
  margin: 0;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
}

:deep(.p-menubar-root-list) {
  position: fixed;
  left: 38%;
}

:deep(.p-menuitem-content) {
  margin: auto;
}

.contact_sub_wrapper {
  display: flex;
  align-items: center;
  padding-right: 16px;
}

.contact_sub_wrapper img {
  margin-right: 6px;
}

.contact_wrapper {
  display: flex;
  align-items: center;
}

.divider {
  display: block;
  width: 1px;
  height: 25px;
  background-color: black;
  margin-right: 16px;
}

.language-picker {
  position: relative;
}

.selected-language {
  display: flex;
  align-items: center;

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

@media (min-width: 200px) and (max-width: 900px) {

  .p-menubar {
    width: 100%;
    left: 0;
    top: 0;
  }

  .contact_sub_wrapper {
    display: none;
  }

  .divider {
    display: none;
  }
}

@media (min-width: 1000px) and (max-width: 1600px) {
  :deep(.p-menubar-root-list) {
    left: 20%;
  }

  .header-logo {
    margin-left: 10%;
  }
}
</style>