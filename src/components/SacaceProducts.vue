<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "primevue/button";
import store from "../store";
import router from "../router";
import { onMounted, nextTick, onBeforeUnmount } from "vue"
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
const viruses = [
  {
    title: 'ჰეპატიტის ვირუსები',
    description: 'ჰეპატიტის ვირუსები წარმოადგენენ ღვიძლის ინფექციური დაავადებების გამომწვევი ვირუსების ჯგუფს. არსებობს 5 ძირითადი ვირუსი, რომელიც იწვევს ჰეპატიტს. ეს ვირუსები, თავის მხრივ, წარმოადგენენ ჰეპატიტის ორ ჯგუფს: ნაწლავური, რომელსაც მიეკუთვნება A და E ჰეპატიტის ვირუსები (HAV და HEV) და პარენტერალური, რომელსაც განეკუთვნება B, C და D ჰეპატიტის ვირუსები (HBV, HCV და HDV). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს თითოეული ძირითადი ვირუსის გამოვლენისა და მათი რაოდენობრივი და ხარისხობრივი მახასიათებლების განსაზღვრისათვის, RT-PCR-ის (PCR რეალურ დროში) გამოყენებით.',
    image: 'hepatitis.png',
    pdfLink: "https://www.cdc.gov/hepatitis/resources/professionals/pdfs/abctable.pdf"
  },
  {
    title: 'ადამიანის იმუნოდეფიციტის ვირუსი',
    description: 'აივ ვირუსი რეტროვირუსების ოჯახის წარმომადგენლია, რომელიც აინფიცირებს ადამიანის იმუნურ სისტემას. ხანგრძლივმა ინფექციამ შეიძლება გამოიწვიოს შეძენილი იმუნოდეფიციტის სინდრომი (შიდსი) – მდგომარეობა, რომლის დროსაც იმუნურ სისტემას აღარ გააჩნია ნორმალური ფუნქციონირების უნარი. თავდაცვითი მექანიზმების უკმარისობა იწვევს ოპორტუნისტულ ინფექციებს და ნორმალური იმუნიტეტის არსებობისას უვნებელი ინფექციებიც კი შეიძლება გახდეს სასიკვდილო. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ნაკრებებს (კომპლექტებს), რომელთა გამოყენებით შესაძლებელია აივ ვირუსის როგორც რნმ-ის, ასევე დნმ-ის გამოვლენა. ვირუსის რნმ/დნმ-ის გამოვლენა „სეროლოგიური შუალედის“ შემცირების საშუალებას იძლევა, ხოლო PCR-ის, როგორც სადიაგნოსტიკო ინსტრუმენტის, გამოყენება არის შეუცვლელი მეთოდი აივ-ინფიცირებული დედების მიერ დაბადებულ ჩვილებში აივ ინფექციის დიაგნოსტირებისთვის.',
    image: 'hiv.png',
    pdfLink: "https://www.health.ny.gov/diseases/aids/general/resources/child/docs/chapter_1.pdf"
  },
  {
    title: 'ადამიანის პაპილომა ვირუსები',
    description: 'საშვილოსნოს ყელის კიბო (CC - Cervical cancer) არის ერთ-ერთი ყველაზე გავრცელებული ონკოლოგიური პათოლოგია, რომელიც ქალებში სიხშირით მეორე ადგილზეა მსოფლიოში. ყოველწლიურად მსოფლიოში დაახლოებით 600 000 ახალი CC შემთხვევა ფიქსირდება 250 000-ზე მეტი ლეტალური შედეგით. ამ კიბოს ვირუსული ბუნება დადასტურებულია ჯანდაცვის მსოფლიო ორგანიზაციის მიერ და აპვ გამოვლენილია საშვილოსნოს ყელის კიბოს წინარე და განვითარებული კიბოს შემთხვევების პრაქტიკულად 100 პროცენტში. იმის გამო, რომ საშვილოსნოს ყელის კიბოს (CC - Cervical cancer) გააჩნია განვითარების ხანგრძლივი პერიოდი და შეუცდომლად დადგენადი პრეკლინიკური ფაზა, არსებობს დაავადების ადრეულ ეტაპზე გამოვლენისა და პრევენციის შესაძლებლობა. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულური დიაგნოსტიკის ნაკრებებს (კომპლექტებს) როგორც დაბალი რისკის, ასევე მაღალი რისკის აპვ-ების გამოსავლენად',
    image: 'papiloma.png',
    pdfLink: "https://www.cdc.gov/vaccines/pubs/pinkbook/downloads/hpv.pdf"
  },
  {
    title: 'სქესობრივი გზით გადამდები დაავადებები',
    description: 'ტერმინი სგგდ (სქესობრივი გზით გადამდები დაავადებები) მოიცავს სხვადასხვა ბაქტერიულ, ვირუსულ და პარაზიტულ ინფექციებს, რომლებიც გადაეცემა სქესობრივი კონტაქტის შედეგად. გავრცელებულ სგგდ-ებს მიეკუთვნება ქლამიდია, გონორეა, ჰერპესი, აივ, აპვ, სიფილისი, გარდნერელა, მიკოპლაზმა და ტრიქომონიაზი. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს მოცემული პათოგენების გამოსავლენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით',
    image: 'stv.png',
    pdfLink: "https://www.prevention.va.gov/docs/mens-health-guide/STIs.pdf"
  },
  {
    title: 'ჰერპეს ვირუსებით გამოწვეული ინფექციები',
    description: 'ჰერპესული ინფექცია არის პირის ღრუსა და სასქესო ორგანოების ირგვლივ კანის ინფექციური დაავადებების კოლექტიური სახელწოდება, რომლებიც გამოწვეულია ჰერპეს ვირუსების სახელწოდებით ცნობილი ვირუსებით. ინფექციის ყველაზე გავრცელებული გამომწვევი აგენტებია: ციტომეგალოვირუსი, ჰერპეს სიმპლექსი (HSV-1 და HSV-2 ჩათვლით), ეპშტეინ-ბარის ვირუსი და ადამიანის ჰერპესის ვირუსები (6, 7 და 8). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულური დიაგნოსტიკის ნაკრებებს (კომპლექტებს) ყველა ძირითადი ჰერპეს ვირუსის გამოსავლენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით',
    image: 'herpes.png',
    pdfLink: "https://www.va.gov/WHOLEHEALTHLIBRARY/docs/Herpes-Simplex-Virus.pdf"
  },
  {
    title: '„TORCH ინფექციები“',
    description: '„TORCH ინფექციები“ არის სხვადასხვა მიკრობით გამოწვეული ინფექციური დაავადებების კოლექტიური სახელწოდება. სახელი წარმოადგენს შემდეგი პათოგენების აკრონიმს: ტოქსოპლაზმოზი (T), სხვა (O) (მათ შორის სიფილისი, ჰეპატიტი B), რუბელა (R), ციტომეგალოვირუსი (C) და ჰერპეს სიმპლექსი (H). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს კლინიკურ ნიმუშებში თითოეული პათოგენის გამოვლენისა და მახასიათებლების განსაზღვრისთვის RT-PCR (PCR რეალურ დროში) გამოყენებით. ',
    image: 'torch.png',
    pdfLink: "https://poliklinika-harni.hr/images/uploads/360/torch.pdf"
  },
  {
    title: 'სასუნთქი გზების ინფექციები',
    description: '„რესპირატორული ტრაქტის ინფექციები“ წარმოადგენს ადამიანის სასუნთქი გზების დაავადებების კოლექტიური სახელწოდებას. გამომწვევი აგენტები მოიცავს როგორც ვირუსებს, ასევე ბაქტერიებს. RTI-ინფექციები ზოგადად იყოფა (კლასიფიცირდება) ორ ძირითად ჯგუფად: ზედა ტრაქტის ინფექციები და ქვედა ტრაქტის ინფექციები (ამ უკანასკნელის მაგალითია პნევმონია). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს გამომწვევი მიკრობების გამოსავლენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით. ტესტები მოიცავს ნაკრებებს (კომპლექტებს) ყველაზე გავრცელებული გამომწვევი აგენტების, როგორებიცაა გრიპი (ინფლუენცა), კორონავირუსი, Pseudomonas aeruginosa და სხვ., გამოსავლენად.',
    image: 'tract.png',
    pdfLink: "https://www.uib.cat/depart/dba/microbiologia/ADSenfcomI/material_archivos/infeccion%20respiratoria.pdf"
  },
  {
    title: 'ტუბერკულოზი',
    description: 'ტუბერკულოზი გავრცელებული და მომაკვდინებელი ინფექციური დაავადებაა, რომელსაც იწვევს მიკობაქტერიები, ძირითადად Mycobacterium tuberculosis. ტუბერკულოზი ყველაზე ხშირად უტევს ფილტვებს, მაგრამ ასევე შეიძლება დააზიანოს ცენტრალური ნერვული სისტემა, ლიმფური სისტემა, სისხლის მიმოქცევის სისტემა, შარდ-სასქესო სისტემა, ძვლები, სახსრები და კანიც კი. ტუბერკულოზის ადრეული დიაგნოსტიკა ეფექტური მკურნალობის საშუალებას იძლევა. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს კლინიკურ ნიმუშებში Mycobacterium tuberculosis-ის გამოსავლენად და სხვადასხვა ანტიბიოტიკებისადმი რეზისტენტობის მახასიათებლის დასადგენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით.',
    image: 'TBbacteria.jpg',
    pdfLink: "https://www.who.int/docs/default-source/documents/tuberculosis/execsumm-11nov2020.pdf?sfvrsn=e1d925f_4"
  },
  {
    title: 'სალმონელას ინფექციები',
    description: 'სალმონელა ვლინდება მრავალი ფორმით. ე.წ. არატიფოიდური სალმონელას სახეობა შეერთებულ შტატებში კვებითი მოწამვლის გავრცელების ყველაზე გავრცელებული მიზეზია. ეს ორგანიზმები ძალიან გავრცელებულია ხორცპროდუქტებში, მაგრამ ასევე ნაპოვნია შინაურ კუებსა და იგუანებში. ქათამი და კვერცხი ალბათ ინფექციის ყველაზე გავრცელებული მიზეზია.' +
      '' +
      '          პაციენტებს უვითარდებათ სიმპტომები დაბინძურებული საკვების ჭამიდან 10-დან 48 საათამდე. მათ შეიძლება ჰქონდეთ სიმპტომების ფართო სპექტრი, დაწყებული მსუბუქი გასტროენტერიტიდან მძიმე დიარეულ დაავადებამდე დეჰიდრატაციით და ღრმა ინფექციით. ავთვისებიანი სიმსივნეების, ნამგლისებრუჯრედოვანი ანემიის, აორტის ანევრიზმების და გულის სარქვლის დაავადების მქონე პაციენტები, როგორც ჩანს, უფრო მიდრეკილნი არიან გავრცელებული ტიპის ინფექციის (ანუ სისხლში გავრცელების) მიმართ.' +
      '' +
      '          პაციენტები შეიძლება გამოჯანმრთელდნენ ანტიბიოტიკების გამოყენების გარეშე. ანტიბიოტიკები რეკომენდებულია ძალიან დაავადებული პაციენტებისთვის. ინდივიდების მცირე პროცენტს შეიძლება განუვითარდეს ქრონიკული მატარებელი მდგომარეობა; ისინი ასიმპტომურია, მაგრამ გამოიყოფა სალმონელა განავალში ერთი წლის ან მეტი ხნის განმავლობაში.',
    image: 'salmonella.jpg',
    pdfLink: "https://www.cdc.gov/salmonella/pdf/cdc-salmonella-factsheet.pdf"
  },
  {
    title: 'მოლეკულური გენეტიკა',
    description: 'მოლეკულური გენეტიკა არის ბიოლოგიის ქვედარგი, რომელიც განიხილავს, თუ როგორ ვლინდება განსხვავებები დნმ-ის მოლეკულების სტრუქტურებში ან გამოხატულებაში, როგორც ცვალებადობა ორგანიზმებს შორის. მოლეკულური გენეტიკა ხშირად იყენებს „გამოძიების მიდგომას“ ორგანიზმის გენომში გენების სტრუქტურისა და/ან ფუნქციის დასადგენად გენეტიკური ეკრანის გამოყენებით კვლევის სფერო ეფუძნება ბიოლოგიის რამდენიმე ქვედარგის შერწყმას: კლასიკური მენდელის მემკვიდრეობა , უჯრედული ბიოლოგია , მოლეკულური ბიოლოგია , ბიოქიმია და ბიოტექნოლოგია. მკვლევარები ეძებენ მუტაციებს გენში ან იწვევენ მუტაციებს გენში, რათა დააკავშირონ გენის თანმიმდევრობა კონკრეტულ ფენოტიპთან. მოლეკულური გენეტიკა მძლავრი მეთოდოლოგიაა მუტაციების გენეტიკურ პირობებთან დასაკავშირებლად, რაც ხელს შეუწყობს სხვადასხვა გენეტიკური დაავადების მკურნალობის/განკურნების ძიებას.',
    image: 'Molecule.jpg',
    pdfLink: "https://cbcd.bbk.ac.uk/sites/default/files/cbcd/files/interlearn/McQuilin_INTRODUCTION%20TO%20MOLECULAR%20GENETICS%2022%20Sept%202017.pdf"
  },
  {
    title: 'ნევროლოგიური ინფექციები',
    image: 'Neurological-disorders.jpg',
    pdfLink: "https://www.rcpe.ac.uk/journal/issue/journal_36_4/CME_infections.pdf"
  },
  {
    title: 'ნაწლავური და პარაზიტული ინფექციები',
    description: 'მწვავე ნაწლავური ინფექციები (A.I.I) არის ინფექციური დაავადებების განყოფილებებში ჰოსპიტალიზაციის ერთ-ერთი მთავარი მიზეზი. თანამედროვე ლიტერატურით მოწოდებული მონაცემების მიხედვით შემდეგი ბაქტერიული და ვირუსული აგენტები არის AII-ის ყველაზე ხშირად გამოვლენილი და ზოგადად გავრცელებული ეტიოლოგიური აგენტები',
    image: 'Intestines.jpg',
    pdfLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC358167/pdf/cmr00049-0049.pdf"
  },
  {
    title: 'საშიში ინფექციები',
    image: 'biolfilm_pseudomonas.jpg',
    pdfLink: "https://www.cdc.gov/ncezid/pdf/two-pagers/ncezid-deadly-unexplained-2pgr-h.pdf"
  }
]
const handleVirusClick = (virus) => {
  store.commit('setVirusData', virus)
  router.push('/virus-component')

}
</script>

