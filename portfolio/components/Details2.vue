<template>
    <div class="container details2">
        <div v-for="(project,index) in projects" :key="index">
            <div v-if="proId2 == project.projectId2">
                <header>
                    <b-row>
                        <b-col xl="6">
                            <h2>{{project.type}}</h2>
                            <h1 slot="projectTitle" v-html="project.projectTitle">{{project.projectTitle}}</h1>
                            <p>{{project.description}}</p>

                            <p>
                                <strong>Rol:</strong> {{project.role}} <br/>
                                <strong>Opdrachtgever:</strong> {{project.client}}<br/>
                                <strong>Programma:</strong> {{project.program}}<br/>
                            </p>
                        </b-col>
                    </b-row>
                </header>

                <section>
                    <b-row>
                        <b-col xl="12">
                            <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
                                <slide>
                                <img :src="project.image1">
                                </slide>
                                <slide>
                                    <img :src="project.image2">
                                </slide>
                                 <slide>
                                    <img :src="project.image3">
                                </slide>
                            </carousel>
                        </b-col>
                    </b-row>
                </section>
                
            </div>
        </div>
    </div> 
   
</template>

<script>
	export default{
        name:'Details2',
		data(){
			return{
				proId2:this.$route.params.Pid2,
                title:"Details2",
				projects:[
                    {
                        projectId2:5,
                        type:"Grafisch design",
                        projectTitle:"Posters",
                        description:"Door de jaren heen heb ik een aantal posters ontworpen voor speciale gelegenheden.",

                        role:"Ontwerp, drukwerk, illustratie",
                        client:"Eigen projecten",
                        program:"Illustrator",

                        image1      : "src/img/portfolio/webdesign/grafisch_1_1.png",
                        image2      : "src/img/portfolio/webdesign/grafisch_1_2.png",
                        image3      : "src/img/portfolio/webdesign/grafisch_1_3.png"
                    },
                    {
                        projectId2:6,
                        type:"Grafisch design",
                        projectTitle:"Kaarten",
                        description:"Door de jaren heen heb ik een aantal kaarten ontworpen om de perfect verjaardag, moederdag of vaderdag te creëren.",

                        role:"Ontwerp, drukwerk, illustratie",
                        client:"Eigen projecten",
                        program:"Illustrator, Photoshop",

                        image1      : "src/img/portfolio/webdesign/grafisch_2_1.png",
                        image2      : "src/img/portfolio/webdesign/grafisch_2_2.png",
                        image3     : "src/img/portfolio/webdesign/grafisch_2_3.png"
                    },

                    {
                        projectId2:7,
                        type:"Illustraties",
                        projectTitle:"Illustraties",
                        description:"Door de jaren heen heb ik een aantal illustraties gemaakt voor diverse gelegenheden.",
                        program:"Illustrator, Photoshop",

                        role:"Ontwerp",
                        client:"Eigen projecten",

                        image1      : "src/img/portfolio/webdesign/illustratie_1_1.png",
                        image2      : "src/img/portfolio/webdesign/illustratie_1_2.png",
                        image3     : "src/img/portfolio/webdesign/illustratie_1_3.png"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    header {
        background-image:url('/src/img/portfolio/webdesign/web_header_1.png');
        background-size:110%;
        background-repeat:no-repeat;
        width:100%;
        min-height:30vh;
    }

    header, section {
        padding:60px;

    }

    img {
        width:80%;
    }

    .VueCarousel-slide {
        margin:0 auto;
        text-align:center;
    }

    section {
        background-color:rgba(255, 255, 255, 0.09);
    }

    h1 {
        margin-bottom:30px;
    }
    h2 {
        letter-spacing: 3px;
        font-weight:bold;
        /* margin-bottom:10px; */
        font-family: 'Amatic SC', cursive;
        font-size:1.4rem;
    }
    h3 {
        font-size:1.5rem;
        font-family:"Bebas Neue W05 Regular";
        letter-spacing: 7px;
    }
    p {
        font-size:0.75rem;
        letter-spacing: 0.1rem;
        /* margin-bottom:30px; */
    }
    button {
        background-color:rgba(255, 255, 255, 0.35);
        color:white;
        font-size:10px;
        width:120px;
        padding:10px;
        margin-right:20px;
        margin-top:20px;
        border: 1px solid white;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 1px;
    }

/*---------------------------------------- Media Queries ----------------------------------------*/

@media (max-width: 576px) { 
  header {
    background-size:900%;
  }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 576px) { 
  header {
    background-size:230%;
  }
}

@media (min-width: 768px) { 
  header {
    background-size:160%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  header {
    background-size:125%;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 

}
</style>
