<template>
  <!-- Ensures the text appears next to the sidebar-menu -->
  <div id="portfolio" :class="[{'collapsed' : collapsed}]">
    
      <!-- Implements pages in a container -->
      <div class="container">
        <router-view />

        <!-- <square
          v-for="data in myJson"
          v-bind:key="data.text"
          v-bind:text="data.text"
          v-bind:size="data.size"
          v-bind:color="data.color"
        /> -->
      </div>

      <!-- Implements sidebar-menu-->
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :show-one-child="true"
        @collapse="onCollapse"
      />
  </div> <!-- End menu -->

  
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        // myJson: json,
        menu: [
          {
            href: '/',
            title: 'Over mij',
            icon: 'fa fa-user'
          },
          {
            href: '/services',
            title: 'Diensten',
            icon: 'fa fa-clipboard-list'
          },
          {
            href: '/portfolio',
            title: 'Portfolio',
            icon: 'fa fa-palette'
          },
          {
            href: '/contact',
            title: 'Contact',
            icon: 'fa fa-address-book'
          },
        ],
        collapsed: true
      }
    },
    methods: {
      onCollapse (collapsed) {
        console.log(collapsed)
        this.collapsed = collapsed
      }
     }//,
    // components: {
    //   square
    // }
  }

  // import square from './components/projects/webdesign/WebdesignTemplate.vue'
  // import json from '../src/json/data.json'
</script>

<style lang="scss" scoped>
  body,
  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  div.container {
    // background-color:Red;
    width:100%!important;
    min-height:200px;
    padding:0;
  }

  #portfolio {
    // padding-top:70px;
    padding-left: 350px;
  }
  #portfolio.collapsed {
    padding-left: 50px;
  }
</style>
