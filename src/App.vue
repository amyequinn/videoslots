<template>
  <section id="app">
  <container>
    <div class="header">
    <h3 class="">Image Gallery</h3>
    </div>
    <images-list-main/>
    </container>
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

}
.header{
font-family: 'Avenir';
background: #d3ffe9;
opacity: 75%;
color: #4b5043;
margin-top: 2rem!important;
font-size: 1.5rem;
text-align: center;
width: 85%;
display: flex;
justify-content: center;
margin: auto;


}
</style>
