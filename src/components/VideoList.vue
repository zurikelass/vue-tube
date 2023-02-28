<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex' 

const store= useStore()

const videos = store.getters['videos/getVideos']
onMounted(() => {
   
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
