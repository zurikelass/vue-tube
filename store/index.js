import { createStore } from 'vuex'

import navigationPlugin from './plugins/navigationPlugin'
import videosPlugin from './plugins/videosPlugins'
import usersPlugin from './plugins/usersPlugin'


const store = createStore({
    plugins: [ navigationPlugin, videosPlugin, usersPlugin]
})



export default store