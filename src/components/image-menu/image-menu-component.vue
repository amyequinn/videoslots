<template src ="./image-menu-component.html"></template>

<script>
import ImagesListMain from "../image-card/image-card-component.vue";

export default {
  /* eslint-disable */

  name: "images-menu",
  props: {
    method: {
      type: Function
    },
  },

  data() {
    return {
      totalPages: 5,
      totalImages: 50
    }
  },

  mounted() {
    this.$emit('send-data', this.totalPages, this.totalImages)
  },

  components: {
    ImagesListMain
  },

  methods: {
    handlePagesClick: function(event) {
      this.$emit('send-data', this.totalPages, this.totalImages)
    },

    handleImagesClick: function(event) {
      let total = document.getElementById('imageNumbers').value
      if (total > 0 && total <= 100) {
        this.$emit('send-data', this.totalPages, this.totalImages)
      } else {
        alert("1 - 100 only")
      }
    },
  },
};
</script>

<style src = "./image-menu-component.css"></style>