<template>
  <Header />
  <div class="sacace_header">
    <h1 class="sacace_title">საკაჩე</h1>
  </div>
  <div class="about_sacace_wrapper" v-if="windowWidth > 900">
    <div class="about_sacace">
      <img src="/Sacace-homepage-2x.jpg" alt="">
    </div>
    <div class="about_sacace_text">
      <h1 class="about_sacace_title">საკაჩე</h1>
      <p>
        <strong>SACACE BioTechnologies (იტალია)</strong> 
        ავითარებს, აწარმოებს და რეალიზაციას უწევს 140-ზე მეტი დასახელების სრულ ნაკრებს ადამიანის დაავადებების,
        ვეტერინარული და საკვების ხარისიხის დიაგნოსტიკის მიზნით.
      </p>
      <p>ეს ნაკრებები მოიცავს რეაგენტების სრულ კომპლექტებს ნუკლეინის მჟავების ექსტრაქციის, მათი კონკრეტული უბნების
        ამპლიფიკაციისა (PCR ან RT-PCR) და შემდგომი გამოვლენისათვის.</p>
      <p> სადიაგნოსტიკო ნაკრებები გამოირჩევა მაღალი სპეციფიურობით, მდგრადობით და რეპროდუცირების უნარით, რასაც თან ერთვის
        მათი ეკონომიურობა და კონკურენტუნარიანი ფასი.</p>
    </div>
  </div>

  <div class="sacace_viruses">
    <div v-for="virus in viruses" class="sacace_virus" @click="handleVirusClick(virus)">
      <div class="sacace_virus_subwrapper">
        <img :src="virus.image" alt="">
        <p class="sacace_virus_title">{{ virus.title }}</p>
      </div>
      <p class="sacace_virus_description">
        {{ virus.description }}
      </p>
      <div class="sacace-more" v-if="windowWidth > 900">
        <p>მეტი ინფორმაცია</p>
      </div>
    </div>
  </div>

  <div class="sacace_catalog_wrapper">
    <div class="sacace_catalog">
      <img v-if="windowWidth > 900" src="@/assets/Home-catalog-image.jpg" alt="">
      <div class="sacace_download_wrapper">
        <h1 class="download_title">
          გადმოიწერეთ საკაჩეს კატალოგი
        </h1>
        <p class="download_description">
          იხილეთ ყველა ტიპის მოლეკულური დიაგნოსტიკის ნაკრები
          და ინსტრუმენტები ჩვენს კატალოგში
        </p>
        <a href="https://sacace.com/attache/file/catalogue.pdf" target="_blank" download>
          <Button label="გადმოწერა" class="download-btn"></Button>
        </a>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

