const registerModule ={
    namespaced: true,
    state(){
        return{
            token:null,
            user:[]
        }
    },
    getters:{
        info(state) {
            return state.user
        },
        getApiUrl: (state) => {
            return 'https://items.magischer.de/api/auth/login'
    },

    },
    mutations:{
        TOKEN(state, payload) {
            state.token = payload
        },
        register(state, user) {
            state.user.push(user)

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
export default registerModule