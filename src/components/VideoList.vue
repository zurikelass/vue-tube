<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex' 

const store= useStore()

const videos=store.getter['videos/getVideos']
onMounted(() => {
    console.log (videos)
})
</script>
<template>
  <ul>
    <li v-for="videos in videos" :key="videos.id">
      <h2>{{ videos.title }}</h2>
      <p>{{ videos.description }}</p>
      <video :src="videos.url" controls></video>
    </li>
  </ul>
</template>