* {
  font-family: 'Helvetica Neue', sans-serif;
}

.about_sacace_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;

}

.about_sacace {
  padding: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
  height: 445px;
}

.about_sacace_text {
  margin-left: 17px;
}

.about_sacace_text p {
  margin-top: 20px;
  font-size: 16px;
  word-wrap: break-word;
  width: 620px;
  line-height: 25.84px;
}

.about_sacace_title {
  font-size: 36px;
  color: #383838;
}

.sacace_header {
  background: url("@/assets/homebcg.png") no-repeat center;
  width: 100%;
  height: 40vh;
  -webkit-background-size: cover;
  background-size: cover;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sacace_title {
  font-size: 28px;
}

.sacace_title::after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #BE00FE;
  display: block;
  margin-top: 8px;
}

.sacace_header h1 {
  color: #BE00FE;
}

.sacace_viruses {

  margin-top: 60px;
  padding: 0 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  place-content: center;

}

.sacace_virus {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
  width: 302px;
  height: 249px;
  position: relative;

}

.sacace_virus_subwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sacace_virus_subwrapper img {
  object-fit: cover;
}


.sacace_virus_title {
  margin-left: 11px;
  font-weight: 700;
  font-size: 16px;
}

.sacace_virus_description {
  width: 100%;
  /* this code clamps based on specified lines */
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  margin-top: 20px;
  line-height: 22.61px;
}

