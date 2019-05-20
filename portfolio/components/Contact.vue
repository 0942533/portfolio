<template>
    <container>
      <b-row>
        <b-col xl="6" lg="6" md="6" class="block animated fadeIn delay-1s">
          <h1>Contact</h1>
          <p id="quote" class="animated fadeIn delay-2s">“ Questions, feedback, or just want to say hi? <br />Don’t be shy. Feel free to contact me. ”</p>

          <div id="contact">
            <div class="titles animated fadeIn delay-2s">
              <h2>Email :</h2>
              <h2>Mobiel :</h2>
              <h2>Connect :</h2>
            </div>

            <div class="information animated fadeIn delay-2s">
              <p>ljs.arnoldussen@hotmail.com</p>
              <p>06-52869958</p>
              <p>
              <a href="https://www.linkedin.com/in/lotte-arnoldussen-827287149/" target="blank" class="fab fa-linkedin"></a>
              <a href="https://github.com/0942533" target="blank" class="fab fa-github-square"></a>
              <a href="src/img/curriculum_vitae_lotte_arnoldussen.pdf" target="blank" class="fas fa-file-pdf"></a>
              </p>
            </div>
          </div>
        </b-col>

        <b-col xl="6" lg="6" md="6" class="img animated fadeIn delay-3s">
        </b-col>
      </b-row>
    </container>
  
</template>

<style scoped>

  body {
    background-image:none;
  }
  container {
    /* position:absolute; */
    top:0;
    left:0;
    width:100%;
    height:100vh;
    overflow: hidden;
    background-color:red;
  }

  .row {
    margin:10% auto;
    text-align:center;
  }

 #quote {
    margin-bottom:30px;
  }
  .block {
    background-color:rgba(255, 255, 255, 0.12);
    min-height:500px;
  }
  .img {
    background-color:blue;
    background-image:url('/src/img/contact.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }

  h1 {
    margin:60px auto 40px auto;
    border-bottom: 3px solid currentColor;
    width:150px;
  }
  h2 {
    font-size:1.2rem;
    letter-spacing: 3px;
    text-align:left;
  }

  #contact {
    width:100%;
    display: inline-block;   
  }

  .titles {
    display: inline-block; 
  }

  .titles h2{
   margin-bottom:13px;
  }

  .information {
    display: inline-block;   
    text-align:left; 
    margin-left:10px;
  }

  a {
    color:white;
    text-decoration:none;
    font-size:22px;
  }

  .fa-linkedin, .fa-github-square {
    margin-right:8px;
  }

  /*---------------------------------------- Media Queries ----------------------------------------*/

@media (max-width: 576px) { 
}

/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 768px) { 
  .img {
    background-size:130%;
  }
  .block {
    min-height:400px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .img {
    background-size:120%;
  }
  .block {
    min-height:500px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  .img {
    background-size:100%;
  }
  .block {
    min-height:500px;
  }
}
</style>