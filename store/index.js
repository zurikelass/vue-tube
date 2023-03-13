import { createStore } from 'vuex'

import navigationPlugin from './plugins/navigationPlugin'
import videosPlugin from './plugins/videosPlugins'
import usersPlugin from './plugins/usersPlugin'
import categoryPlugin from './plugins/navigationPlugin'

const store = createStore({
    plugins: [ navigationPlugin, videosPlugin, usersPlugin, categoryPlugin]
})



export default store