<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "primevue/button";
import store from "../store";
import router from "../router";
const viruses = [
  {
    title: 'ჰეპატიტის ვირუსები',
    description: 'ჰეპატიტის ვირუსები წარმოადგენენ ღვიძლის ინფექციური დაავადებების გამომწვევი ვირუსების ჯგუფს. არსებობს 5 ძირითადი ვირუსი, რომელიც იწვევს ჰეპატიტს. ეს ვირუსები, თავის მხრივ, წარმოადგენენ ჰეპატიტის ორ ჯგუფს: ნაწლავური, რომელსაც მიეკუთვნება A და E ჰეპატიტის ვირუსები (HAV და HEV) და პარენტერალური, რომელსაც განეკუთვნება B, C და D ჰეპატიტის ვირუსები (HBV, HCV და HDV). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს თითოეული ძირითადი ვირუსის გამოვლენისა და მათი რაოდენობრივი და ხარისხობრივი მახასიათებლების განსაზღვრისათვის, RT-PCR-ის (PCR რეალურ დროში) გამოყენებით.',
    image: 'hepatitis.png',
  },
  {
    title: 'ადამიანის იმუნოდეფიციტის ვირუსი',
    description: 'აივ ვირუსი რეტროვირუსების ოჯახის წარმომადგენლია, რომელიც აინფიცირებს ადამიანის იმუნურ სისტემას. ხანგრძლივმა ინფექციამ შეიძლება გამოიწვიოს შეძენილი იმუნოდეფიციტის სინდრომი (შიდსი) – მდგომარეობა, რომლის დროსაც იმუნურ სისტემას აღარ გააჩნია ნორმალური ფუნქციონირების უნარი. თავდაცვითი მექანიზმების უკმარისობა იწვევს ოპორტუნისტულ ინფექციებს და ნორმალური იმუნიტეტის არსებობისას უვნებელი ინფექციებიც კი შეიძლება გახდეს სასიკვდილო. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ნაკრებებს (კომპლექტებს), რომელთა გამოყენებით შესაძლებელია აივ ვირუსის როგორც რნმ-ის, ასევე დნმ-ის გამოვლენა. ვირუსის რნმ/დნმ-ის გამოვლენა „სეროლოგიური შუალედის“ შემცირების საშუალებას იძლევა, ხოლო PCR-ის, როგორც სადიაგნოსტიკო ინსტრუმენტის, გამოყენება არის შეუცვლელი მეთოდი აივ-ინფიცირებული დედების მიერ დაბადებულ ჩვილებში აივ ინფექციის დიაგნოსტირებისთვის.',
    image: 'hiv.png',
  },
  {
    title: 'ადამიანის პაპილომა ვირუსები',
    description: 'საშვილოსნოს ყელის კიბო (CC - Cervical cancer) არის ერთ-ერთი ყველაზე გავრცელებული ონკოლოგიური პათოლოგია, რომელიც ქალებში სიხშირით მეორე ადგილზეა მსოფლიოში. ყოველწლიურად მსოფლიოში დაახლოებით 600 000 ახალი CC შემთხვევა ფიქსირდება 250 000-ზე მეტი ლეტალური შედეგით. ამ კიბოს ვირუსული ბუნება დადასტურებულია ჯანდაცვის მსოფლიო ორგანიზაციის მიერ და აპვ გამოვლენილია საშვილოსნოს ყელის კიბოს წინარე და განვითარებული კიბოს შემთხვევების პრაქტიკულად 100 პროცენტში. იმის გამო, რომ საშვილოსნოს ყელის კიბოს (CC - Cervical cancer) გააჩნია განვითარების ხანგრძლივი პერიოდი და შეუცდომლად დადგენადი პრეკლინიკური ფაზა, არსებობს დაავადების ადრეულ ეტაპზე გამოვლენისა და პრევენციის შესაძლებლობა. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულური დიაგნოსტიკის ნაკრებებს (კომპლექტებს) როგორც დაბალი რისკის, ასევე მაღალი რისკის აპვ-ების გამოსავლენად',
    image: 'papiloma.png',
  },
  {
    title: 'სქესობრივი გზით გადამდები დაავადებები',
    description: 'ტერმინი სგგდ (სქესობრივი გზით გადამდები დაავადებები) მოიცავს სხვადასხვა ბაქტერიულ, ვირუსულ და პარაზიტულ ინფექციებს, რომლებიც გადაეცემა სქესობრივი კონტაქტის შედეგად. გავრცელებულ სგგდ-ებს მიეკუთვნება ქლამიდია, გონორეა, ჰერპესი, აივ, აპვ, სიფილისი, გარდნერელა, მიკოპლაზმა და ტრიქომონიაზი. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს მოცემული პათოგენების გამოსავლენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით',
    image: 'stv.png',
  },
  {
    title: 'ჰერპეს ვირუსებით გამოწვეული ინფექციები',
    description: 'ჰერპესული ინფექცია არის პირის ღრუსა და სასქესო ორგანოების ირგვლივ კანის ინფექციური დაავადებების კოლექტიური სახელწოდება, რომლებიც გამოწვეულია ჰერპეს ვირუსების სახელწოდებით ცნობილი ვირუსებით. ინფექციის ყველაზე გავრცელებული გამომწვევი აგენტებია: ციტომეგალოვირუსი, ჰერპეს სიმპლექსი (HSV-1 და HSV-2 ჩათვლით), ეპშტეინ-ბარის ვირუსი და ადამიანის ჰერპესის ვირუსები (6, 7 და 8). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულური დიაგნოსტიკის ნაკრებებს (კომპლექტებს) ყველა ძირითადი ჰერპეს ვირუსის გამოსავლენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით',
    image: 'herpes.png',
  },
  {
    title: '„TORCH ინფექციები“',
    description: '„TORCH ინფექციები“ არის სხვადასხვა მიკრობით გამოწვეული ინფექციური დაავადებების კოლექტიური სახელწოდება. სახელი წარმოადგენს შემდეგი პათოგენების აკრონიმს: ტოქსოპლაზმოზი (T), სხვა (O) (მათ შორის სიფილისი, ჰეპატიტი B), რუბელა (R), ციტომეგალოვირუსი (C) და ჰერპეს სიმპლექსი (H). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს კლინიკურ ნიმუშებში თითოეული პათოგენის გამოვლენისა და მახასიათებლების განსაზღვრისთვის RT-PCR (PCR რეალურ დროში) გამოყენებით. ',
    image: 'torch.png',
  },
  {
    title: 'სასუნთქი გზების ინფექციები',
    description: '„რესპირატორული ტრაქტის ინფექციები“ წარმოადგენს ადამიანის სასუნთქი გზების დაავადებების კოლექტიური სახელწოდებას. გამომწვევი აგენტები მოიცავს როგორც ვირუსებს, ასევე ბაქტერიებს. RTI-ინფექციები ზოგადად იყოფა (კლასიფიცირდება) ორ ძირითად ჯგუფად: ზედა ტრაქტის ინფექციები და ქვედა ტრაქტის ინფექციები (ამ უკანასკნელის მაგალითია პნევმონია). გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს გამომწვევი მიკრობების გამოსავლენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით. ტესტები მოიცავს ნაკრებებს (კომპლექტებს) ყველაზე გავრცელებული გამომწვევი აგენტების, როგორებიცაა გრიპი (ინფლუენცა), კორონავირუსი, Pseudomonas aeruginosa და სხვ., გამოსავლენად.',
    image: 'tract.png',
  },
  {
    title: 'ტუბერკულოზი',
    description: 'ტუბერკულოზი გავრცელებული და მომაკვდინებელი ინფექციური დაავადებაა, რომელსაც იწვევს მიკობაქტერიები, ძირითადად Mycobacterium tuberculosis. ტუბერკულოზი ყველაზე ხშირად უტევს ფილტვებს, მაგრამ ასევე შეიძლება დააზიანოს ცენტრალური ნერვული სისტემა, ლიმფური სისტემა, სისხლის მიმოქცევის სისტემა, შარდ-სასქესო სისტემა, ძვლები, სახსრები და კანიც კი. ტუბერკულოზის ადრეული დიაგნოსტიკა ეფექტური მკურნალობის საშუალებას იძლევა. გთავაზობთ Sacace Biotechnologies (იტალია) მიერ წარმოებულ მოლეკულურ-სადიაგნოსტიკო ტესტებს კლინიკურ ნიმუშებში Mycobacterium tuberculosis-ის გამოსავლენად და სხვადასხვა ანტიბიოტიკებისადმი რეზისტენტობის მახასიათებლის დასადგენად RT-PCR-ის (PCR რეალურ დროში) გამოყენებით.',
    image: 'TBbacteria.jpg',
  },
  {
    title: 'სალმონელას ინფექციები',
    description: 'სალმონელა ვლინდება მრავალი ფორმით. ე.წ. არატიფოიდური სალმონელას სახეობა შეერთებულ შტატებში კვებითი მოწამვლის გავრცელების ყველაზე გავრცელებული მიზეზია. ეს ორგანიზმები ძალიან გავრცელებულია ხორცპროდუქტებში, მაგრამ ასევე ნაპოვნია შინაურ კუებსა და იგუანებში. ქათამი და კვერცხი ალბათ ინფექციის ყველაზე გავრცელებული მიზეზია.' +
        '' +
        '          პაციენტებს უვითარდებათ სიმპტომები დაბინძურებული საკვების ჭამიდან 10-დან 48 საათამდე. მათ შეიძლება ჰქონდეთ სიმპტომების ფართო სპექტრი, დაწყებული მსუბუქი გასტროენტერიტიდან მძიმე დიარეულ დაავადებამდე დეჰიდრატაციით და ღრმა ინფექციით. ავთვისებიანი სიმსივნეების, ნამგლისებრუჯრედოვანი ანემიის, აორტის ანევრიზმების და გულის სარქვლის დაავადების მქონე პაციენტები, როგორც ჩანს, უფრო მიდრეკილნი არიან გავრცელებული ტიპის ინფექციის (ანუ სისხლში გავრცელების) მიმართ.' +
        '' +
        '          პაციენტები შეიძლება გამოჯანმრთელდნენ ანტიბიოტიკების გამოყენების გარეშე. ანტიბიოტიკები რეკომენდებულია ძალიან დაავადებული პაციენტებისთვის. ინდივიდების მცირე პროცენტს შეიძლება განუვითარდეს ქრონიკული მატარებელი მდგომარეობა; ისინი ასიმპტომურია, მაგრამ გამოიყოფა სალმონელა განავალში ერთი წლის ან მეტი ხნის განმავლობაში.',
    image: 'salmonella.jpg',
  },
  {
    title: 'მოლეკულური გენეტიკა',
    description: 'მოლეკულური გენეტიკა არის ბიოლოგიის ქვედარგი, რომელიც განიხილავს, თუ როგორ ვლინდება განსხვავებები დნმ-ის მოლეკულების სტრუქტურებში ან გამოხატულებაში, როგორც ცვალებადობა ორგანიზმებს შორის. მოლეკულური გენეტიკა ხშირად იყენებს „გამოძიების მიდგომას“ ორგანიზმის გენომში გენების სტრუქტურისა და/ან ფუნქციის დასადგენად გენეტიკური ეკრანის გამოყენებით კვლევის სფერო ეფუძნება ბიოლოგიის რამდენიმე ქვედარგის შერწყმას: კლასიკური მენდელის მემკვიდრეობა , უჯრედული ბიოლოგია , მოლეკულური ბიოლოგია , ბიოქიმია და ბიოტექნოლოგია. მკვლევარები ეძებენ მუტაციებს გენში ან იწვევენ მუტაციებს გენში, რათა დააკავშირონ გენის თანმიმდევრობა კონკრეტულ ფენოტიპთან. მოლეკულური გენეტიკა მძლავრი მეთოდოლოგიაა მუტაციების გენეტიკურ პირობებთან დასაკავშირებლად, რაც ხელს შეუწყობს სხვადასხვა გენეტიკური დაავადების მკურნალობის/განკურნების ძიებას.',
    image: 'Molecule.jpg',
  },
  {
    title: 'ნევროლოგიური ინფექციები',
    image: 'Neurological-disorders.jpg'
  },
  {
    title: 'ნაწლავური და პარაზიტული ინფექციები',
    description: 'მწვავე ნაწლავური ინფექციები (A.I.I) არის ინფექციური დაავადებების განყოფილებებში ჰოსპიტალიზაციის ერთ-ერთი მთავარი მიზეზი. თანამედროვე ლიტერატურით მოწოდებული მონაცემების მიხედვით შემდეგი ბაქტერიული და ვირუსული აგენტები არის AII-ის ყველაზე ხშირად გამოვლენილი და ზოგადად გავრცელებული ეტიოლოგიური აგენტები',
    image: 'Intestines.jpg'
  },
  {
    title: 'საშიში ინფექციები',
    image: 'biolfilm_pseudomonas.jpg'
  }
]
const handleVirusClick = (virus) => {
  store.commit('setVirusData',virus)
  router.push('/virus-component')

}
</script>

