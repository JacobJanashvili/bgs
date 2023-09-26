<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "primevue/button";
import store from "../store";
import router from "../router";
import { onMounted } from "vue";
const entrogenProducts = [
  {
    title: "სწორი ნაწლავის კიბო",
    image: "CRC-Icon.png",
  },
  {
    title: "ფილტვის კიბო",
    image: "Lung-Icon.png",
  },
  {
    title: "გლიობლასტომა",
    image: "GBM-Icon.png",
  },
  {
    title: "Ფარისებრი ჯირკვლის კიბო",
    image: "Thyroid-Icon.png",
  },
  {
    title: "Მკერდის კიბო",
    image: "Breast-Icon.png",
  },
  {
    title: "მელანომა",
    image: "Melanoma-Icon.png",
  },
  {
    title: "GIST",
    description:
      "კუჭ-ნაწლავის სტრომული სიმსივნე (GIST) არის სიმსივნის ტიპი, რომელიც გვხვდება კუჭ-ნაწლავის ტრაქტში, ყველაზე ხშირად კუჭში ან წვრილ ნაწლავში. ითვლება, რომ ამ ტიპის სიმსივნე იზრდება კუჭ-ნაწლავის ტრაქტში ნაპოვნი სპეციალიზებული უჯრედებიდან, რომელსაც ეწოდება Cajal-ის ინტერსტიციული უჯრედები (ICCs) ან ამ უჯრედების წინამორბედები. დაზარალებულ პირებს შეიძლება განუვითარდეთ ერთი ან მეტი სიმსივნე. GIST-ები ჩვეულებრივ გვხვდება 40-დან 70 წლამდე ასაკის მოზრდილებში; იშვიათად, ბავშვებსა და მოზარდებს უვითარდებათ ამ ტიპის სიმსივნე. მცირე სიმსივნეებმა შეიძლება არ გამოიწვიოს ნიშნები ან სიმპტომები. თუმცა, ზოგიერთ ადამიანს GIST-ით შეიძლება ჰქონდეს ტკივილი ან შეშუპება მუცლის არეში (მუცლის), გულისრევა, ღებინება, მადის დაკარგვა ან წონის დაკლება. ზოგჯერ სიმსივნე იწვევს სისხლდენას კუჭ-ნაწლავის ტრაქტში, რამაც შეიძლება გამოიწვიოს სისხლის წითელი უჯრედების რაოდენობის შემცირება (ანემია) და, შესაბამისად, სისუსტე და დაღლილობა. ნაწლავებში სისხლდენამ შეიძლება გამოიწვიოს შავი და ფისოვანი განავალი, ხოლო ყელში ან კუჭში სისხლდენამ შეიძლება გამოიწვიოს სისხლით ღებინება. დაზარალებულ პირებს, რომლებსაც არ აქვთ GIST-ის ოჯახის ისტორია, ჩვეულებრივ აქვთ მხოლოდ ერთი სიმსივნე (ე.წ. სპორადული GIST). ადამიანებს, რომლებსაც აქვთ GIST-ების ოჯახური ისტორია (ე.წ. ოჯახური GIST) ხშირად აქვთ მრავალი სიმსივნე და დამატებითი ნიშნები ან სიმპტომები, მათ შორის კუჭ-ნაწლავის ტრაქტის სხვა უჯრედების არასიმსივნური ჭარბი ზრდა (ჰიპერპლაზია) და მუქი კანის ლაქები სხეულის სხვადასხვა უბანზე. ზოგიერთ დაზარალებულ ადამიანს აქვს კანის დაავადება, რომელსაც ეწოდება ურტიკარია პიგმენტოზა (ასევე ცნობილია როგორც მაკულოპაპულური კანის მასტოციტოზი), რომელიც ხასიათდება მოყავისფრო კანის აწეული ლაქებით, რომლებიც კბენს ან ქავილს შეხებისას. GIST-ის იშვიათი ფორმა, რომელსაც ეწოდება სუქცინატდეჰიდროგენაზას (SDH)-დეფიციტური GIST, ჩნდება ბავშვობაში ან მოზარდობაში და უფრო ხშირად მოქმედებს ქალებზე, ვიდრე მამაკაცებში. ამ ფორმით, სიმსივნე თითქმის ყოველთვის კუჭშია. SDH-დეფიციტური GIST-ის მქონე პირებს აქვთ სხვა ტიპის სიმსივნეების განვითარების მაღალი რისკი, განსაკუთრებით ნერვულ სისტემაში არასიმსივნური სიმსივნეები, რომელსაც ეწოდება პარაგანგლიომა და ფილტვის არასიმსივნური სიმსივნეები, რომელსაც ეწოდება ფილტვის ქონდრომები. როდესაც GIST წარმოიქმნება პარაგანგლიომებთან ერთად, მდგომარეობა ცნობილია როგორც კარნი-სტრატაკისის სინდრომი; GIST-ების, პარაგანგლიომების და ფილტვის ქონდრომის კომბინაცია ცნობილია როგორც კარნის ტრიადა; და GIST-ების და ფილტვის ქონდრომის კომბინაცია ცნობილია როგორც არასრული კარნის ტრიადა.",
    image: "GIST-Icon.png",
  },
  {
    title: "Pan-Cancer პანელები",
    description:
      "Pan-Cancer Panel არის წინასწარ შემუშავებული პანელი მიზანმიმართული განმეორებითი ანალიზისთვის Illumina სისტემის მიერ ამპლიკონის თანმიმდევრობის ტექნოლოგიის გამოყენებით, შექმნილია სომატური ვარიანტების გამოსავლენად და სიმსივნის მუტაციური ტვირთის (TMB) შესაფასებლად სიმსივნის ნიმუშებში. პანელი მოიცავს სულ 516 გენს, რომლებიც დაკავშირებულია სიმსივნის ძირითად ტიპებთან და ინარჩუნებს >96% კორელაციას მთლიან ეგზომების მონაცემთა ნაკრებებთან. CD Genomics იყენებს მიზნობრივი NGS თანმიმდევრობის ტექნოლოგიას, რათა უზრუნველყოს კონკრეტული გენების ან მუტაციების უფრო ეფექტური და ზუსტი დამიზნება და კიბოსთან ასოცირებული გენების დაბალი სიხშირის ვარიაციების აღმოსაჩენად. მიზნობრივი NGS თანმიმდევრობა ხელს უწყობს დიდი რაოდენობით გენების და ნიმუშების თანმიმდევრობას ერთ და ეკონომიურ ანალიზში. CD Genomics გთავაზობთ პან-კიბოს პანელის თანმიმდევრობას და ბიოინფორმატიკის ანალიზს თქვენი კიბოსთან დაკავშირებული კვლევებისთვის.",
    image: "DNA-Icon.png",
  },
];
const handleEntrogenProductClick = (product) => {
  store.commit("setEntrogen", product);
  router.push("/entrogen-component");
};
</script>
<template>
  <Header />
  <div class="entrogen_header">
    <h1 class="entrogen_title">კატეგორიები</h1>
  </div>
  <div class="entrogen_deseases">
    <div v-for="entrogen_desease in entrogenProducts" @click="handleEntrogenProductClick(entrogen_desease)" class="entrogen_desease">
      <img :src="entrogen_desease.image" alt="image" class="entrogen_img" />
      <p class="entrogen_desease_title">{{ entrogen_desease.title }}</p>
    </div>
  </div>
  <div class="catalog">
    <div class="catalog_wrapper">
      <img class="catalog_logo" src="@/assets/ENTROGEN-Brochure-01.png" alt="" />
      <div class="catalog_download_wrapper">
        <h1 class="catalog_title">გაიგეთ მეტი ენტროჯენის შესახებ</h1>
        <a href="http://entrogen.com/web3/products/">
          <Button label="გადასვლა" severity="help" outlined />
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style>
.entrogen_header {
  background: url(@/assets/homebcg.png) no-repeat center;
  width: 100%;
  height: 40vh;
  background-size: cover;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.entrogen_title {
  color: #9732ed;
}
.entrogen_deseases {
  width: 800px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  row-gap: 30px;
}
.entrogen_img {
  width: 80px;
}
.entrogen_desease {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.entrogen_desease_title {
  text-align: center;
  margin-top: 15px;
}
.catalog {
  width: 100%;
  margin: 100px auto;
  background-color: #fbf5ff;
  height: 200px;
}
.catalog_wrapper {
  display: flex;
  align-items: center;
  margin: 0 200px;
}
.catalog_logo {
  width: 200px;
  rotate: 10deg;
}
.catalog_title {
  color: #7e00ea;
  margin-bottom: 20px;
}
.catalog_download_wrapper {
  margin-left: 50px;
}
@media (max-width: 900px) and (min-width: 100px){
  .catalog_logo{
    display: none;
  }
  .catalog_wrapper{
    margin: 0;
    padding: 10px 50px;
  }
  .entrogen_deseases{
    grid-template-columns: repeat(1,1fr);
    width: inherit;
  }
  .entrogen_title{
    font-size: 25px;
  }
  .entrogen_img{
    width: 65px;
  }
  .catalog_title{
    font-size: 19px;
  }
}
</style>
