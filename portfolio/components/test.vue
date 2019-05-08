<template>

<full-page>
      <section id="webdesign" name="webdesign">
        <b-row>
          <b-col><div sm="6"></div></b-col>
          <b-col>
            <div sm="6" class="block-right animated fadeIn delay-2s">
              <img src="/portfolio/images/portfolio/webdesign/webdesign_1.png">
              <div class="project-title-right">
                <h4 class="number">-01</h4>
                <h3>Cherlloyd</h3>
                <h3>Dutch</h3>
                <router-link to="/webdesign"><button class="btn-light">BEKIJK PROJECT</button></router-link>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div sm="8" class="block-left animated fadeIn delay-3s">
              <img id="img" src="/portfolio/images/portfolio/webdesign/webdesign_2.png">
              <div class="project-title-left">
                <h4 class="number">-02</h4>
                <h3>Bij</h3>
                <h3>Assie</h3>
                <router-link to="/web2"><button class="btn-light">BEKIJK PROJECT</button></router-link>
              </div>
            </div>
          </b-col>
          <b-col><div sm="4"></div></b-col>
        </b-row>
      </section><!-- END SECTION WEBDESIGN-->

      <section id="graphic_design">
      </section><!-- END SECTION GRAPHIC DESIGN-->

    </full-page>

  </b-container>
</template>

<style lang="scss" scoped>
body {
  padding-bottom:80px;
}
#projects {
  width:70%!important;
  // background-color:gray;
}

#projects h1 {
  border-bottom: 3px solid currentColor;
  margin:0 auto;
  width:190px;
  margin-bottom:20px;
}

.block-right {
  text-align:right;
  margin-bottom:50px;
  // background-color:red;
}
.project-title-right {
  position: relative;
  margin-left:20px;
  text-align:left;
  margin-left:180px;
  margin-top:-188px;
}
.project-title-left {
  position: relative;
  
  margin-top:-182px;
  margin-left:380px;
}

.block-left {
  text-align:left;
}

#portfolio-work img {
  width:700px;
}

#img {
  width:425px;
}

.btn-light {
  font-family: 'Poppins', sans-serif;
  font-size:10px;
  padding:10px;
  letter-spacing: 1px;
  background-color:rgba(255, 255, 255, 0.35);
  margin-top:15px;
  border: 1px solid white;
  color:white;
  width:120px;
}

.number {
  font-family: 'Amatic SC', cursive!important;
}

</style>

