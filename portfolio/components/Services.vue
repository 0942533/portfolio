<template>
  <b-container id="services">
    <b-row>
     <b-col class="title animated fadeIn delay-1s" sm="12"><h1>Diensten</h1></b-col>
    </b-row>

    <b-row id="pic-services">
      <b-col><div sm="4" class="block animated fadeIn delay-2s"><img src="/src/img/services/diensten_1.png"></div></b-col>
      <b-col><div sm="4" class="block2 animated fadeIn delay-2s"><img src="/src/img/services/diensten_2.png"></div></b-col>
      <b-col><div sm="4" class="block3 animated fadeIn delay-2s"><img src="/src/img/services/diensten_3.png"></div></b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
#services {
  width:80%!important;
  padding-top:70px;
}

#services h1 {
  border-bottom: 3px solid currentColor;
  margin:0 auto;
  width:175px;
  margin-bottom:70px;
}

.block, #services .block2 {
  width:100%;
  height:27vh;
  margin:0 auto;
  padding-left:0;
}

//Media queries
@media (max-width: 510px) { 
  .block, #services .block2, .block3 {
    text-align: center;
    overflow:hidden;
  }
  img {
    width:170px;
    height:140px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 510px) { 
  .block, #services .block2, .block3 {
      text-align:center;
      margin-top:20px;
    }
  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 1006px){ 
  .block3 {
    margin-top:50px;
    text-align:center;
  }
}
</style>


