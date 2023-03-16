const categoryModule = {
    namespaced: true,
    state: {
    
      categories: []
    },
    getters: {
      getCategories(state){
        return state.categories
      }
    },
    mutations: {
      setCategories(state, payload) {
        
        state.categories = payload;
      },
    },
    actions: {
    
      setCategories({commit}, info) {
    
        commit("setCategories", info);
      }
    },
  };
  
  export default categoryModule;
  