.sacace_catalog_wrapper {
  width: 100%;
  height: 283px;
  background: linear-gradient(92.45deg, #FBF5FF -3.7%, #FBF5FF 109.09%);
  margin-top: 93px;
  position: relative;
}

.sacace_catalog {
  display: flex;
  align-items: center;
  margin-left: 150px;
  position: absolute;
  bottom: 0;
}

.sacace_download_wrapper {
  margin: 0 65px;
}

.sacace-more {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #BE00FE;
  padding: 18px;
  border-radius: 0 0 10px 10px;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.sacace-mobile-more {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 18px;
}

.sacace-mobile-more p {
  color: black;
  font-size: 1.1rem;

}

.sacace_virus:hover .sacace-more {
  opacity: 1;
}

.sacace-more p {
  text-align: center;
  color: white;

}

.download_title {
  font-size: 28px;
  font-weight: 500;
  color: #7E00EA;
}

.download_description {
  margin: 20px 0;
}

.download-btn {
  position: absolute;
  bottom: 20px;
  font-size: 18px;
  width: 155px;
}

@media (min-width: 100px) and (max-width: 900px) {
  .sacace_viruses {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    column-gap: 10px;
    row-gap: 20px;
    margin-top: 27px;
  }

  .sacace_virus {
    width: 184px;
    height: 343px;

  }

  .sacace_virus_subwrapper {
    flex-direction: column;

  }

  .sacace_virus img {
    width: 164px;
    height: 77px;
    object-fit: cover;
  }


  .sacace_virus_title {
    font-size: 16px;
    font-weight: 700;
    margin-top: 3px;
  }

  .sacace_virus_description {
    -webkit-line-clamp: 5;
    line-height: 22.61px;
  }

  .sacace_catalog_wrapper {
    margin-top: 80px;
  }

  .sacace_catalog {
    margin-left: auto;
    flex-direction: column;
  }

  .sacace_download_wrapper {
    margin: 20px;
  }

  .download_description {
    margin-top: 16px;
  }

  .download-btn {
    position: static;
    width: 100%;
    margin-top: 32px;
  }

  .sacace_catalog img {
    width: 90%;
  }
}
</style>