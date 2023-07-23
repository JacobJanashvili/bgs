<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
<Header/>
<main>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.212686701179!2d44.803548776407155!3d41.69434407689869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ce54934825b%3A0x6bfe055998492eef!2s10%20Chakhrukhadze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1690107898126!5m2!1sen!2sge" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <div class="contact_wrapper">
    <div class="phone_wrapper">
      <img class="phone" src="src/components/icons/phone.svg" alt="">
      <p>(+995) 598-824-818</p>
    </div>
    <div class="mail_wrapper">
      <img src="src/components/icons/mail.svg" alt="">
      <p>info@bgs.ge</p>
    </div>
  </div>
</main>
<Footer/>
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
*{
  font-family: 'Helvetica Neue', sans-serif;
}
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.contact_wrapper{
  margin-top: 50px;
  display: flex;
  align-items: center;
}
.mail_wrapper{
  display: flex;
  align-items: center;
}
.phone_wrapper{
  display: flex;
  align-items: center;
  margin-right: 50px;
}
</style>