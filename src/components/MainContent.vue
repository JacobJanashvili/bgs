<script setup>
import HeroCard from "@/components/HeroCard.vue";
import Button from "primevue/button";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import EntrogenPDf from "@/assets/ENTROGEN-Brochure.pdf"
import { onMounted, nextTick } from "vue"
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
    <img class="funnel_img" src="../assets/sixreasons-en.png" alt="" />
    <div class="home_catalog_wrapper">
      <div class="home_catalog">
        <img src="@/assets/Home-catalog-image.jpg" alt="">
        <div class="home_download_wrapper">
          <h1 class="download_title">
            გადმოიწერეთ ჩვენი კატეგორია
          </h1>
          <p class="download_description">
            იხილეთ ყველა ტიპის მოლეკულური დიაგნოსტიკის ნაკრები
            და ინსტრუმენტები ჩვენს კატალოგში
          </p>
          <a :href="EntrogenPDf" download>
            <Button label="გადმოწერა" class="download-btn"></Button>
          </a>
        </div>
      </div>
    </div>
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
  justify-content: center;
}

.card {
  display: flex;
  border: 1px solid #CFCFCF;
  width: 620px;
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
  margin-top: 65px;
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
  margin-top: 80px;
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
  object-fit: cover;
  margin-top: 80px;
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
  }

  .card {
    flex-direction: column;
    width: 90%;
    margin: 20px;
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
    margin: 0 auto;
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
</style>
