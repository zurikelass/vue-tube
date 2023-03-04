import { createStore } from 'vuex'

import navigationPlugin from './plugins/navigationPlugin'
import userPlugin from './plugins/userPlugin'
import videosPlugin from './plugins/videosPlugins'


const store = createStore({
    plugins: [ navigationPlugin, videosPlugin,userPlugin  ]
})



export default store