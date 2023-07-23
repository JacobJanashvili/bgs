<script setup>
import HeroCard from "@/components/HeroCard.vue";
import Button from 'primevue/button';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
<Header/>
<HeroCard/>
  <main>
    <div class="motivator_wrapper">
      <div class="card">
        <img class="card_img" src="../assets/sacace.png" alt="">
        <div class="card_content">
          <h1 class="card_title">საკაცე</h1>
          <div class="card_test_wrapper">
            <p class="card_text">
              SACACE არის ინოვაციური იტალიური კომპანია, რომელიც 2001 წელს დაიწყო ბიოტექნოლოგიის სფეროში აქტიურად საქმეებს. SACACE-ი წარმოადგენს ადაპტირებად 140 მეტ სრულყოფილ კიტს კანის, ვეტერინარიის და საკვები დიაგნოსტიკისთვის, რომელები გაყინულებით შეიყვანება დისტრიბუტორების საშუალებით.
            </p>
          </div>
          <router-link to="/about-sacace">
            <Button label="მეტის გაგება" severity="help" text />
          </router-link>
        </div>
      </div>
      <div class="card">
        <img class="card_img" src="../assets/sacace.png" alt="">
        <div class="card_content">
          <h1 class="card_title">ენტროჯენი</h1>
          <div class="card_test_wrapper">
            <p class="card_text">
              EntroGen, Inc არის ბიოტექნოლოგიური კომპანია, რომელიც ავითარებს ახალ გენოტიპურ ანალიზებს ფარმაკოგენომიკისა და ონკოლოგიის სფეროებში. ჩვენი მისიაა ადვილად გამოსაყენებელი და იაფი გენოტიპირებისა და მუტაციის ანალიზის ანალიზი ლაბორატორიების ხელში ჩაგდება.
            </p>
          </div>
          <Button label="მეტის გაგება" severity="help" text />
        </div>
      </div>
    </div>
    <img class="funnel_img" src="../assets/sixreasons-geo.png" alt="">
    <div class="certificate_wrapper">
      <h2 class="certificate_title">სერტიფიკატები</h2>
      <div class="certificate_subwrapper">
        <img src="@/assets/CERT_2022.png" alt="">
        <img src="@/assets/CERT_2022.png" alt="">
        <img src="@/assets/CERT_2022.png" alt="">
        <img src="@/assets/CERT_2022.png" alt="">
      </div>
    </div>
    <div class="catalog">
      <div class="catalog_wrapper">
        <img src="../assets/catalog_logo.png" alt="">
        <div class="catalog_download_wrapper">
          <h1>კატალოგის გადმოწერა</h1>
          <a href="https://sacace.com/attache/file/catalogue.pdf" download="catalogue">
            <Button label="გადმოწერა" severity="help" outlined />
          </a>
        </div>
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
  align-items: center;
}
.motivator_wrapper{
  margin: 30px 50px;
  display: flex;
  justify-content: center;
}
.card{
  display: flex;
  border: 1px solid rgba(128, 128, 128, 0.38);
  padding: 20px;
  width: 40%;
  margin: 0 50px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 10px;

}
.card_content{
  margin-left: 2%;
}
.card_title{
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 10px;
}
.card_text{
  font-size: 15px;
}

.certificate_wrapper{
  margin-top: 100px;
}
.certificate_subwrapper{
  margin-top: 20px;
}
.catalog{
  width: 90%;
  margin-top: 100px;
  background-color: #FBF5FF;
  height: 200px;
}
.catalog_wrapper img{
  width: 15%;
  -o-object-fit: cover;
  object-fit: cover;
}
.catalog_wrapper{
  margin: -50px 0 0 200px;
  display: flex;
  align-items: center;
}
.catalog_wrapper h1{
  color: #7E00EA;
  margin-bottom: 20px;
}
.catalog_download_wrapper{
  margin-left: 50px;
}
@media (min-width: 200px) and (max-width: 900px){
  .motivator_wrapper{
    flex-direction: column;
  }
  .card{
    flex-direction: column;
    width: 80%;
    margin: 10px 50px;
  }
  .card_title{
    text-align: center;
    margin-top: 10px;
  }
  .card_content{
    text-align: center;
  }
  .funnel_img{
    width: 100%;
  }
  .certificate_wrapper{
    margin-left: 15%;
  }
  .catalog_wrapper{
    margin: 0;
    padding-top: 10%;
    padding-left: 15%;
  }
  .catalog_wrapper img{
    display: none;
  }
}
</style>