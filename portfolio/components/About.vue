<template>
   <section>
      <div class="section">
        <div class="fullscreen-video-wrap">
          <div class="arrow bounce">
            <li class="fa fa-arrow-down fa-2x" href="#"></li>
          </div>
          <video src="/src/img/timelapse.mp4" autoplay="true" loop="true"></video>
        </div>
      </div>

      <!-- Section about me -->
      <div class="section1">
        <b-container id="about">
          <b-row>
            <b-col sm="3" id="h1"><h1>Over <br>mij..</h1></b-col>
            <b-col sm="1"><div id="vl"></div></b-col>
            <b-col sm="8"  id="p" >
              <p>
                Mijn naam is Lotte Arnoldussen. Ik ben een 22 jarige Creative Media and Game Technologies(CMGT) 
                student aan de Hogeschool Rotterdam.<br /><br />

                Op de open dag van de opleiding CMGT presenteerde een aantal studenten hun web applicaties die 
                ze tijdens hun stage hadden ontwikkeld. Met name de dynamische web applicaties trokken meteen 
                mijn aandacht.<br /><br />

                De krachtige animaties ondersteunden het verhaal, waardoor voor mij als bezoeker de boodschap en 
                de sfeer die het bedrijf wilde overdragen meteen duidelijk werd. Daarnaast maakten de verassende 
                en speelse animaties bij de overgang van een pagina mij nieuwsgierig. Hierdoor bleef ik automatisch 
                langer op de web applicatie hangen.<br /><br />

                Het creëren van een soortgelijke ervaring met behulp van een web applicatie en animaties wekt mijn 
                interesse.<br /><br />

                <strong>Stage wensen</strong><br />
                Momenteel ben ik dan ook op zoek naar een leuke stageplek waarbij ik mijzelf kan ontwikkelen
                op het gebied van front-end. Ik zou meer willen leren over animaties, UX design en web applicaties in 
                het algemeen.<br />

                <img src="/src/img/signature.png">
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <!-- Section about me -->
      <div class="section2">
        <b-container id="about2">
          <b-row>
            <b-col sm="12" id="h2"><h2>Over mij</h2></b-col>
            <b-col sm="1"><div id="vl"></div></b-col>
            <b-col sm="12"  id="p" >
              <p>
                Mijn naam is Lotte Arnoldussen. Ik ben een 22 jarige Creative Media and Game Technologies(CMGT) 
                student aan de Hogeschool Rotterdam.<br /><br />

                Op de open dag van de opleiding CMGT presenteerde een aantal studenten hun web applicaties die 
                ze tijdens hun stage hadden ontwikkeld. Met name de dynamische web applicaties trokken meteen 
                mijn aandacht.<br /><br />

                De krachtige animaties ondersteunden het verhaal, waardoor voor mij als bezoeker de boodschap en 
                de sfeer die het bedrijf wilde overdragen meteen duidelijk werd. Daarnaast maakten de verassende 
                en speelse animaties bij de overgang van een pagina mij nieuwsgierig. Hierdoor bleef ik automatisch 
                langer op de web applicatie hangen.<br /><br />

                Het creëren van een soortgelijke ervaring met behulp van een web applicatie en animaties wekt mijn 
                interesse.<br /><br />

                <strong>Stage wensen</strong><br />
                Momenteel ben ik dan ook op zoek naar een leuke stageplek waarbij ik mijzelf kan ontwikkelen
                op het gebied van front-end. Ik zou meer willen leren over animaties, UX design en web applicaties in 
                het algemeen.<br />

                <img src="/src/img/signature.png">
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>
  </section>
</template>

<style scoped>
body {
  background-image: url(/src/img/video.png);
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
}

section {
  padding-top:70px;
}

.arrow {
  position: absolute;
  z-index:2;
  color:white;
  bottom:-80px;
  left: 50%;
  display:block;
}

.arrow li, .arrow li:hover {
  color:white;
  text-decoration:none;
}
.bounce {
  text-align: center;
  margin: 8% 0;
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.fullscreen-video-wrap {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  overflow: hidden;
}

.fullscreen-video-wrap video {
  min-width:100%;
  min-height:100%;
}

.section {
  height:100vh;
}
.section1 {
  height:15vh;
}

#about {
  width:70%!important;
  overflow:hidden;
  margin:0 auto;
  /* background-color:gray; */
}

#about #h1 {
  margin-left:0px;
  text-align:left;
}

#about #vl {
  border-left: 4px solid white;
  height: 90px;
}

#about p {
  margin-left:40px;
  padding-right:8px;
}

#about img {
  margin:20px 0 50px 0;
}

h2 {
  border-bottom: 3px solid currentColor;
  width:183px;
  margin:0 auto;
  margin-bottom:40px;
}
#about2 p {
  padding-left:30px;
  padding-right:30px;
}
#about2 {
  text-align: center;
}
#about2 img {
   margin:40px 0 50px 0;
}

/* Medie Queries */
@media (max-width: 576px) { 
   .section1 {
    display:none;
  }
  .section2 {
    display:block;
  }
  #about2 img {
    display:none;
  }
  .arrow .bounce{
    display:none;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {  
  .section1 {
    display:none;
  }
  .section2 {
    display:block;
  }
    .arrow {
    bottom:10px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {  
  .section1 {
    display:none;
  }
  .section2 {
    display:block;
  }
   .arrow {
    bottom:-20px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {  
  .section1 {
    display:block;
  }
  .section2 {
    display:none;
  }
  .arrow {
    bottom:-40px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .section1 {
    display:block;
  }
  .section2 {
    display:none;
  }
}
</style>