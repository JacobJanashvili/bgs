<script setup>
import Button from "primevue/button";
</script>

<template>
  <div class="hero_card_container">
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
  background: url("../assets/homebcg.png") no-repeat center;
  background-size: cover;
  height: 50vh;
}
.hero_text_container {
  width: 500px;
  padding: 150px 0 0 10%;
}
.hero_title {
  margin-bottom: 50px;
}
.hero_text_content {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.918);
  margin-top: 10px;
}

.p-button {
  margin-top: 5%;
}
@media (min-width: 200px) and (max-width: 900px) {
  .hero_title {
    font-size: 25px;
  }
  .hero_text_container {
    width: 300px;
  }
}
</style>
