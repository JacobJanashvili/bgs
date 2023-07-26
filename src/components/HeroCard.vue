<script setup>
import Button from 'primevue/button';

</script>

<template>
<div class="hero_card_container">
  <div class="hero_text_container">
    <div class="hero_text">
      <p>კომპანიის მისია:</p>
      <ul class="hero_list">
        <li>
          გარეკლამება და დისტრიბუცია IVD, RUO ტესტის სისტემებისა და დნმ/რნმ-ის ექსტრაციის რეაგენტების საქართველოში
        </li>
        <li>
          უზრუნველყოფს სრულყოფილ გამოცდილებებს მოლეკულარულ დიაგნოსტიკის სამინდო რისკის სხევადი სერვისები ხელსაწყოებად (სტდ, ბაკტერიული ინფექციები, ონკოლოგია, მოლეკულური გენეტიკა).
        </li>
      </ul>
    </div>
    <router-link to="/about">
      <Button label="მეტის გაგება" severity="help" class="p-button"/>
    </router-link>
  </div>
</div>

</template>

<style scoped>
/*noinspection CssUnknownTarget*/
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
*{
  font-family: 'Helvetica Neue', sans-serif;
}
.hero_card_container {
  margin-top: 100px;
  background: url("../assets/homebcg.png") no-repeat center;
  background-size: cover;
  height: 50vh;
}
.hero_text_container{
  width: 500px;
  padding: 80px 0 0 10%;
}

.hero_list li{
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0;
}

.p-button{
  margin-top: 5%;
}
@media (min-width: 200px) and (max-width: 900px){

  .hero_text_container{
    width: 300px;
  }
}
</style>