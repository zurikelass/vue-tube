import { createStore } from 'vuex'

import navigationPlugin from './plugins/navigationPlugin'
import videosPlugin from './plugins/videosPlugins'
import usersPlugin from './plugins/usersPlugin'
import categoryPlugin from './plugins/categoryPlugin'
import registerPlugin from './plugins/registerPlugins'
const store = createStore({
    plugins: [ navigationPlugin, videosPlugin, usersPlugin, categoryPlugin, registerPlugin]
})



export default store