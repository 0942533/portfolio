<template>
  <div
    class="vsm-item"
    :class="[{'first-item' : firstItem}, {'active-item' : active}]"
    @mouseenter="mouseEnter($event)"
  >
    <template v-if="isRouterLink">
      <router-link
        class="vsm-link"
        :class="item.class"
        :to="item.href"
      >
        <i
          v-if="item.icon"
          class="vsm-icon"
          :class="item.icon"
        />
        
        <!-- If menu isn't collapsed -->
        <template v-if="!isCollapsed">
          <span class="vsm-title">{{ item.title }}</span>
        </template>
      </router-link>
    </template>
  </div>
</template>

<script>
import { itemMixin, animationMixin } from '../mixin'

export default {
  mixins: [itemMixin, animationMixin],
  props: {
    item: {
      type: Object,
      required: true
    },
    firstItem: {
      type: Boolean,
      default: false
    },
    isCollapsed: {
      type: Boolean
    }
  },
  // Mouse event hover slide
  methods: {
    mouseEnter (event) {
      if (this.isCollapsed && this.firstItem) {
        this.$parent.$emit('mouseEnterItem', {
          item: this.item,
          pos:
              event.currentTarget.getBoundingClientRect().top -
              this.$parent.$el.getBoundingClientRect().top,
          height: this.$el.offsetHeight
        })
      }
    }
  }
}
</script>
