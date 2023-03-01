<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex' 

const store= useStore()

const videos =computed(() => store.getters['videos/getVideosByTag'])
onMounted(() => {
  store.dispatch('videos/filterVideos', null)
})
</script>
<template>
  <ul>
    <li v-for="video in videos" :key="video.id">
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
      <video :src="video.url" controls></video>
    </li>
  </ul>
</template>
