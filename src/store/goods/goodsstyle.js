const url = "http://localhost:3000/goods/style/";

const headers = { Accept: "application/json" };

export default {
  state: {
    goodstable: [],
  },
  mutations: {
    setGoodstable(state, payload) {
      state.goodstable = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setGoodstable(context, payload) {
      const goods = await fetch(url + payload, { headers });
      const j = await goods.json();
      context.commit("setGoodstable", j);
      console.log("in setGoodstable method", j);
    },
  },
  modules: {},
  getters: {
    getGoodstable: (state) => {
      console.log("in Goodstable method", state.goodstable);
      console.log(state.goodstable);
      return state.goodstable;
    },
  },
};
