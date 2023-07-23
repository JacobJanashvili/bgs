<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
<Header/>
  <div class="about_header">
    <h1>ჩვენს შესახებ</h1>
  </div>
  <div class="about_content">
    <img src="../assets/Rectangle68@2x.png" alt="">
    <div class="about_content_text_wrapper">
      <h1>bio-gen-science</h1>
      <div class="about_content_text">
        <p>კოპანია ბი-ჯი-ეს ახორციელებს სხვადასხვა სახის IN VITRO  მოლეკულური დიაგნოსტიკის,კვლევითი PCR ნაკრეებების და დნმ/რნმ რეაგენტების შემოტანას საქართველოში მსოფლიოს წამყვანი ბრენდებისგან როგორებიცაა SACACE  და ENTROGEN.
          <br>
          <br>
          ჩვენი კომპანია ეხმარება  კლინიკებს ჩვენს მიერ მიწოდებული ტესტების აწყობაში და/ან თავად ვაწარმოებთ კვლევებს ჩვენს ლაბორატორიაში მოთხოვნის შესაბამისად.
          <br>
          <br>
          ჩვენს მიერ შემოთავაზებული ნაკრებების უპირატესობა მათ მულტიპლექსურობაში მდგომარეობს და გამოიყენება სხვადასხვა კომბინაციით,მათ შორის პათოგენური ინფექციების შემთხვევაშიც.
          <br>
          <br>
          ყველა რეაგენტი CE მარკირებულია 98/79 EC  დირექტივების შესაბამისად.ამასთანავე,პროდუქტის შექმნისა  წარმოების ყველა ეტაპი ხორციელდება ISO 13485:2016 ხარისხის მართვის სისტემის მოთხოვნის მიხედვით.</p>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
*{
  font-family: 'Helvetica Neue', sans-serif;
}
.about_header{
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
.about_header h1{
  color: #9732ED;
}
.about_content{
  display: flex;
  width: 80%;
  margin: 100px 10%;
}
.about_content img{
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.about_content_text_wrapper h1{
  text-transform: uppercase;
}
.about_content_text_wrapper{
  margin-left: 50px;
}
.about_content_text{
  margin-top: 20px;
  line-height: 20px;
}
.about_content_text p{
  letter-spacing: 1px;
}
@media (min-width: 200px) and (max-width: 900px){
  .about_content{
    flex-direction: column;
  }
  .about_content_text_wrapper h1{
    margin-top: 10px;
  }
  .about_content{
    margin: 50px 10%
  }
}
</style>