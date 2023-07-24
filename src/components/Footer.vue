<script setup>

</script>

<template>
<footer>
  <div class="footer_content">
    <div class="footer_title_wrapper">
      <router-link to="/" style="text-decoration: none; color: inherit;">
        <h1>BGS</h1>
      </router-link>
      <p class="copyright">უფლება © 2023 ბიჯიეს ჯგუფი სს.</p>
    </div>
    <div class="footer_items">
        <div class="first_item">
          <h3>პროდუქტები</h3>
          <div class="first_item_text">
            <router-link to="/about-sacace">საკაცე</router-link>
            <a href="#">ენტროჯენი</a>
          </div>
        </div><div class="second_item">
          <h3>უკუკავშირი</h3>
          <div class="second_item_text">
            <p>(+995) 598-824-818</p>
            <p>info@bgs.ge</p>
          </div>
        </div>
    </div>
  </div>
</footer>
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
*{
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
footer{
  background-color: #383838;
  width: 100%;
  margin-top: 100px;
  color: white;
  height: 20vh;
}
.footer_content{
  display: flex;
  padding: 50px 5px 0 100px;

}
.footer_items{
  margin-left: 50%;
  display: flex;
  align-items: center;
}
.footer_title_wrapper h1{
  color: white;

}
.copyright{
  margin-top: 10px;
}
.first_item_text,.second_item_text{
  margin-top: 15px;
}
.first_item_text a{
  color: white;
  display: block;
  text-decoration: none;
  margin: 10px 0;
}
.second_item_text p{
  margin: 10px 0;
}
.second_item{
  margin-left: 50px;
}
@media (min-width: 200px) and (max-width: 900px){
  footer{
    height: auto;
  }
  .footer_title_wrapper{
    margin-bottom: 20px;
  }
  .footer_content{
    flex-direction: column;
    padding: 15px;
  }
  .footer_items{
    margin: 0;
  }
}
</style>