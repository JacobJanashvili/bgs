<script setup>
import Button from "primevue/button";
import { onMounted, nextTick, onBeforeUnmount } from "vue";
let windowWidth = window.innerWidth

const onResize = () => {
  windowWidth = window.innerWidth
}
onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', onResize)
  })
})
onBeforeUnmount(()=> {
  window.removeEventListener('resize',onResize)
})

</script>

<template>
  <div :class="windowWidth > 900 ? 'hero_card_container' : 'hero_card_container_mobile'">
    <div class="hero_text_container">
      <div class="hero_text">
        <h2 class="hero_text_title">კომპანიის მისია:</h2>
        <p class="hero_text_content">
          სხვადასხვა სახის In Vitro მოლეკულური დიაგნოსტიკის კვლევითი PCR
          ნაკრებების და დნმ/რნმ რეაგენტების შემოტანა საქართველოში
        </p>
      </div>
      <router-link to="/about">
        <Button label="მეტის გაგება" severity="help" class="p-button" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/*noinspection CssUnknownTarget*/
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

* {
  font-family: "Helvetica Neue", sans-serif;
}

.hero_card_container {
  margin-top: 100px;
  background: url("../assets/hero_web.jpg") no-repeat center;
  background-size: cover;
  height: 50vh;
}

.hero_card_container_mobile {
  margin-top: 100px;
  background: url("../assets/mob_hero.jpg") no-repeat center;
  background-size: cover;
  height: 50vh;
}

.hero_text_container {
  width: 475px;
  padding: 80px 0 0 10%;
}

.hero_title {
  margin-bottom: 50px;
}

.hero_text_content {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.918);
  margin-top: 10px;
}

.p-button {
  margin-top: 15%;
}

@media (min-width: 200px) and (max-width: 900px) {
  .hero_card_container {
    background: url("../assets/Hero-mobile-image.jpg") no-repeat center;
  }

  .hero_title {
    font-size: 25px;
  }

  .hero_text_container {
    width: 300px;
    color: #383838;
    margin: 0 auto;
  }

  .hero_text_content {
    color: #383838;
  }

  .p-button {
    width: 90%;
  }
}
</style>
