<template>
  <div>
    <div class="container">
      <div class="button-wrapper">
        <input type="text">

      </div>
      <Stack
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
      </Stack>
    </div>
  </div>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid';

export default {
  name: 'SearchPhotos',
  components: {
    Stack,
    StackItem,
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {
    // searchUnsplash(query) {
    //   this.images = [];
    //   axios
    //     .get(`${endPoint}?query=${query}?client_id=${accesKey}&count=20`)
    //     .then((response) => {
    //       this.images = response.data.results;
    //     })
    //     .catch(() => {
    //       this.images = [];
    //     });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 80vw;
  margin: 0 auto;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.btn {
  font-size: 18px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
</style>
