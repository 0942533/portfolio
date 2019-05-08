<template>
     <div id="WebdesignDetail">
      <h1>WebdesignDetail</h1>
        <square
            v-for="data in myJson"
            v-bind:key="data.text"
            v-bind:text="data.text"
            v-bind:size="data.size"
            v-bind:color="data.color"
        />
    </div>
</template>

<script>
import square from './components/projects/webdesign/WebdesignTemplate.vue'
import json from '../src/json/data.json'

export default {
  name: 'WebdesignDetail',
  data(){
    return{
      myJson: json
    }
  },
  components: {
    square
  }
}
</script>