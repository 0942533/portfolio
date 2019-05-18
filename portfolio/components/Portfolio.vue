<template>
    <b-container class="portfolio">
      <b-row>
        <b-col class="title animated fadeIn delay-1s" xl="12">
          <h1>{{title}}</h1>
        </b-col>
      </b-row>

      <b-row>
        <b-col xl="12" class="blue animated fadeIn delay-2s project" v-for="(data,index) in projects" :key="index">
            <div class="img">
              <img :src="data.image">
            </div>

            <div class="proj-title">
              <h3>{{data.number}}</h3>
              <h2>{{data.projectTitle1}}</h2>
              <h2 id="space" slot="projectTitle2" v-html="data.projectTitle2">{{data.projectTitle2}}</h2>

              <button class="btn-light btnShow1" @click="goTodetail(data.projectId)">BEKIJK PROJECT</button>
              <button class="btn-light btnShow2" @click="goTodetail2(data.projectId2)">BEKIJK PROJECT</button>
            </div>

             <hr>
        </b-col>
      </b-row>

    </b-container>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      title: 'Portfolio',
      projects:[
      {
        projectId:1,
        number: "-01",
        projectTitle1:"Cherlloyd",
        projectTitle2:"Dutch",
        image     : "src/img/portfolio/webdesign/webdesign_1.png",
      },
      {
        projectId:2,
        number:"-02",
        projectTitle1:"Bij",
        projectTitle2:"Assie",
        image      : "src/img/portfolio/webdesign/webdesign_2.png"
      },
      {
        projectId:3,
        number:"-03",
        projectTitle1:"Lotties",
        projectTitle2:"&nbsp;",
        image      : "src/img/portfolio/webdesign/webdesign_3.png"
      },
      {
        projectId:4,
        number:"-04",
        projectTitle1:"Cartoons",
        projectTitle2:"&nbsp;",
        image      : "src/img/portfolio/webdesign/webdesign_4.png"
      },
      
      {
        projectId2:5,
        number:"-05",
        projectTitle1:"Posters",
        projectTitle2:"&nbsp;",
        image      : "src/img/portfolio/webdesign/webdesign_5.png"
      },
      {
        projectId2:6,
        number:"-06",
        projectTitle1:"Kaarten",
        projectTitle2:"&nbsp;",
        image      : "src/img/portfolio/webdesign/webdesign_6.png"
      },
      {
        projectId2:7,
        number:"-07",
        projectTitle1:"Illustraties",
        projectTitle2:"&nbsp;",
        image      : "src/img/portfolio/webdesign/webdesign_7.png"
      },
      ]
    }
  },
  methods:{
    goTodetail(projId) {
      let proId=projId
      this.$router.push({name:'Details',params:{Pid:proId}})
    },

    goTodetail2(projId2) {
      let proId2=projId2
      this.$router.push({name:'Details2',params:{Pid2:proId2}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .portfolio {
    text-align:center;
    padding-top:70px!important;
  }

  hr {
    display:none;
    border: 1px solid rgba(255, 255, 255, 0.21);
    padding:0!important;
    margin:39px 0 49px 0;
  }

  .project:nth-child(odd) .proj-title, .project:nth-child(even) .proj-title{
    position: absolute;
    width:200px; height:210px;
    top:135px;
    text-align:left;
  }
 
  .project:nth-child(odd) .img{
    margin-left:255px;
  }

  .project:nth-child(even) .img{
    margin-left:-255px;
  }

  .project:nth-child(4) hr, .project:nth-child(6) hr{
    margin-top:80px;
    margin-bottom:80px;
    display:block;
  }
  .project:nth-child(7) {
    margin-bottom:80px;
  }
  .project:nth-child(-n+4) .btnShow2, .project:nth-child(n+5) .btnShow1, .project:nth-child(n+5) .btnShow2{
    display:none;
  }
  .project:nth-child(n+5) .btnShow2 {
    display:block;
  }

  h1 {
    width:190px;
    border-bottom: 3px solid currentColor;
    margin:0 auto 20px auto;
  }

  h2,h3 {
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
  }
  h2 {
    border: none;
    line-height:35px;
    letter-spacing: 2px;
  }
  h3 {
    font-size:1.6rem;
    margin-bottom:15px;
  }

  #space {
    margin-bottom:25px;
  }
  .btn-light {
    background-color:rgba(255, 255, 255, 0.35);
    color:white;
    font-size:10px;
    width:120px;
    padding:10px;
    border: 1px solid white;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }

/*---------------------------------------- Media Queries ----------------------------------------*/

@media (max-width: 576px) { 
  .project:nth-child(odd) .proj-title {
    left:30px;
  }
  .project:nth-child(odd) .img{
    margin-left:0;
    text-align:center;
  }

  .project:nth-child(even) .proj-title {
    left:30px;
  }
  .project:nth-child(even) .img{
    margin-left:0;
    text-align:center;
  }
}


/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 576px) { 
  .project:nth-child(odd) .proj-title {
    left:30px;
  }
  .project:nth-child(odd) .img{
    margin-left:80px;
    text-align:center;
  }

  .project:nth-child(even) .proj-title {
    left:390px;
  }
  .project:nth-child(even) .img{
    margin-left:-75px;
    text-align:center;
  }
}

@media (min-width: 768px) { 
  .project:nth-child(odd) .proj-title {
    left:210px;
  }
  .project:nth-child(odd) .img{
    margin-left:255px;
    text-align:center;
  }
  .project:nth-child(even) .proj-title {
    left:410px;
  }
  .project:nth-child(even) .img{
    margin-left:-255px;
    text-align:center;
  }
  img {
    width: 432px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .project:nth-child(odd) .proj-title {
    left:330px;
  }
  .project:nth-child(even) .proj-title {
    left:530px;
  }
  .project:nth-child(odd) .img{
    margin-left:255px;
    text-align:center;
  }

  .project:nth-child(even) .img{
    margin-left:-255px;
    text-align:center;
  }
  img {
    width: 432px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
   .project:nth-child(odd) .proj-title {
    left:420px;
  }
  .project:nth-child(odd) .img{
    margin-left:255px;
    text-align:center;
  }

  .project:nth-child(even) .proj-title {
    left:630px;
  }
  .project:nth-child(even) .img{
    margin-left:-125px;
    text-align:center;
    width:100%;
  }
  img {
    width: 432px;
  }
}

</style>