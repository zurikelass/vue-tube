import { createStore } from 'vuex'

import navigationPlugin from './plugins/navigationPlugin'
import videosPlugin from './plugins/videosPlugins'


const store = createStore({
    plugins: [ navigationPlugin, videosPlugin,  ]
})



export default store