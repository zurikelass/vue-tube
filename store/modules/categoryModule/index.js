import axios from "axios";


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
      },
      getCategoriesFromApi({commit}) {
        axios.get('/categories')
        .then (response => (response.data.success)? commit("setCategories", response.data.data) : null)
        .catch((e) => console.log(e));
      },
      async getUsers({commit, getters}) {
        const res = await axios.get(`/categories`).catch(e => console.log(e));
          if (res.data.success) {
            commit("SAVE_USERS", res.data.data);
          }
    },
    async addCategory({getters, dispatch}, name) {
        await axios.post(
          `/categories`,
          {
            name,
            type: "news",
          },
          {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${getters.token}`,
            },
          }
        ).catch(e => console.log(e));
        dispatch('getUsers');
      },
      async deleteCategory({getters, dispatch}, id) {
         await axios.delete(
          `/categories/${id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${getters.token}`,
            },
          }
        ).catch(e => console.log(e));
        dispatch('getUsers');
      },
      async editCategory({getters, dispatch}, user) {
        await axios.put(
          `/categories/${user.id}`,
          {
            name: user.name,
            type: "news",
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${getters.token}`,
            },
          }
        ).catch(e => console.log(e));
        dispatch('getUsers');
      },
    },
  };
  
  export default categoryModule;
  