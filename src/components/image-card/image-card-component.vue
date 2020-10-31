<template src="./image-card-component.html"></template>

<script>
import ImagesMenu from "../image-menu/image-menu-component.vue";

export default {
/* eslint-disable */

  name: "images-list-main",
  data() {
    return {
      data: Object,
    }
  },
  props: {
  totalPages: Number,
  totalImages: Number
  },
    components: {
      ImagesMenu
    },
  methods: {
      fetchImages: function(totalPages, totalImages) {
  
          let api = `https://picsum.photos/v2/list?page=${totalPages}l&limit=${totalImages}`

          fetch(api)
          .then(response => response.json())

          .then(data => (
          this.data = data,
          console.log(data)

          ));
      },
  },
    created(){

    console.log("started")

    }
};

</script>

<style src="./image-card-component.css">

</style>
