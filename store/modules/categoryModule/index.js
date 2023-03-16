import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

const categoryModule = {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    getCategories({ categories }) {
      return categories;
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories.map((v) => ({ ...v, editing: false }));
    },
  },
  actions: {
    async getCategories({ commit }) {
      const res = await axios.get(`/categories`);
      if (res.data.success) {
        commit("SET_CATEGORIES", res.data.data);
      }
    },
    async addCategory({ dispatch }, { name, type }) {
      console.log(name, type);
      await axios
        .post(`/categories`, {
          name,
          type,
        })
        .catch((e) => console.log(e));
      await dispatch("getCategories");
    },
    async deleteCategory({ dispatch }, id) {
      await axios.delete(`/categories/${id}`).catch((e) => console.log(e));
      await dispatch("getCategories");
    },
    async editCategory({ dispatch }, { id, name, type }) {
      await axios
        .put(`/categories/${id}`, {
          name,
          type,
        })
        .catch((e) => console.log(e));
      await dispatch("getCategories");
    },
  },
};

export default categoryModule;
