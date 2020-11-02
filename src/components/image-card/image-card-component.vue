<template src="./image-card-component.html"></template>

<script>
import ImagesMenu from "../image-menu/image-menu-component.vue";

export default {
  /* eslint-disable */

  name: "images-list-main",
  data() {
    return {
      data: Object,
      id: '',
      author: '',
      image: ''
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
    fetchImages: async function(totalPages, totalImages) {

      if(typeof totalPages === 'undefined' || typeof totalPages === 'function'){
      return
      }
      let api = `https://picsum.photos/v2/list?page=${totalPages}l&limit=${totalImages}`

      await fetch(api)
        .then(response => response.json())

        .then(data => (
          this.data = data,
          this.showItems(totalPages, totalImages)
        ));
    },
      showItems: async function(totalPages, totalImages){

            await(Promise)

            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');
            const imageList = document.querySelector('.gallery-items').children;
            const maxItem = totalImages / totalPages;
            const page = document.querySelector('.page-num');

            let index = 1;

            const pagination = Math.ceil(imageList.length/maxItem);



          const check = () => {
          if(index == pagination){
          next.classList.add('disabled');
          }
          else {
          next.classList.remove('disabled')
          }
          if( index == 1){
          prev.classList.add('disabled');
          }
          else {
          prev.classList.remove('disabled');
          }
          }

            const refreshImages = () => {
              for(let i =0; i< imageList.length; i++){
              imageList[i].classList.remove('show');
              imageList[i].classList.add('hide');
              if(i>=(index*maxItem)-maxItem && i<index*maxItem){
                imageList[i].classList.remove('hide');
                imageList[i].classList.add('show');
              }
              }
              page.innerHTML = index;

          }

          refreshImages();

        if(typeof totalPages === 'undefined' || typeof totalPages === 'function'){
      return
      }





          next.addEventListener('click', function(){
            index++;
            check();
            refreshImages();

          })
          prev.addEventListener('click', function(){

              index--;
              check();
              refreshImages();

          })
    },
  },
      async created(){
        await this.fetchImages();

        await this.showItems();



      }
};
</script>
<style src = "./image-card-component.css"></style>
