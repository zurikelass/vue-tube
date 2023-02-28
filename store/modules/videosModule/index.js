const videoModule = {
    namespaced:true,
    state() {
        return{
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
                },
              ],
              filteredVideos: [],
        }
    },
    getters:{
        getVideos(state){
            return state.videos
        },
        getfilteredVideos (state) {
          return state.filteredVideos
        }
    },
    mutations:{
      FILTER_VIDEOS(state, payload) {
       if(payload){
        state.filteredVideos = state.videos.filter(video => video.title.toLowerCase().includes(payload.toLowerCase()))
       }else{
        state.filteredVideos = state.videos
       }
      }
     
    },
    actions: {
      filterVideos({ commit }, payload) {
        commit('FILTER_VIDEOS', payload)
      }
    }
}

export default videoModule