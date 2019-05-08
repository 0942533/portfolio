<template>
  <div
    class="v-sidebar-menu"
    :style="{'width': sidebarWidth}"
    @mouseleave="mouseLeave"
  > 
    <!-- Button -->
     <button
      class="collapse-btn fas fa-arrows-alt-h"
      @click="toggleCollapse"
    />

    <!-- Show Menu items -->
    <div class="vsm-list">
      <template v-for="(item, index) in menu">
        <item
          :key="index"
          :item="item"
          :first-item="true"
          :is-collapsed="isCollapsed"
        />
      </template>
    </div>

    <!-- Hover slide animation position -->
    <div
      v-if="isCollapsed"
      :style="[{'position' : 'absolute'}, {'top' : `${mobileItemPos}px`}, rtl ? {'right' : '0px'} : {'left' : '0px'}, {'z-index' : 30}, {'width' : width}]"
    >
      <mobile-item :item="mobileItem" />

      <!-- Hover slide animation -->
      <transition name="slide-animation">
        <div
          v-if="mobileItem"
          class="vsm-mobile-bg"
          :style="[{'position' : 'absolute'}, {'left' : '0px'}, {'right' : '0px'}, {'top' : '0px'}, {'height' : `${mobileItemHeight}px`}]"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import MobileItem from './MobileItem.vue'
import { animationMixin } from '../mixin'

export default {
  name: 'SidebarMenu',
  components: {
    Item,
    MobileItem
  },
  mixins: [animationMixin],
  props: {
    menu: {
      type: Array,
      required: true
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '350px'
    },
    widthCollapsed: {
      type: String,
      default: '50px'
    },
    theme: {
      type: String,
      default: ''
    },
    rtl: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isCollapsed: this.collapsed,
      mobileItem: null,
      mobileItemPos: 0,
      mobileItemHeight: 0,
      closeTimeout: null,
      activeShow: null
    }
  },
  computed: {
    sidebarWidth () {
      return this.isCollapsed ? this.widthCollapsed : this.width
    }
  },
  created () {
    this.$on('mouseEnterItem', (val) => {
      this.mobileItem = null
      this.$nextTick(() => {
        this.mobileItem = val.item
        this.mobileItemPos = val.pos
        this.mobileItemHeight = val.height
      })
    })

    this.$on('touchClickItem', (clearCloseTimeout) => {
      if (clearCloseTimeout) {
        clearTimeout(this.closeTimeout)
        return
      }
      if (this.closeTimeout) clearTimeout(this.closeTimeout)
      this.closeTimeout = setTimeout(() => {
        this.mouseLeave()
      }, 600)
    })
  },
  methods: {
    mouseLeave () {
      this.mobileItem = null
    },
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed
      this.$emit('collapse', this.isCollapsed)
    },
    onActiveShow (uid) {
      this.activeShow = uid
    },
    onItemClick (event, item) {
      this.$emit('itemClick', event, item)
    }
  }
}
</script>

<style lang="scss">
@import '../scss/vue-sidebar-menu.scss';
</style>
