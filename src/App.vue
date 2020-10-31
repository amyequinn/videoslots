<template>
  <div id="app">
    <h3 class="">Image Gallery</h3>
    <images-list-main/>


  </div>
</template>

<script>
import ImagesListMain from "./components/image-card/image-card-component.vue";

export default {
  name: "app",
  components: {
    ImagesListMain
  }
};
</script>

<style>
#app {
font-family: 'Avenir';
color: grey;
text-align: center;
}
</style>
