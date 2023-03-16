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
  <div class="flex wrap">
    <div class="m-[10px]" v-for="video in videos" :key="video.id">
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
      <video :src="video.url" controls></video>
    </div>
  </div>
</template>