<template>
 <Header/>
  <div class="sacace_header">
    <h1 class="sacace_title">კატეგორიები</h1>
  </div>
  <div class="sacace_viruses">
    <div class="sacace_viruses">
      <div v-for="virus in viruses"  class="sacace_virus" @click="handleVirusClick(virus)">
        <img :src="virus.image" alt="">
        <div class="sacace_virus_text">
          <p class="sacace_virus_title">{{ virus.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="catalog">
    <div class="catalog_wrapper">
      <img src="@/assets/catalog_logo.png" alt="">
      <div class="catalog_download_wrapper">
        <h1>კატალოგის გადმოწერა</h1>
        <a href="https://sacace.com/attache/file/catalogue.pdf" target="_blank" download="catalogue">
            <Button label="გადმოწერა" severity="help" outlined />
          </a>
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

.sacace_header{
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
.sacace_header h1{
  color: #9732ED;
}
.sacace_viruses{
  width: 800px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  row-gap: 30px;
  column-gap: 30px;
}
.sacace_virus{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
.sacace_virus img{
  border-radius: 50%;
  object-position: center;
}
.sacace_virus_text{
  text-align: center;
}

.sacace_virus_title{
  margin-top: 15px;
  
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
@media (min-width: 100px) and (max-width: 900px){
  .sacace_viruses{
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .sacace_virus{
    margin: 50px 0;
  }
  .sacace_virus img{
    width: 65px;
  }
  .sacace_virus_description{
    width: 200px;
  }
  .sacace_virus_title{
    font-size: 15px;
  }
  .catalog_wrapper{
    margin: 0;
    padding-top: 10%;
    padding-left: 15%;
  }
  .sacace_title{
    font-size: 25px;
  }
  .catalog_wrapper img{
    display: none;
  }
  .catalog_download_wrapper h1{
    font-size: 25px;
  }
}
</style>