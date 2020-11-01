<template>
  <section id="app">
    <div class="header">
    <h3 class="">Image Gallery</h3>
    </div>
    <images-list-main/>
  </section>
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
body{
background: #9bc4bc;
padding:0px;
margin:0px;

}
.header{
font-family: 'Avenir';
background: #d3ffe9;
color: #4b5043;
font-size: 2rem;
text-align: center;
display: flex;
justify-content: center;
margin-left: 0 auto;




}
</style>
