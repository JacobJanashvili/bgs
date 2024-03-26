<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, nextTick, onBeforeUnmount } from "vue"
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
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <Header />
  <div class="about_header">
    <h1>ჩვენს შესახებ</h1>
  </div>
  <div class="about_us_wrapper" v-if="windowWidth > 900">
    <div class="about_us_img">
      <img src="/About-us.jpg" alt="">
    </div>
    <div class="about_us_text">
      <h1 class="about_us_title">Bio-gen Science</h1>
      <p>კომპანია ბი-ჯი-ეს ახორციელებს სხვადასხვა სახის IN VITRO მოლეკულური დიაგნოსტიკის, კვლევითი PCR ნაკრეებების და
        დნმ/რნმ რეაგენტების შემოტანას საქართველოში მსოფლიოს წამყვანი ბრენდებისგან როგორებიცაა <strong>SACACE</strong> და
        <strong>ENTROGEN.</strong>
      </p>
      <p>ჩვენი კომპანია ეხმარება კლინიკებს ჩვენს მიერ მიწოდებული ტესტების აწყობაში და/ან თავად ვაწარმოებთ კვლევებს ჩვენს
        ლაბორატორიაში მოთხოვნის შესაბამისად.
        ჩვენს მიერ შემოთავაზებული ნაკრებების უპირატესობა მათ მულტიპლექსურობაში მდგომარეობს და გამოიყენება სხვადასხვა
        კომბინაციით, მათ შორის პათოგენური ინფექციების შემთხვევაშიც.
      </p>
      <p>
        ყველა რეაგენტი CE მარკირებულია 98/79 EC დირექტივების შესაბამისად. ამასთანავე, პროდუქტის შექმნისა წარმოების ყველა
        ეტაპი ხორციელდება ISO 13485:2016 ხარისხის მართვის სისტემის მოთხოვნის მიხედვით.

      </p>
    </div>
  </div>
  <div class="about_us_mobile_wrapper" v-if="windowWidth < 900">
    <h1 class="about_us_mobile_title">Bio-gen Science</h1>
    <p>
      კომპანია ბი-ჯი-ეს ახორციელებს სხვადასხვა სახის IN VITRO მოლეკულური დიაგნოსტიკის, კვლევითი PCR ნაკრეებების და
      დნმ/რნმ რეაგენტების შემოტანას საქართველოში მსოფლიოს წამყვანი ბრენდებისგან როგორებიცაა
      <strong>SACACE</strong> და
      <strong>ENTROGEN.</strong>
    </p>
    <div class="about_us_mobile_img">
      <img src="/About-us.jpg" alt="">
    </div>
    <p>
      ჩვენი კომპანია ეხმარება კლინიკებს ჩვენს მიერ მიწოდებული ტესტების აწყობაში და/ან თავად ვაწარმოებთ კვლევებს ჩვენს
      ლაბორატორიაში მოთხოვნის შესაბამისად.
      ჩვენს მიერ შემოთავაზებული ნაკრებების უპირატესობა მათ მულტიპლექსურობაში მდგომარეობს და გამოიყენება სხვადასხვა
      კომბინაციით, მათ შორის პათოგენური ინფექციების შემთხვევაშიც.
    </p>
    <p>
      ყველა რეაგენტი CE მარკირებულია 98/79 EC დირექტივების შესაბამისად. ამასთანავე, პროდუქტის შექმნისა წარმოების ყველა
      ეტაპი ხორციელდება ISO 13485:2016 ხარისხის მართვის სისტემის მოთხოვნის მიხედვით.
    </p>
  </div>
  <CallPhoneButton v-if="windowWidth < 900" />
  <Footer />
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

* {
  font-family: "Helvetica Neue", sans-serif;
}

.about_header {
  background: url("../assets/homebcg.png") no-repeat center;
  width: 100%;
  height: 40vh;
  -webkit-background-size: cover;
  background-size: cover;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about_header h1 {
  color: #BE00FE;
  font-size: 28px;
  font-weight: 500;
}

.about_header h1::after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #BE00FE;
  display: block;
  margin-top: 8px;
}

.about_us_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 60px;
}

.about_us_img {
  padding: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
}

.about_us_text {
  margin-left: 17px;
}

.about_us_text p {
  width: 620px;
  line-height: 25.84px;
  margin-top: 20px;
}

.about_us_title {
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 500;
  color: #383838;
}
.about_us_mobile_title{
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
  color: #383838;
}
.about_us_mobile_wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
}
.about_us_mobile_wrapper p{
  font-size: 16px;
  margin-top: 20px;
  line-height: 25.84px;
}
.about_us_mobile_img{
  padding: 12px;
  border: 1px solid #CFCFCF;
  margin-top: 14px;
  border-radius: 10px;
}
.about_us_mobile_img img{
  width: 100%;
}
@media (min-width: 1000px) and (max-width: 1600px){
  .about_us_wrapper{
    margin-bottom: 40px;
  }
}
</style>
