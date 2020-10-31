<template src="./image-card-component.html">

</template>

<script>

export default {
/* eslint-disable */

  name: "images-list-main",
  data() {
    return {
      data: Object,
      totalPages: '',
      totalImages: ''

    }
  },
  methods: {
    handleClick: function(event){
    this.totalPages = event.target.value
    this.fetchImages()
    },
      fetchImages: function() {

          let imageTotal = 10;

          let api = `https://picsum.photos/v2/list?page=${this.totalPages}l&limit=${imageTotal}`
          fetch(api)
          .then(response => response.json())

          .then(data => (
          this.data = data

          ));

      }
  },


};

</script>

<style src="./image-card-component.css">

</style>
