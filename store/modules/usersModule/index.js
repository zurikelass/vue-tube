const userModule = {
  namespaced: true,
  state() {
    return {
      users: [],
    };
  },
  getters: {
    info(state) {
      return state.users;
    },
    getApiUrl: (state) => {
      return 'https://items.magischer.de/api/users';
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {},
};

export default userModule;

