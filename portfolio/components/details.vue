<template>
    <div class="container details">
        <div v-for="(project,index) in projects" :key="index" class="detail-project">
            <div v-if="proId == project.projectId">

                <header>
                    <b-row>
                        <b-col xl="6" lg="6">
                            <h2>{{project.type}}</h2>
                            <h1 slot="projectTitle" v-html="project.projectTitle">{{project.projectTitle}}</h1>
                            <p>{{project.description}}</p>

                            <p>
                                <strong>Rol:</strong> {{project.role}} <br/>
                                <strong>Opdrachtgever:</strong> {{project.client}}<br/>
                                <strong>Talen:</strong> {{project.language}}<br/>
                                <strong id="cms">CMS:</strong> {{project.cms}}<br/>
                                <strong id="framework">Framework:</strong> {{project.framework}}<br/>
                            </p>

                            <a :href="project.href1" target="blank" class="btn-project"><button>BEKIJK PROJECT</button></a>
                            <a :href="project.href2" target="blank" class="btn-project"><button>GITHUB</button></a>
                        </b-col>
                    </b-row>
                </header>

                <section>
                    <b-row>
                        <b-col xl="6" lg="6" class="margin"><h3>{{project.title1}}</h3></b-col>
                        <b-col xl="6" lg="6"><p slot="trouble" v-html="project.trouble">{{project.trouble}}</p></b-col>
                    </b-row>

                    <hr>

                    <b-row>
                        <b-col xl="6" lg="6"><h3>{{project.title2}}</h3></b-col>

                        <b-col xl="6" lg="6">
                            <p>Om het project te laten slagen zullen de volgende doelen moeten worden bereikt:</p>
                            
                             <ol>
                                <!-- Loop through the goals array and put them in a list -->
                                <li v-for="goal in project.goals" v-bind:key="goal">{{goal.text}}</li>
                            </ol>
                           
                        </b-col>
                    </b-row>

                    <hr>

                    <b-row>
                        <b-col xl="12"><h3 class="center">Oplossing</h3></b-col>
                    </b-row>

                    <b-row class="projects">
                        <b-col xl="6" lg="6" class="imgLeft"><img :src="project.image1"></b-col>
                        <b-col xl="6" lg="6" class="block2">
                            <h3>{{project.titleRight1}}</h3>
                            <!-- <p>{{project.projectDescr1}}</p> -->

                            <p slot="projectDescr1" v-html="project.projectDescr1">{{project.projectDescr1}}</p>
                        </b-col>

                        <b-col xl="6" lg="6" class="block2">
                            <h3>{{project.titleLeft1}}</h3>
                            <p slot="projectDescr2" v-html="project.projectDescr2">{{project.projectDescr2}}</p>
                        </b-col>
                        <b-col xl="6" lg="6" class="imgRight"><img :src="project.image2"></b-col>

                        <b-col xl="6" lg="6" class="imgLeft"><img :src="project.image3"></b-col>
                         <b-col xl="6" lg="6" class="block2">
                            <h3>{{project.titleRight2}}</h3>
                            <p>{{project.projectDescr3}}</p>
                        </b-col>

                        <b-col xl="6" lg="6" class="block2">
                            <h3>{{project.titleLeft2}}</h3>
                            <p>{{project.projectDescr4}}</p>
                        </b-col>
                        <b-col xl="6" lg="6" class="imgRight"><img :src="project.image4"></b-col>

                        <b-col xl="6" lg="6" class="imgLeft"><img :src="project.image5"></b-col>
                        <b-col xl="6" lg="6" class="block2">
                            <h3>{{project.titleRight3}}</h3>
                            <p>{{project.projectDescr5}}</p>
                        </b-col>

                        <b-col xl="6" lg="6" class="block2">
                            <h3>{{project.titleLeft3}}</h3>
                            <p slot="projectDescr6" v-html="project.projectDescr6">{{project.projectDescr6}}</p>
                        </b-col>
                        <b-col xl="6" lg="6" class="imgRight"><img :src="project.image6"></b-col>
                    </b-row>
                </section>

            </div><!-- END v-if -->
        </div><!-- END v-for-->
    </div><!-- END container -->
