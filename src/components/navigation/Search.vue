<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const searchQuery = ref(null);

watch(searchQuery, (value) => {
  if (value && value.length >= 3) {
    store.dispatch("videos/filterVideos", value);
  } else store.dispatch("videos/filterVideos", null);
});
</script>

<template>
  <div class="search border dark:border-dark-100 h-full flex items-center">
    <div class="icon-left w-8 h-8 p-1">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="stroke-current fill-current style-scope yt-icon"
        style="pointer-events: none; display: block; width: 100%; height: 100%"
      >
        <g class="stroke-current fill-current style-scope yt-icon">
          <path
            d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
            class="stroke-current fill-current style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </div>
    <input
      v-model="searchQuery"
      class="outline-none bg-transparent dark:text-gray-200"
      type="text"
      ref="inputField"
      placeholder="Search "
    />
    <div class="icon-right pr-2">
      <img src="//www.gstatic.com/inputtools/images/tia.png" alt="" />
    </div>
    <div class="btn-x w-7 pr-2" @click="clearInput">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="stroke-current fill-current style-scope yt-icon"
        style="pointer-events: none; display: block; width: 100%; height: 100%"
      >
        <g class="stroke-current fill-current style-scope yt-icon">
          <path
            d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
            class="stroke-current fill-current style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </div>
    <button
      class="btn-search h-full bg-gray-100 dark:bg-dark-300 dark:hover:bg-dark-400 hover:bg-gray-200 px-5"
    >
      <div class="w-8 h-8 py-1">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="stroke-current fill-current style-scope yt-icon"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <g class="stroke-current fill-current style-scope yt-icon">
            <path
              d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
              class="stroke-current fill-current style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  </div>
</template>
