<script setup>

</script>

<template>
  <footer>
    <div class="footer_content">
      <div class="footer_title_wrapper">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <h1>Bio-gen Science</h1>
        </router-link>
        <p class="copyright">უფლება © 2023 ბიჯიეს ჯგუფი სს.</p>
      </div>
      <div class="footer_items">
        <div class="first_item">
          <h3>პროდუქტები</h3>
          <div class="first_item_text">
            <router-link to="/about-sacace">საკაჩე</router-link>
            <router-link to="/about-entrogen">ენტროჯენი</router-link>
          </div>
        </div>
        <div class="second_item">
          <h3>უკუკავშირი</h3>
          <div class="second_item_text">
            <p>(+995) 599 74 00 44</p>
            <p>info@bgs.ge</p>
          </div>
        </div>
        <div class="third_item">
          <h3>სოც გვერდები</h3>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="@/assets/Facebook.svg" alt="">
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src="@/assets/Linkedin.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

* {
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

footer {
  background-color: #383838;
  width: 100%;
  color: white;

}

.footer_content {
  display: flex;
  padding: 50px 5px 20px 100px;

}

.footer_items {
  margin-left: 30%;
  display: flex;

}

.first_item,
.second_item,
.third_item {
  margin: 0 79px;
}

.footer_title_wrapper h1 {
  color: white;
  font-size: 36px;
  text-transform: uppercase;
}

.footer_title_wrapper h1::after {
  content: '';
  width: 100%;
  height: 2px;
  display: block;
  background-color: white;
}

.copyright {
  margin-top: 10px;
}

.first_item_text,
.second_item_text {
  margin-top: 20px;
}

.first_item_text a {
  color: white;
  display: block;
  text-decoration: none;
  margin: 10px 0;
}

.second_item_text p {
  margin: 10px 0;
}

.third_item img {
  margin-right: 10px;
  margin-top: 20px;
  cursor: pointer;
}


@media (min-width: 200px) and (max-width: 900px) {
  footer {
    height: auto;
  }

  .footer_title_wrapper {
    margin-bottom: 53px;
  }

  .first_item,
  .second_item,
  .third_item {
    margin: 0;
  }

  .footer_title_wrapper a h1 {
    font-size: 34px;
  }

  .copyright {
    font-size: 16px;
  }

  h3 {
    font-size: 20px;
  }

  .first_item_text a {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .second_item_text p {
    font-size: 16px;
  }

  .footer_content {
    flex-direction: column;
    padding: 28px;
  }

  .footer_items {
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

@media (min-width: 1000px) and (max-width: 1600px) {

  .footer_items {
    margin-left: inherit;
  }
}
</style>