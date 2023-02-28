import videosModule from "../modules/videosModule"

const videosPlugin = (store) => {
    store.registerModule("videos", videosModule )
}

export default videosPlugin