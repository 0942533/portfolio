<template>
    <b-container class="portfolio">
      <b-row>
        <b-col class="title animated fadeIn delay-1s" sm="12">
          <h1>{{title}}</h1>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="blue animated fadeIn delay-2s" v-for="(data,index) in projects" :key="index">
            <img :src="data.image">
            <div class="proj-title">
              <h3>{{data.number}}</h3>
              <h2>{{data.projectTitle1}}</h2>
              <h2 id="space">{{data.projectTitle2}}</h2>

              <button class="btn-light" @click="goTodetail(data.projectId)">BEKIJK PROJECT</button>
            </div>
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
        image     : require('../images/portfolio/webdesign/webdesign_1.png')
      },
      {
        projectId:2,
        number:"-02",
        projectTitle1:"Bij",
        projectTitle2:"Assie",
        image      : require('../images/portfolio/webdesign/webdesign_2.png')
      },
      ]
    }
  },
  methods:{
    goTodetail(projId) {
      let proId=projId
      this.$router.push({name:'details',params:{Pid:proId}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {
  text-align:center;
}

.proj-title {
  position: absolute;
  width:200px; height:210px;
  top:100px;
  left:420px;
  text-align:left;
  /* background-color:red; */
}
/* .proj-title:nth-child(even) {
  background-color:yellow;
} */

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

.row button{
  cursor:pointer;
}
</style>