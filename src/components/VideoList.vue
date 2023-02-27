<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
};
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
