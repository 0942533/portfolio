<template>
    <div class="container details">
        <div v-for="(project,index) in projects" :key="index">
            <div v-if="proId == project.projectId">

                <header>
                    <b-row>
                        <b-col xl="6">
                            <h2>{{project.type}}</h2>
                            <h1>{{project.projectTitle}}</h1>
                            <p>{{project.description}}</p>

                            <p>
                                <strong>Jaar:</strong> {{project.year}} <br/>
                                <strong>Rol:</strong> {{project.role}} <br/>
                                <strong>Opdrachtgever:</strong> {{project.client}}<br/>
                                <strong>CMS:</strong> {{project.cms}}<br/>
                            </p>

                            <button>BEKIJK PROJECT</button>
                            <button>GITHUB</button>
                        </b-col>
                    </b-row>
                </header>

                <section>
                    <b-row>
                        <b-col xl="6" class="margin"><h3>{{project.title1}}</h3></b-col>
                        <b-col xl="6"><p>{{project.trouble}}</p></b-col>
                    </b-row>

                    <hr>

                    <b-row>
                        <b-col xl="6"><h3>{{project.title2}}</h3></b-col>

                        <b-col xl="6">
                            <p>Om het project te laten slagen zullen de volgende doelen moeten worden bereikt:</p>
                            
                             <ol>
                                <!-- Loop through the goals array and put them in a list -->
                                <li v-for="goal in project.goals" v-bind:key="goal">{{goal.text}}</li>
                            </ol>
                           
                        </b-col>
                    </b-row>

                    <hr>

                    <b-row>
                        <b-col xl="12"><h3 class="center">{{project.title3}}</h3></b-col>
                    </b-row>

                    <b-row class="projects">
                        <b-col xl="6" class="imgLeft"><img :src="project.image1_1"></b-col>
                        <b-col xl="6" class="block2">
                            <h3>{{project.titleRight1}}</h3>
                            <p>{{project.projectDescr1}}</p>
                        </b-col>

                        <b-col xl="6" class="block2">
                            <h3>{{project.titleLeft1}}</h3>
                            <p>{{project.projectDescr2}}</p>
                        </b-col>
                        <b-col xl="6" class="imgRight"><img :src="project.image1_2"></b-col>

                        <b-col xl="6" class="imgLeft"><img :src="project.image1_3"></b-col>
                        <b-col xl="6" class="block2"></b-col>

                        <b-col xl="6" class="block2">
                            <h3>{{project.titleLeft2}}</h3>
                            <p>{{project.projectDescr3}}</p>
                        </b-col>
                        <b-col xl="6" class="imgRight"><img :src="project.image1_4"></b-col>

                        <b-col xl="6" class="imgLeft"><img :src="project.image1_5"></b-col>
                        <b-col xl="6" class="block2">
                            <h3>{{project.titleRight2}}</h3>
                            <p>{{project.projectDescr4}}</p>
                        </b-col>

                        <b-col xl="6" class="block2">
                            <h3>{{project.titleLeft3}}</h3>
                            <p>{{project.projectDescr5}}</p>
                        </b-col>
                        <b-col xl="6" class="imgRight"><img :src="project.image1_6"></b-col>
    
                    </b-row>


                </section>

            </div><!-- END v-if -->
        </div><!-- END v-for-->
    </div><!-- END container -->
</template>

