<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.442599078441!2d44.77759377641038!3d41.775674171820505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d948666f0db%3A0xba7869c8145fa297!2s76%20Akaki%20Beliashvili%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1694358665832!5m2!1sen!2sge"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="contact_wrapper">
      <div class="phone_wrapper">
        <img class="phone" src="../assets/phone.svg" alt="" />
        <p>(+995) 579 22 01 56</p>
      </div>
      <div class="phone_wrapper">
        <img class="phone" src="../assets/phone.svg" alt="" />
        <p>(+995) 599 74 00 44</p>
      </div>
      <div class="mail_wrapper">
        <img class="mail" src="../assets/mail.svg" alt="" />
        <p>info@bgs.ge</p>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
* {
  font-family: "Helvetica Neue", sans-serif;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.contact_wrapper {
  margin-top: 50px;
  display: flex;
  align-items: center;
}
.mail_wrapper {
  display: flex;
  align-items: center;
}
.phone_wrapper {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
.phone {
  margin-right: 5px;
}
.mail {
  margin-right: 5px;
}
</style>
