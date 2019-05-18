<template>
  <div v-if="item">
    <template v-if="isRouterLink">
      <router-link
        class="vsm-link"
        :to="item.href"
      >
        <!-- Show icons -->
        <i
          v-if="item.icon"
          class="vsm-icon"
          :class="item.icon"
        />
      
        <!-- Show titles -->
        {{ item.title }}
        
      </router-link>
    </template>
  </div>
</template>

<script>
import { itemMixin } from '../mixin'

export default {
  mixins: [itemMixin],
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>
