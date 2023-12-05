<script setup>
import Upload from './views/Upload.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="menu-bar">
    <a class="nav-item nav-link" href="#">
      <img src="./assets/images/file.png" alt="file">
    </a>
    <h1 class="title-nav">GoBox</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#"> About </a>
        <a class="nav-item nav-link" href="/upload">Upload</a>
        <a class="nav-item nav-link" href="#">Storage</a>
        <a class="nav-item nav-link" href="#">Record</a>
      </div>
    </div>
  </nav>
  <br>
  <br>
  
  <Upload/>

</template>

<style scoped>

a img {
  max-width: 100%; /* Set maximum width to 100% of the container */
  height: 50px; /* Maintain aspect ratio */
  width: 50x;
  display: block; /* Remove extra space below the image */
  padding: auto;
}

h1  {
  padding: 8px;
  padding-right: 30px;
}

.nav-item {
  font-size: 30px;
  padding: 10px;
}

#menu-bar {
  position: relative;
}

</style>

