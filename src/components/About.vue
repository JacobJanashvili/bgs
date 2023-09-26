<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <div class="about_header">
    <h1>ჩვენს შესახებ</h1>
  </div>
  <div class="about_content">
    <img src="@/assets/Rectangle68@2x.png" alt="" />
    <div class="about_content_text_wrapper">
      <div class="about_content_text">
        <p>
          კომპანია ბი-ჯი-ეს ახორციელებს სხვადასხვა სახის IN VITRO მოლეკულური
          დიაგნოსტიკის, კვლევითი PCR ნაკრებების და დნმ/რნმ რეაგენტების შემოტანას
          საქართველოში. ვეხმარებით კლინიკებს ჩვენს მიერ მიწოდებული ტესტების
          აწყობაში. ჩვენს მიერ შემოთავაზებული ნაკრებების უპირატესობა მათ
          მულტიპლექსურობაში მდგომარეობს და გამოიყენება სხვადასხვა კომბინაციით,
          მათ შორის პათოგენური ინფექციების შემთხვევაშიც. ყველა რეაგენტი CE
          მარკირებულია 98/79 EC დირექტივების შესაბამისად.ამასთანავე,პროდუქტის
          შექმნისა და წარმოების თითოეული ეტაპი ხორციელდება ISO 13485:2016
          ხარისხის მართვის სისტემის მოთხოვნის მიხედვით.
        </p>
      </div>
    </div>
  </div>
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
  color: #9732ed;
}
.about_content {
  display: flex;
  width: 80%;
  margin: 100px 10%;
}
.about_content img {
  width: 300px;
  -o-object-fit: cover;
  object-fit: cover;
}
.about_content_text_wrapper h1 {
  text-transform: uppercase;
}
.about_content_text_wrapper {
  margin-left: 50px;
}
.about_content_text {
  width: 800px;
  margin-top: 20px;
  line-height: 30px;
  font-weight: 300;
}

@media (min-width: 200px) and (max-width: 900px) {
  .about_content {
    flex-direction: column;
  }
  .about_content_text_wrapper h1 {
    margin-top: 10px;
  }
  .about_content {
    margin: 50px 10%;
  }
  .about_content_text {
    width: inherit;
    font-size: 15px;
  }
  .about_content_text_wrapper h1 {
    font-size: 24px;
  }
  .about_header h1{
    font-size: 20px;
  }
}
</style>
