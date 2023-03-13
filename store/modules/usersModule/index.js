const userModule = {
  namespaced: true,
  state: {
    user: null,
    token: null
  },
  getters:{
      info(state) {
          return state.user
      },
      getApiUrl: (state) => {
          return 'https://items.magischer.de/api/auth/register'
  },
  
  },
  mutations:{
      setToken(state, payload) {
          state.token = payload
      },

      setUser(state, payload) {
        state.user = payload;
      },
  },
  actions:{
      setToken({commit}, token) {
          commit("token", token)
      },
      register({commit}, info) {
        console.log('registered!!!!')
          commit("register", info)
      }
  },
};

export default userModule;

