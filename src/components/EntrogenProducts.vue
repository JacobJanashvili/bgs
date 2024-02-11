<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "primevue/button";
import store from "../store";
import router from "../router";
import { onMounted, nextTick, onBeforeUnmount } from "vue"
import EntrogenPDf from "@/assets/ENTROGEN-Brochure.pdf"

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
const entrogenProducts = [
  {
    title: "სწორი ნაწლავის კიბო",
    image: "CRC-Icon.png",
    description: "სწორი ნაწლავის კიბო წარმაოდგენს ავთვისებიანი სიმსივნის ფორმას, რომელიც ყალიბდება სწორი ნაწლავის კედლის უჯრედებში. სწორი ნაწლავი მსხვილი ნაწლავის უკანასკნელ ნაწილს წარმოადგენს. სწორი ნაწლავის კიბო ხშირად შეჰყავთ კოლინჯის კიბოს კატეგორიაში. ერთად მათ კოლორექტალურ კიბოს უწოდებენ. სწორი ნაწლავის სიმსივნე უმეტესად ყალიბდება სწორი ნაწლავის ამომფენი გარსის კედლებში. სწორი ნაწლავის სიმსივნე, როგორც წესი, პრეკანცერული პოლიპების გადაგვარების შედეგად ყალიბდება. კოლორექტალური კიბოს დასადგენად ჩატარებული ტესტები ხელს უწყობს სიმსივნის ადრეულ ეტაპებზე აღმოჩენას, როდესაც მისგან სრულიად განკურნებაა შესაძლებელი. სწორი ნაწლავის კიბოს მკურნალობა, ხშირად, მოიცავს ქირურგიულ ჩარევას სიმსივნის ამოსაკვეთად. სხვა სამკურნალო საშუალებები, როგორიცაა ქიმიოთერაპია და სხივური თერაპია, რიგ შემთხვევებში საჭირო ხდება."
  },
  {
    title: "ფილტვის კიბო",
    image: "Lung-Icon.png",
    description: "ფილტვის კიბო ეწოდება ისეთ ავთვისებიან სიმსივნეს, რომელიც ფილტვებში იწყება. ფილტვი წყვილი ორგანოა, მდებარეობს გულმკერდის ღრუში, მონაწილეობს ჟანგბადის მიმოცვლასა და ნახშირბადის დიოქსიდის გამოყოფაში. ფილტვის კიბო ზოგადად კიბოთი გარდაცვალების შემთხვევათა უმეტესობაზეა პასუხისმგებელი როგორც კაცებში, ასევე ქალებში. ფილტვის კიბოთი მეტი ადამიანი კვდება ყოველწლიურად, ვიდრე ნაწლავის, წინამდებარე ჯირკვლის, საკვერცხის, ძუძუს კიბოთი ერთად. ფილტვის კიბოს განვითარების ყველაზე მაღალი რისკი მწეველებშია. ფილტვის კიბოს რისკი მატულობს მოწევის ხანგრძლივობასა და თამბაქოს რაოდენობასთან ერთად. თუ თავს დაანებებთ მოწევას, მრავალწლიანი სტაჟის შემდეგაც კი, მნიშვნელოვნად შეგიმცირდებათ კიბოს რისკი."
  },
  {
    title: "გლიობლასტომა",
    image: "GBM-Icon.png",
    description: "გლიომა არის სიმსივნე, რომელიც გვხვდება ტვინსა და ზურგის ტვინში. გლიომა იწყება წებოვან დამხმარე უჯრედებში (გლიური უჯრედები) რომლებიც ნერვული უჯრედების გარშემოა და ეხმარეთ მათ ფუნქციონირებაში. გლიომები ზეგავლენას ახდენენ ტვინის მუშაობაზე და შეიძლება სიცოცხლისთვის საშიშებიც იყვნენ. ეს დამოკდებულია მათ ადგილმდებარეობისა და ზრდის სიჩქარეზე. "
  },
  {
    title: "Ფარისებრი ჯირკვლის კიბო",
    image: "Thyroid-Icon.png",
    description: "ფარისებრი ჯირკვლის სიმსივნე წარმოიქმნება ფარისებრ ჯირკვალში, რომელის არის პეპლის ფორმის ჯირკვალი და მდებარეობს ფარისებრი ხრტილის ქვეშ. ფარისებრი ჯირკვალი წარმოქმნის ჰორმონებს, რომლებიც არეგულირებენ გულისცემის სისწრაფეს, სისხლის წნევას, სხეულის ტემპერატურას და წონას. ფარისებრი ჯირკვლის სიმსივნე ხშირი არაა ა.შ.შ-ში, თუმცა შემთხვევათა რაოდენობა იზრდება. ექიმების ვარაუდით ეს იმის ბრალია, რომ თანამედროვე ტექნოლოგია საშუალებას გვაძლევს აღმოვაჩინოთ ძალიან პატარა ზომის სიმსივნეები, რაც ადრე შეუძლებელი იყო. ფარისებრი ჯირკვლის სიმსივნეების უმეტესობა მკურნალობის შედეგად განკურნებადია."
  },
  {
    title: "Მკერდის კიბო",
    image: "Breast-Icon.png",
    description: ""
  },
  {
    title: "მელანომა",
    image: "Melanoma-Icon.png",
    description: "მელანომა კანის ყველაზე აგრესიული კიბოა და მელანინის მასინთეზირებელ უჯრედებში–მელანოციტებში იწყება. მელანინი პიგმენტია, რომელიც კანს შეფერილობას ანიჭებს. მელანომის განვითარება შესაძლებელია თვალებში და იშვიათად, შინაგან ორგანოებში, როგორიცაა ნაწლავები. მელანომის ზუსტი მიზეზი უცნობია, მაგრამ ულტრაიისფერი სხივების ზეგავლენა მზის ან სოლარიუმის პირობებში ზრდის ამ კიბოს განვითარების რისკს. დასხივების შემცირებით თქვენ ამცირებთ მელანომის განვითარების შანსებს. მელანომის რისკი იზრდება 40 წლის ზემოთ ასაკში, განსაკუთრებით ქალებში. კანის კიბოს გამაფრთხილებელი ნიშნების ცოდნა დაგეხმარებათ ადრეულ დიაგნოზსა და მკურნალობაში, სანამ კიბო გავრცელდება. მელანომის მკურნალობა შესაძლებელია, თუ კიბოს დიაგნოზი დროულად დაისვა."
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
    <h1 class="entrogen_title">ენტროჯენი</h1>
  </div>
  <div class="about_entrogen_wrapper" v-if="windowWidth > 900">
    <div class="about_entrogen">
      <img src="/Entrogen-aboutpage-img.jpg" alt="">
    </div>
    <div class="about_entrogen_text">
      <div class="about_entrogen_title">ენტროჯენი</div>
      <p>
        <strong>EntroGen</strong>
        არის ბიოტექნოლოგიური კომპანია, რომელიც ფოკუსირებულია მოლეკულურ სადიაგნოსტიკო პროდუქტებზე
        ჰემატოლოგიისა და
        ონკოლოგიის სფეროებში. EntroGen-ს აქვს რეალურ დროში PCR-ზე დაფუძნებული ტესტების მზარდი კომერციული პორტფელი, რომლის
        მრავალი პროდუქტი გამოიყენება სხვადასხვა ავთვისებიანი სიმსივნეების მიზანმიმართული თერაპიის სახელმძღვანელოდ და
        მონიტორინგისთვის. EntroGen-ის კვალი აღწევს მსოფლიოს ყველა კუთხეს და უზრუნველყოფს საიმედო კლინიკურ და კვლევით
        პროდუქტებს.
      </p>
    </div>
  </div>
  <div class="entrogen_deseases">
    <div v-for="entrogen_desease in entrogenProducts" @click="handleEntrogenProductClick(entrogen_desease)"
      class="entrogen_desease">
      <div class="entrogen_desease_subwrapper">
        <img :src="entrogen_desease.image" alt="image" class="entrogen_img" />
        <p class="entrogen_desease_title">{{ entrogen_desease.title }}</p>
      </div>
      <p class="entrogen_desease_description">{{ entrogen_desease.description }}</p>
    </div>
  </div>
  <div class="entrogen_catalog_wrapper">
    <div class="entrogen_catalog">
      <img src="@/assets/Home-catalog-image.jpg" alt="">
      <div class="entrogen_download_wrapper">
        <h1 class="download_title">
          გადმოიწერეთ ჩვენი კატეგორია
        </h1>
        <p class="download_description">
          იხილეთ ყველა ტიპის მოლეკულური დიაგნოსტიკის ნაკრები
          და ინსტრუმენტები ჩვენს კატალოგში
        </p>
        <a :href="EntrogenPDf" target="_blank" download>
          <Button label="გადმოწერა" class="download-btn"></Button>
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style>
.about_entrogen_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.about_entrogen {
  padding: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
}

.about_entrogen_title {
  font-size: 36px;
  color: #383838;
}

.about_entrogen_text {
  margin-left: 17px;
}

.about_entrogen_text p {
  margin-top: 20px;
  font-size: 16px;
  word-wrap: break-word;
  width: 620px;
  line-height: 25.84px;
}

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
  color: #BE00FE;
}

.entrogen_title::after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #BE00FE;
  display: block;
  margin-top: 8px;
}

