const userModule = {
  namespaced: true,
  state() {
    return {
      authenticated: null,
      users: [
        {
          id: 1,
          name: "zack",
          email: "zack@mail.com",
          password: "zack123",
        },
      ],
    };
  },
  getters: {
    authenticatedUser(state) {
      return state.authenticated;
    },
  },
  mutations: {
    AUTHANTICATE(state, payload) {
      let user = state.user.find((val) => val.email === payload.email);
      if (user.password === payload.password) {
        state.authenticated = user;
      }
    },
    REGISTER_NEW_USER(state, payload) {
      state.user.push(payload);
    },
    UPDTAE_NEW_USER(state, payload) {
      state.user.find((user) => state.authenticated.id === user.id).name =
        payload.name;
      state.user.find((user) => state.authenticated.id === user.id).name =
        payload.email;
      state.user.find((user) => state.authenticated.id === user.id).name =
        payload.password;
    },
  },
  actions: {
    AUTHANTICATE({ commit }, payload) {
      commit("VERIFY", payload);
    },
    register({ commit }, payload) {
      commit("REGISTER_NEW_USER", payload);
      commit("AUTHANTICATE", payload);
    },
  },
};

export default userModule;
