<script>
  import VideoList from './VideoList.vue';
  import Search from './Search.vue';
  
  export default {
    components: {
      VideoList,
      Search
    },
    data() {
      return {
        videos: [
          {
            id: 1,
            title: 'Katsebi',
            description: 'კაცები რომში',
            url: 'https://www.youtube.com/watch?v=OXd1MJzsH5M'
          },
          {
            id: 2,
            title: 'საეჭვო კაცი',
            description: 'ვოიაჟრი',
            url: 'https://www.youtube.com/watch?v=2ZOuoN1XLcc&t=8s'
          },
          {
            id: 3,
            title: 'იარაღის განხილვა',
            description: 'ბატონის დავითის რჩევები',
            url: 'https://www.youtube.com/watch?v=7FcrW1IkWiw'
          }
        ],
        searchQuery: ''
      }
    },
    computed: {
      filteredVideos() {
        return this.videos.filter(video => {
          return video.title.toLowerCase().includes(this.searchQuery.toLowerCase().trim()) && this.searchQuery.length >= 3;
        });
      }
    },
    methods: {
      updateSearchQuery(query) {
        this.searchQuery = query;
      }
    }
  }
  </script>
<template>
    <div>
      <Search @search="updateSearchQuery" />
      <VideoList :videos="filteredVideos" />
    </div>
  </template>
  
  
  