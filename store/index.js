import { createStore } from 'vuex'
import navigationPlugin from './plugins/navigationPlugin'

const store = createStore({
    plugins: [ navigationPlugin ]
})



export default store