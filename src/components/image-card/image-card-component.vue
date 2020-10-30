<template>
<div class="form-class">
  <form>
  <label for="cars">Choose how many images to display:</label>
  <select name="pages" class="form-control" id="pageNumbers">
  <option>--- Select Maximum Pages ---</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
</div>
      <div class="container image-list">
      </div>

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

<style>

.image-list{
  border-width: 0;
  border-style: solid;
  border-color: grey;
  box-sizing: inherit;

}
.container{
width: calc(100vw);
}

@media(min-width: 1200px){
.container{
max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
}

@media (min-width: 992px){
.container{
  padding-top: 30px;
  flex-wrap: wrap;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
}

@media (min-width: 768px){
.container{
  flex-wrap: wrap;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
}


.image-element{
width: 30%;
margin-left: 1rem;
margin-right: 1rem;
text-align: center;
margin-bottom: 2rem;
border-width: 0;
border-style: solid;
border-color: grey;
box-sizing: inherit;
display: block;
overflow: hidden;
border-radius: .25rem;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}


@media (max-width: 992px){
.image-element{
  width: 40%;
}
}
@media (max-width: 768px){
.image-element{
  width: 100%;
}
}

</style>
