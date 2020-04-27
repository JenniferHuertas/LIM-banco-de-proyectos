<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchPhotos/>
    <ListPhotos msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListPhotos from '@/components/ListPhotos.vue';
import SearchPhotos from '@/components/SearchPhotos.vue';

export default {
  name: 'Home',
  components: {
    ListPhotos,
    SearchPhotos,
  },
};
</script>
