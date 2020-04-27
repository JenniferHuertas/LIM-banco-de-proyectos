<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListPhotos msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListPhotos from '@/components/ListPhotos.vue';

export default {
  name: 'Home',
  components: {
    ListPhotos,
  },
};
</script>