.entrogen_deseases {
  width: 800px;
  margin-top: 60px;
  margin-left: 15%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 30px;
}

.entrogen_img {
  width: 80px;
}

.entrogen_desease {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
  width: 302px;
  height: 249px;
}

.entrogen_desease_subwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.entrogen_desease_title {
  margin-left: 11px;
  font-weight: 700;
  font-size: 16px;
}

.entrogen_desease_description {
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  margin-top: 20px;
  line-height: 22.61px;
}

.entrogen_catalog_wrapper {
  width: 100%;
  height: 283px;
  background: linear-gradient(92.45deg, #FBF5FF -3.7%, #FBF5FF 109.09%);
  margin-top: 93px;
  position: relative;
}

.entrogen_catalog {
  display: flex;
  align-items: center;
  margin-left: 103px;
  position: absolute;
  bottom: 0;
}

.entrogen_download_wrapper {
  margin: 0 65px;
}

.download_title {
  font-size: 26px;
  font-weight: 500;
  color: #7E00EA;
}

.download_description {
  margin: 20px 0;
}

.download-btn {
  position: absolute;
  font-size: 18px;
  width: 155px;
  bottom: 0;
}

@media (max-width: 900px) and (min-width: 100px) {
  .catalog_logo {
    display: none;
  }

  .catalog_wrapper {
    margin: 0;
    padding: 10px 50px;
  }

  .entrogen_deseases {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    column-gap: 20px;
    row-gap: 20px;
    margin: 27px 20px;
  }

  .entrogen_desease {
    width: 184px;
    height: 343px;
    padding: 10px;
  }

  .entrogen_desease_subwrapper {
    flex-direction: column;
  }

  .entrogen_desease_description {
    -webkit-line-clamp: 5;
    line-height: 22.61px;
  }

  .entrogen_desease_title {
    font-size: 16px;
    font-weight: 700;
    margin-top: 3px;
  }

  .entrogen_title {
    font-size: 25px;
  }

  .entrogen_img {
    width: 65px;
  }

  .entrogen_catalog_wrapper {
    margin-top: 55%;
  }

  .entrogen_catalog {
    margin-left: auto;
    flex-direction: column;
  }

  .entrogen_catalog img {
    width: 90%;
  }

  .entrogen_download_wrapper {
    margin: 25px 20px;
  }

  .download_title {
    font-size: 28px;
    font-weight: 500;
    color: #7E00EA;
  }

  .download_description {
    margin-top: 16px;
  }

  .download-btn {
    position: static;
    width: 100%;
    margin-top: 32px;
  }
}</style>
