<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div>
        <button @click="getImages()">Imagenes</button>

      </div>
      <!-- <Stack
      :column-min-width="300"
      :gutter-width="15"
      :gutter-height="15"
      monitor-images-loaded
      >
      <Stack-Item
      v-for="(image, i) in images"
      :key="i"
      style="trasition: transform 300ms"
      >
      <img :src="image.urls.small" :alt="image.alt_description"/>
      </Stack-Item>
      </Stack> -->
    </div>
  </div>
</template>

<script>
// import { Stack, StackItem } from 'vue-stack-grid';
import getImages from '../unsplash';

export default {
  name: 'ListPhotos',
  props: {
    msg: String,
  },
  components: {
    // Stack,
    // StackItem,
  },
  methods: {
    getImages,
  },
  // created() {
  //   getImages();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
img {
  width: 300px;
  height: 225px;
  margin: 10px;
}
.container {
  width: 80vw;
  margin: 0 auto;
}
</style>
