const registerModule = {
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
        REGISTER(state, user) {
            state.user.push(user)

        }
    },
    actions:{
        TOKEN({commit}, token) {
            commit("TOKEN", token)
        },
        REGISTER({commit}, info) {
            commit("REGISTER", info)
        }
    },
}
export default registerModule