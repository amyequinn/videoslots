<template src="./image-card-component.html">

</template>

<script>

export default {
/* eslint-disable */

  name: "images-list-main",
  data() {
    return {
      data: '',
      id: '',
      image: '',
      author: ''
    }
  },

  async created() {
      let imageElement, imageRow, imageAuthor, imageID, imageSrc, imageLink;

      let pageTotal = 2;
      let imageTotal = 10;
      console.log(pageTotal, imageTotal);
      let api = `https://picsum.photos/v2/list?page=${pageTotal}l&limit=${imageTotal}`
      await fetch(api)
      .then(response => response.json())

      .then(data => (
      console.log(data),
      data.forEach(el => {

        this.id = el.id,
        this.author = el.author,
        this.image = el.download_url,
        this.image = el.download_url.substring(0, this.image.length-9).concat('367/267'),

        imageElement = document.createElement('div'),
        imageElement.className = "image-element",
        imageRow = document.createElement('div'),
        imageRow.className = "row",
        imageAuthor = document.createElement('h4'),
        imageID = document.createElement('h4'),
        imageLink = document.createElement('a'),
        imageLink.setAttribute('target', '_blank'),
        imageLink.setAttribute('href', this.image),
        imageSrc = document.createElement('img'),
        imageSrc.setAttribute('src', this.image),
        imageSrc.className = 'img-circle',
        imageAuthor.innerHTML = this.author,
        imageID.innerHTML = this.id,
        imageLink.append(imageSrc),
        imageRow.append(imageLink),
        imageRow.append(imageAuthor),
        imageRow.append(imageID),
        imageElement.append(imageRow),
        document.querySelector('.image-list').append(imageElement)

      })
      ));
  }

};
</script>

<style src="./image-card-component.css">

</style>
