export const itemMixin = {
  data () {
    return {
      active: false
    }
  },
  created () {
    this.active = this.item && this.item.href ? this.isLinkActive(this.item) : false
    if (this.item) {
        this.itemShow = this.isLinkActive(this.item) 
    }
  },
  methods: {
    isLinkActive (item) {
      if (this.$route) {
        return item.href === this.$route.path + this.$route.hash
      } else {
        return item.href === window.location.pathname + window.location.hash
      }
    },
  },
  computed: {
    isRouterLink () {
      return this.$router && this.item && this.item.href !== undefined
    },
    
  },
  watch: {
    $route () {
      this.active = this.item && this.item.href ? this.isLinkActive(this.item) : false
    }
  }
}

export const animationMixin = {
  methods: {
  }
}
