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
              ]
        }
    },
    getters:{
        getVideos(state){
            return state.videos
        }
    }
}

export default videoModule