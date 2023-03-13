const categoryModule ={
    namespaced: true,
    state(){
        return{
            token:null,
            category_id:[]
        }
    },
    getters:{
        info(state) {
            return state.category_id
        },
        getApiUrl: (state) => {
            return 'https://items.magischer.de/api/categories'
    },

    },
    mutations:{
        TOKEN(state, payload) {
            state.token = payload
        },
        register(state, category_id) {
            state.category_id.push(category_id)

        }
    },
    actions:{
        token({commit}, token) {
            commit("TOKEN", token)
        },
        register({commit}, info) {
            commit("register", info)


        }
    },
}
export default categoryModule