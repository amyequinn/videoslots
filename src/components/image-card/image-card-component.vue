<template src="./image-card-component.html"></template>

<script>

export default {
/* eslint-disable */

  name: "images-list-main",
  data() {
    return {
      data: Object,
      totalPages: 2,
      totalImages: 50
    }
  },
  methods: {

    handlePages: function(event){
      this.totalPages = event.target.value
      console.log(this.totalPages)
      this.fetchImages()
    },

    handleImages: function(event){

      let inputValue = document.getElementById("imageNumbers").value;
      this.totalImages = inputValue;
      console.log(this.totalImages);
      this.fetchImages();
      },
      
      fetchImages: function() {

          let api = `https://picsum.photos/v2/list?page=${this.totalPages}l&limit=${this.totalImages}`
          fetch(api)
          .then(response => response.json())

          .then(data => (
          this.data = data,
          console.log(this.data)
          ));
      },
  },
    created(){
    this.fetchImages()
    }
};

</script>

<style src="./image-card-component.css">

</style>
