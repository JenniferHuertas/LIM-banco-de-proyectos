<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="button-wrapper">
        <span>{{getImages()}}</span>

      </div>
    </div>
  </div>
</template>

<script>
import getImages from '../unsplash';
// import { toJson } from 'unsplash-js';
// import unsplash from '../controller/unsplash';


export default {
  name: 'ListPhotos',
  props: {
    msg: String,
  },
  methods: {
    getImages,
  },
  created() {
    // getImages();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
