const videoModule = {
  namespaced: true,
  state() {
    return {
      videos: [
        {
          id: 1,
          title: "Katsebi",
          description: "კაცები რომში",
          url: "https://www.youtube.com/watch?v=OXd1MJzsH5M",
          tags: ["comedy", "blog", "all"],
        },
        {
          id: 2,
          title: "საეჭვო კაცი",
          description: "ვოიაჟრი",
          url: "https://www.youtube.com/watch?v=2ZOuoN1XLcc&t=8s",
          tags: ["comedy", "blog", "guns", "all"],
        },
        
        { 
          id: 3,
          title: "იარაღის განხილვა",
          description: "ბატონი დავითის რჩევები",
          url: "https://www.youtube.com/watch?v=7FcrW1IkWiw",
          tags: ["blog", "guns", "all"],
          
        },
      ],
      filteredVideos: [],
      isOpen: true,
      tag: "all",
    };
  },

  getters: {
    getVideos(state) {
      return state.videos;
    },
    getfilteredVideos(state) {
      return state.filteredVideos;
    },
    getOpenStatus(state) {
      return state.isOpen;
    },
    getCategories(state) {
      const tags = [];

      for (const video of state.videos) {
        for (const tag of video.tags) {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        }
      }

      return tags;
    },
    getVideosByTag(state, getters) {
      return state.videos.filter((video) => video.tags.includes(state.tag));
    },
  },
  mutations: {
    FILTER_VIDEOS(state, payload) {
      if (payload) {
        state.filteredVideos = state.videos.filter((video) =>
          video.title.toLowerCase().includes(payload.toLowerCase())
        );
      } else {
        state.filteredVideos = state.videos;
      }
    },
    changeOpenStatus(state) {
      state.isOpen = !state.isOpen;
    },
    changeTag(state, tag) {
      state.tag = tag;
    },
  },
  actions: {
    filterVideos({ commit }, payload) {
      commit("FILTER_VIDEOS", payload);
    },
  },
};
  


export default videoModule;
