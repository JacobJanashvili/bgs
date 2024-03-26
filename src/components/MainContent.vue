<script setup>
import HeroCard from "@/components/HeroCard.vue";
import Button from "primevue/button";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import EntrogenPDf from "@/assets/ENTROGEN-Brochure.pdf"
import { onMounted, nextTick } from "vue"
import CallPhoneButton from "./CallPhoneButton.vue";
let windowWidth = window.innerWidth

const onResize = () => {
  windowWidth = window.innerWidth
}
onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', onResize)

  })
})


const productDescriptionlist = [
  {
    title: "საკაჩე",
    img: "Sacace-homepage.jpg",
    description: "SACACE BioTechnologies (იტალია) ავითარებს, აწარმოებს და რეალიზაციას უწევს 140-ზე მეტი დასახელების სრულ ნაკრებს ადამიანის დაავადებების, ვეტერინარული და საკვების ხარისიხის დიაგნოსტიკის მიზნით...",
    link: "/about-sacace"
  },
  {
    title: "ენტროჯენი",
    img: "Entrogen-homepage.jpg",
    description: "EntroGen (აშშ) გთავაზობთ კომპლექსურ გადაწყვეტილებებს ონკოლოგიური და ჰემატოლოგიური დაავადებების მოლეკულური დიაგნოსტიკის სფეროში...",
    link: "/about-entrogen"
  }
]
const certificateList = [
  "Certificate-1.jpg",
  "Certificate-2.jpg",
  "Certificate-1.jpg",
  "Certificate-2.jpg",
  "Certificate-1.jpg",
  "Certificate-2.jpg",
  "Certificate-1.jpg",
  "Certificate-2.jpg",
]
</script>
<template>
  <Header />
  <HeroCard />
  <main>
    <div class="motivator_wrapper">
      <div class="card" v-for="card in productDescriptionlist">
        <img class="card_img" :src="card.img" alt="" />
        <div class="card_content">
          <h1 class="card_title">{{ card.title }}</h1>
          <div class="card_test_wrapper">
            <p class="card_text">
              {{ card.description }}
            </p>
          </div>
          <router-link :to="card.link" class="product-link-active">
            <div class="product-list-button">
              <p>ყველა პროდუქტი</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <img class="funnel_img" src="../assets/6-reason.jpg" alt="" />
    <div v-if="windowWidth > 900" class="certificate_wrapper">
      <h2 class="certificate_title">სერტიფიკატები</h2>
      <div class="certificate_subwrapper">
        <img src="/Certificate-1.jpg" alt="">
        <img src="/Certificate-2.jpg" alt="">
        <img src="/Certificate-1.jpg" alt="">
        <img src="/Certificate-2.jpg" alt="">
      </div>
    </div>
  </main>
  <CallPhoneButton v-if="windowWidth < 900"/>
  <Footer />
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

* {
  font-family: "Helvetica Neue", sans-serif;
}

.product-link-active {
  text-decoration: none;
  color: #383838;
}

.product-list-button {
  position: absolute;
  right: 20px;
  bottom: 22px;
}

.product-list-button::after {
  content: '';
  width: 100%;
  height: 2px;
  display: block;
  background-image: linear-gradient(to right top, #be00fe, #9f00f3, #7f00e8, #5a00dc, #2800d0);
  margin-top: 5px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.motivator_wrapper {
  margin: 40px 50px;
  display: flex;
  width: 100%;
  justify-content: center;
}

.card {
  display: flex;
  border: 1px solid #CFCFCF;
  width: 43vw;
  margin: 0 16px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 10px;
  position: relative;
  padding: 20px;
}

.card_content {
  padding-left: 16px;

}

.card_title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
}

.card_text {
  font-size: 16px;
  text-align: left;
  margin-top: 20px;
}

.card_img {
  margin: auto;
}

.certificate_wrapper {
  margin-bottom: 40px;
}

.certificate_subwrapper {
  margin-top: 45px;
}

.certificate_subwrapper img {
  display: inline-block;
  margin-right: 16px;
}

.catalog {
  width: 90%;
  margin-top: 100px;
  background-color: #fbf5ff;
  height: 200px;
}

.catalog_wrapper img {
  width: 15%;
  -o-object-fit: cover;
  object-fit: cover;
}

.catalog_wrapper {
  margin: -50px 0 0 200px;
  display: flex;
  align-items: center;
}

.catalog_wrapper h1 {
  color: #7e00ea;
  margin-bottom: 20px;
}

.catalog_download_wrapper {
  margin-left: 50px;
}

.home_catalog_wrapper {
  width: 100%;
  height: 283px;
  background: linear-gradient(92.45deg, #FBF5FF -3.7%, #FBF5FF 109.09%);
  position: relative;
}

.home_catalog {
  display: flex;
  align-items: center;
  margin-left: 102px;
  position: absolute;
  bottom: 0;
}

.home_download_wrapper {
  margin: 0 65px;
}

.download_description {
  margin: 20px 0;
}

.download_title {
  font-size: 28px;
  font-weight: 500;
  color: #7E00EA;
}

.funnel_img {
  width: 50%;
  object-fit: cover;
  margin: 80px auto;
}

.p-button {

  margin-right: 20px;
  margin-bottom: 22px;
}

.download-btn {
  position: absolute;
  bottom: 0;
  font-size: 18px;
  width: 155px;
}

@media (min-width: 100px) and (max-width: 900px) {
  .motivator_wrapper {
    flex-direction: column;
    margin: 20px auto;
  }

  .card {
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
  }

  .card_img {
    margin: 0;
  }

  .card_title {
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
  }

  .card_text {
    margin-top: 10px;
    font-size: 16px;
    text-align: left;
  }

  .product-list-button {
    position: static;
    padding-top: 16px;
  }

  .card_content {
    text-align: center;
  }

  .funnel_img {
    width: 100%;
    height: auto;
  }

  .home_catalog_wrapper {
    width: 100%;
    height: 483px;
    margin-left: auto;
    bottom: auto;
  }

  .home_catalog {
    margin-left: auto;
    flex-direction: column;
  }

  .home_catalog img {
    width: 90%;
  }

  .home_download_wrapper {
    margin: 25px 20px;
  }

  .download_description {
    margin-top: 16px;

  }

  .download-btn {
    position: static;
    width: 100%;
    margin-top: 32px;
  }

  .certificate_wrapper {
    margin-left: 15%;
  }

  .certificate_title {
    font-size: 20px;
  }

  .catalog_wrapper {
    margin: 0;
    padding-top: 10%;
    padding-left: 15%;
  }

  .catalog_wrapper img {
    display: none;
  }

  .catalog_download_wrapper h1 {
    font-size: 25px;
  }
}

@media (min-width: 1000px) and (max-width: 1600px) {
  .card_img {
    object-fit: cover;
    object-position: 0;
    margin: 0;
  }

  .card_test_wrapper {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  .certificate_wrapper {
    margin-bottom: 40px;
    text-align: center;
  }

  .certificate_title {
    text-align: left;
    margin-left: 10%;
  }

  .certificate_subwrapper img {
    width: 20%;
  }
}
</style>