<script>
	export default{
        name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
                title:"details",
				projects:[
                    {
                        projectId:1,
                        type:"webdesign • branding • ux",
                        projectTitle:"CherLloyd_dutch",
                        description:"Een web applicatie met het laatste nieuws, muziek, foto’s en video’s van de geweldige zangeres, rapper en songwriter genaamd Cher Lloyd.",
                        year: "2017",
                        role:"Ontwerp, front-end + back-end",
                        client:"Eigen project",
                        language: "HTML5, CSS, PHP, Javascript",
                        cms: "Wordpress",
                        title1:"Probleemstelling",
                        trouble: "De artiest genaamd Cher Lloyd is in vele delen van de wereld nog vrijwel onbekend. Uit onderzoek is gebleken dat dit te maken heeft met de manier waarop Cher Lloyd wordt gepromoot. Zo zijn bijvoorbeeld vele websites over Cher Lloyd verouderd. Dit heeft als gevolg dat zowel de oude als de nieuwe fans geen plek hebben waar ze terecht kunnen voor informatie over Cher Lloyd.",
                        title2:"Doelen",
                        goals: [
                            { text: "Promotie(internationaal) artiest Cher Lloyd verbeteren." },
                            { text: "Fans op de hoogte houden van het laatste nieuws, muziek, foto's en concerten." },
                            { text: "Fans een betrokken gevoel geven." },
                            { text: "Het promotiemiddel moet de persoonlijkheid van Cher Lloyd uistralen." }
                        ],
                        title3:"Oplossing",

                        image1_1       : require('../images/portfolio/webdesign/web_1_1.png'),
                        titleRight1:"Verbeteren promotie",
                        projectDescr1: "Ik heb besloten om hiervoor een webapplicatie te ontwikkelen. Waarom? Uit onderzoek is gebleken dat de meeste fans van Cher Lloyd tussen de 14 en 21 jaar oud zijn. Deze doelgroep wordt ook wel ‘jongeren' genoemd. De jongeren leven tegenwoordig in de media. Vraag ze of hun Facebook-vrienden ook hun echte vrienden zijn en ze kijken je verbaasd aan. Voor jongeren is er bijna geen scheiding meer tussen de offline en online wereld. Daarom is een webapplicatie ook een perfect hulpmiddel om deze doelgroep te bereiken.",
                        
                        image1_2       : require('../images/portfolio/webdesign/web_1_2.png'),
                        titleLeft1:"Extra promotie",
                        projectDescr2: "Ter promotie van de website heb ik een sweater en stickers ontworpen en deze laten drukken.",

                        image1_3       : require('../images/portfolio/webdesign/web_1_3.png'),

                        image1_4       : require('../images/portfolio/webdesign/web_1_4.png'),
                        titleLeft2: "Fans op de hoogte houden",
                        projectDescr3: "Op de web applicatie worden verschillende items aangeboden zoals nieuws, muziek/video's en een gallerij met de laatste foto's van Cher Lloyd.",

                        image1_5       : require('../images/portfolio/webdesign/web_1_5.png'),
                        titleRight2: "Betrokkenheid",
                        projectDescr4: "Fans van Cher Lloyd zijn zoveel mogelijk bij het ontwikkel proces betrokken. Hierdoor heb ik samen met hen een plek kunnen creëeren waar een gevoel van eenheid ontstaat.",

                        image1_6       : require('../images/portfolio/webdesign/web_1_6.png'),
                        titleLeft3: "Persoonlijkheid Cher Lloyd",
                        projectDescr5: "De video op de homepagina van de web applicatie, geeft een goed beeld van wie Cher Lloyd precies is en wat zij doet. Daarnaast is er in de applicatie een tijdlijn te vinden met alle belangrijke punten uit Cher Lloyd's carrière. Hierdoor zullen vooral de nieuwe fans het gevoel krijgen dat ze niets hebben gemist."
                   },

                    {
                        projectId:2,
                        projectTitle:"Ik ben project 2",
                    
                        
                    }
				]
			}
		}	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        background-image:url('/portfolio/images/portfolio/webdesign/web_header_1.png');
        background-size:110%;
        background-repeat:no-repeat;
        width:100%;
        min-height:50vh;
        background-color:red;
    }

    header, section {
        padding:60px;

    }

    section {
        background-color:rgba(255, 255, 255, 0.09);
        min-height:800px;
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
    hr {
        border: 1px solid rgba(255, 255, 255, 0.21);
        /* margin-bottom:40px; */
        padding:0!important;
        margin:39px 0 49px 0;
    }

    ol {
        margin-left:-30px;
    }

    .center {
        text-align:center;
        border-bottom: 3px solid currentColor;
        width:140px;
        margin:0 auto;
    }

    .imgLeft {
        /* background-color:red; */
    }
    .imgRight {
        /* background-color:gray; */
        text-align:right;
    }
   
    .block2 {
        /* background-color:blue; */
        padding-top:50px!important;
    }

    .imgLeft p, .imgRight p, .block2 p {
        margin:0;
    }

    .projects img {
        width:90%;
        padding-top:60px;
    }

    .col-xl-6 {
        padding:0;
    }

    .margin{
        /* margin-left:15px!important; */
    }

    .row {
        margin:0;
    }

</style>