</template>

<script>
	export default{
        name:'Details',
		data(){
			return{
				proId:this.$route.params.Pid,
                title:"Details",
				projects:[
                    {
                        projectId:1,
                        type:"webdesign • branding • ux",
                        projectTitle:"Bij Assie",
                        description:"Een webapplicatie over de vintage winkel Bij Assie, waar je eenvoudig een workshop kunt reserveren via een reserveringssysteem.",
                        role:"Ontwerp, front-end + back-end",
                        client:"Bij Assie",
                        language: "HTML5, CSS, PHP",
                        cms: "Zelf gemaakt CMS systeem",
                        framework: "-",
                        href1: "https://stud.hosted.hr.nl/0942533/Bij-Assie/",
                        href2: "https://github.com/0942533/Bij-Assie",
                        title1:"Probleemstelling",
                        trouble:"Bij Assie is een beginnend bedrijf en zou graag een webapplicatie willen waarmee de opdrachtgever gemakkelijker reserveringen kan bijhouden en klanten gemakkelijker een reservering mee kunnen plaatsen.<br /><br /> Momenteel wordt bij de concurrenten van Bij Assie, de reserveringen in de meeste gevallen telefonisch gedaan. Hier zitten een hoop nadelen aan vast. De afspraken en gegevens worden vaak genoteerd in een agenda. Bij wijzigingen kan het al snel onoverzichtelijk worden en gevoelig voor fouten. Ook kan het voorkomen dat bijvoorbeeld door drukte, de telefoon niet beantwoord kan worden. Dit kan ervoor zorgen dat je een klant misloopt. Vooral bij een beginnend bedrijf heb je deze inkomsten hard nodig. ",
                        title2:"Doelen",
                        goals: [
                            { text: "De web applicatie straalt de vintage stijl uit." },
                            { text: "De opdrachtgever krijgt gemakkelijker een overzicht van het aantal geplaatste reserveringen." },
                            { text: "De opdrachtgever kan gemakkelijker een reservering toevoegen, verwijderen en aanpassen." },
                            { text: "De bezoeker kan op de webapplicatie terecht voor informatie over de winkel Bij Assie en de workshops." },
                            { text: "De bezoeker kan in een paar duidelijke en simpele stappen een reservering plaatsen voor een worshop." }
                        ],
                        
                        image1      : "src/img/portfolio/webdesign/web_2_1.png",
                        titleRight1:"Logo",
                        projectDescr1: "Om in beeld te blijven bij de potentiële klant is herkenbaarheid erg belangrijk. Hiervoor heb ik een logo ontworpen dat een goed beeld geeft van het bedrijf Bij Assie. Zo wordt in het logo duidelijk dat je bij Bij Assie terecht kunt voor koffie, thee en meubels en dit in een vintage stijl.",
                        
                        image2     : "src/img/portfolio/webdesign/web_2_2.png",
                        titleLeft1:"Uitstraling",
                        projectDescr2: "Voor de vintage uitstraling heb ik gebruik gemaakt van vintage beelden. Aan deze beelden is een bruine overlay toegevoegd. Hierdoor lijken de beelden nog ouder en krijgen ze een warmere sfeer. Als achtergrond is er gebruik gemaakt van de oude stof jutte.",
                    
                        image3      : "src/img/portfolio/webdesign/web_2_3.png",
                        titleRight2: "Reserveringsoverzicht",
                        projectDescr3:"In de webapplicatie is een pagina geïmplementeerd met een overzichtelijke tabel waarin alle geplaatste reserveringen terug te vinden zijn. Deze is uiteraard alleen te bereiken door de personen die beschikken over de juiste inloggegevens.",
                    
                        image4       : "src/img/portfolio/webdesign/web_2_4.png",
                        titleLeft2: "CMS systeem",
                        projectDescr4: "Voor het bijhouden van de reserveringen is een CMS systeem ontwikkeld. Hierdoor kan de opdrachtgever overzichtelijk en snel een reservering aanpassen, verwijderen en toevoegen.",
                    
                        image5       : "src/img/portfolio/webdesign/web_2_5.png",
                        titleRight3: "Informatie",
                        projectDescr5: "Onder het kopje ‘onze winkel’ is meer informatie te vinden over wat de winkel Bij Assie voor je kan betekenen.",

                        image6     : "src/img/portfolio/webdesign/web_2_6.png",
                        titleLeft3: "Reservering plaatsen",
                        projectDescr6: "De klant kan met behulp van een formulier binnen enkele stappen een reservering plaatsen. Bij het formulier is er rekening gehouden met de hoeveelheid informatie die de klant moet invullen. Zo is er gebruik gemaakt van placeholders. Hierdoor bespaart de klant tijd en frustratie."
                    },

                    {
                        projectId:2,
                        type:"webdesign",
                        projectTitle:"Lotties",
                        description:"Een webapplicatie met de leukste gelegenheidskaarten en een volledig CRUD systeem.",

                        role:"Ontwerp, front-end + back-end",
                        client:"Hogeschool Rotterdam",
                        language: "HTML5, Sass, PHP, Javascript",
                        cms: "Zelf gemaakt CMS systeem",
                        framework: "Laravel",
                        href1: "https://youtu.be/qEBe6Ddwab8",
                        href2: "https://github.com/0942533/PRG05-Lotties",

                        title1:"Opdracht",
                        trouble:"Van de Hogeschool Rotterdam heb ik de volgende opdracht gekregen: maak een zelfgekozen webapplicatie met behulp van een MVC framework.",
                        
                        title2:"Doelen",
                         goals: [
                            { text: "Inloggen: bepaalde functionaliteit is afgeschermd voor alleen ingelogde gebruikers." },
                            { text: "Verschillende rollen: 1.Admin rol, 2.Gebruiker rol." },
                            { text: "Verschillende rechten: Admin deel is alleen toegangelijk voor ingelogde admin. De gebruiker heeft eigen afgeschermde deel waarin hij zijn gegevens kan aanpassen."},
                            { text: "Zoekveld met vrije tekst, zoekt in meerdere kolommen en een filtermogelijkheid door middel van een dropdownlist." },
                            { text: "Beveiliging: OWASP top 10." },
                        ],

                        image1      : "src/img/portfolio/webdesign/web_3_1.png",
                        titleRight1:"MVC framework Laravel",
                        projectDescr1: "Ik heb besloten om een kaarten webapplicatie met behulp van het MVC framework Laravel te maken. Voordat ik dit had besloten heb ik eerst onderzoek gedaan naar diverse MVC frameworks. <a href='src/img/MVC framework onderzoek.pdf' target='blank'>Klik hier</a> om het onderzoek te bekijken.",
                   
                        image2      : "src/img/portfolio/webdesign/web_3_2.png",
                        titleLeft1: "Rechten admin",
                        projectDescr2:"Alleen de admin beschikt over de juiste inloggegevens om de dashboard pagina te kunnen bereiken. Onbevoegden zullen worden teruggestuurd(geredirect) naar de login pagina. Op de dashboard pagina is een tabel te vinden van alle bestellingen. De admin kan een kaart toevoegen, verwijderen en aanpassen.",

                        image3      : "src/img/portfolio/webdesign/web_3_3.png",
                        titleRight2: "Rechten gebruiker",
                        projectDescr3: "De 'editProfile' pagina is alleen door gebruikers te bereiken door een combinatie van de juiste inloggegevens. Onbevoegden zullen worden teruggestuurd(geredirect) naar de login pagina. Uiteraard zijn de gegevens gekoppeld aan een gebruiker met behulp van een id en sessions. Dit zorgt ervoor dat een gebruiker alleen bij zijn eigen gegevens kan en er geen fraude kan worden gepleegd.",
                        
                        image4       : "src/img/portfolio/webdesign/web_3_4.png",
                        titleLeft2: "Zoekmogelijkheden",
                        projectDescr4: "Op de 'dashboard' pagina(deze is alleen te bereiken door de admin) is een tabel te vinden met alle kaart bestellingen. De admin kan hier gemakkelijk filteren op een categorie door middel van een dropdownlist. Daarnaast kan de admin ook gemakkelijk een specifiek onderdeel zoeken met behulp van het het zoekveld met vrije tekst.",

                        image5       : "src/img/portfolio/webdesign/web_3_5.png",
                        titleRight3: "Beveiliging",
                        projectDescr5: "Uiteraard is de webapplicatie beschermt tegen sql-injecties, XSS injecties, broken authentication, sensitive data exposure et cetera. Dit is allemaal verwerkt in de code die te zien is op GitHub."
                   },

                    {
                        projectId:3,
                        type:"full stack",

                        projectTitle:"Cartoons",
                        description:"Een webapplicatie met een cartoons API en een volledig CRUD Systeem.",

                        role:"Ontwerp, front-end + back-end",
                        client:"Hogeschool Rotterdam",
                        language: "HTML5, CSS, JSON, Javascript",
                        cms: "-",
                        framework:"Vue.js",
                        href1: "https://youtu.be/fIZUq8GPuHc",
                        href2: "https://github.com/0942533/PRG06-cartoons",

                        title1:"Opdracht",
                        trouble:"Van de Hogeschool Rotterdam kreeg ik de volgende opdracht: Maak een webapplicatie(één pagina), met behulp van een front-end Javascript framework.",
                        
                        title2:"Doelen",
                        goals: [
                            { text: "Op de pagina is het mogelijk om een overzicht van de items in een RESTful webservice te bekijken." },
                            { text: "Het overzicht is een lijst zonder alle deatils van de items." },
                            { text: "De details van een item kun je bekijken door het openklappen van een lijst." },
                            { text: "De items moeten te bewerken zijn(CRUD)." },
                        ],

                        image1      : "src/img/portfolio/webdesign/web_4_1.png",
                        titleRight1:"Framework Vue",
                        projectDescr1: "Ik heb besloten om een webapplicatie over cartoons te maken met het framework Vue. Van onze docent kregen we het advies om gebruik te maken van het framework Vue. Volgens onze docent bevat Vue goede bruikbare documentatie, waardoor het framework al snel goed te begrijpen is. Aangezien ik nog niet eerder met een Javascript front-end framework had gewerkt, leek het mij verstandig om dit advies te volgen.",
                        
                        image2     : "src/img/portfolio/webdesign/web_4_2.png",
                        titleLeft1:"API",
                        projectDescr2: "Vooraf aan dit project heb ik een eigen API gebouwt en deze gekoppelt aan een server. Vervolgens heb ik deze gegevens opgehaalt en uitgelezen in de webapplicatie. De code van de API is te vinden op <a href='https://github.com/0942533/PRG06-API' target='blank'>GitHub.</a>",

                        image3     : "src/img/portfolio/webdesign/web_4_3.png",
                        titleRight2:"Openklapbare lijst",
                        projectDescr3:"Elk cartoon item bevat een openklapbare lijst, waardoor je de details van de specifieke cartoon kunt bekijken.",

                        image4     : "src/img/portfolio/webdesign/web_4_4.png",
                        titleLeft2: "CRUD systeem",
                        projectDescr4: "Aan de lijst met cartoons is een CRUD systeem toegevoegd. Hierdoor is het mogelijk om een cartoon toe te voegen, uit te lezen, te updaten en te verwijderen."
                    },

                    {
                        projectId:4,
                        type:"webdesign • branding • ux",

                        projectTitle:"CherLloyd_dutch",
                        description:"Een webapplicatie met het laatste nieuws, muziek, foto’s en video’s van de geweldige zangeres, rapper en songwriter genaamd Cher Lloyd.",
                        role:"Ontwerp, front-end + back-end",
                        client:"Eigen project",
                        language: "HTML5, CSS, PHP, Javascript",
                        cms: "Wordpress",
                        framework: "-",
                        // href1: "",
                        // href2: "",
                        title1:"Probleemstelling",
                        trouble: "De artiest genaamd Cher Lloyd is in vele delen van de wereld nog vrijwel onbekend. Uit onderzoek is gebleken dat dit te maken heeft met de manier waarop Cher Lloyd wordt gepromoot. Zo zijn bijvoorbeeld vele websites over Cher Lloyd verouderd. Dit heeft als gevolg dat zowel de oude als de nieuwe fans geen plek hebben waar ze terecht kunnen voor informatie over Cher Lloyd.",
                        title2:"Doelen",
                        goals: [
                            { text: "Promotie(internationaal) artiest Cher Lloyd verbeteren." },
                            { text: "Fans op de hoogte houden van het laatste nieuws, muziek, foto's en concerten." },
                            { text: "Fans een betrokken gevoel geven." },
                            { text: "Het promotiemiddel moet de persoonlijkheid van Cher Lloyd uistralen." }
                        ],

                        image1       : "src/img/portfolio/webdesign/web_1_1.png",
                        titleRight1:"Verbeteren promotie",
                        projectDescr1: "Ik heb besloten om hiervoor een webapplicatie te ontwikkelen. Waarom? Uit onderzoek is gebleken dat de meeste fans van Cher Lloyd tussen de 14 en 21 jaar oud zijn. Deze doelgroep wordt ook wel ‘jongeren' genoemd. De jongeren leven tegenwoordig in de media. Vraag ze of hun Facebook-vrienden ook hun echte vrienden zijn en ze kijken je verbaasd aan. Voor jongeren is er bijna geen scheiding meer tussen de offline en online wereld. Daarom is een webapplicatie ook een perfect hulpmiddel om deze doelgroep te bereiken.",
                        
                        image2     : "src/img/portfolio/webdesign/web_1_2.png",
                        titleLeft1:"Extra promotie",
                        projectDescr2: "Ter promotie van de website heb ik een sweater en stickers ontworpen en deze laten drukken.",

                        image3      : "src/img/portfolio/webdesign/web_1_3.png",
                        // titleRight2: "",
                        // projectDescr3:"",

                        image4       : "src/img/portfolio/webdesign/web_1_4.png",
                        titleLeft2: "Fans op de hoogte houden",
                        projectDescr4: "Op de webapplicatie worden verschillende items aangeboden zoals nieuws, muziek/video's en een gallerij met de laatste foto's van Cher Lloyd.",

                        image5       : "src/img/portfolio/webdesign/web_1_5.png",
                        titleRight3: "Betrokkenheid",
                        projectDescr5: "Fans van Cher Lloyd zijn zoveel mogelijk bij het ontwikkel proces betrokken. Hierdoor heb ik samen met hen een plek kunnen creëeren waar een gevoel van eenheid ontstaat.",

                        image6     : "src/img/portfolio/webdesign/web_1_6.png",
                        titleLeft3: "Persoonlijkheid Cher Lloyd",
                        projectDescr6: "De video op de homepagina van de webapplicatie, geeft een goed beeld van wie Cher Lloyd precies is en wat zij doet. Daarnaast is er in de applicatie een tijdlijn te vinden met alle belangrijke punten uit Cher Lloyd's carrière. Hierdoor zullen vooral de nieuwe fans het gevoel krijgen dat ze niets hebben gemist. <br /><br /> <strong>Kleuren</strong> <br /> Cher Lloyd is een vrouwelijke artiest. Daarom is er in de webapplicatie gebruik gemaakt van de kleur paars. Dit straalt namelijk vrouwelijkheid uit. Daarnaast is er uit onderzoek gebleken dat het grootste deel van de fans van Cher Lloyd vrouwen zijn."
                   }
				]
			}
		}	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        background-image:url('/src/img/portfolio/webdesign/web_header_1.png');
        background-size:110%;
        background-repeat:no-repeat;
        width:100%;
        min-height:50vh;
    }

    header, section {
        padding:60px;

    }

    section {
        background-color:rgba(255, 255, 255, 0.09);
    }

    .detail-project:nth-child(4) .btn-project{
        display:none;
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

/*---------------------------------------- Media Queries ----------------------------------------*/

@media (max-width: 576px) { 
  header {
    background-size:900%;
  }

  .imgRight, .imgLeft {
      text-align:center;
  }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 576px) { 
  header {
    background-size:230%;
  }

  .imgRight, .imgLeft {
      text-align:center;
  }
}

@media (min-width: 768px) { 
  header {
    background-size:160%;
  }

  .imgRight, .imgLeft {
      text-align:center;
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