export const showHide = {
  data() {
    return {
      outline: true
    }
  },
  methods: {
    toggleShowHide() {
      this.outline = !this.outline;
    }
  }
}
