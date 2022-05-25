

// Vue.use(Vuex);

const url = "http://localhost:3000/newGoodses";
//const url2 = "http://localhost:3000/subBannerses";
const headers = { Accept: "application/json" };
//const headers2 = { Accept: "application/json" };

export default ({
  state: {
    newGoodses: [],
    //subBannerses: []
  },
  mutations: {
    //syncrous
    setNewGoods(state, payload) {
      state.newGoodses.push(...payload);
      console.log('array push ',payload);
      
    },
//  
//  setsubBanner(state, payload) {
//   state.subBannerses.push(...payload);
//   console.log('array push ',payload);
// },


  },
  actions: {
    //asyncronous
    async setNewGoodses(state) {
      
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      state.commit("setNewGoods", j);
      console.log('in setNewGoodses method',j);
    },
//setsubBanne
// async setsubBanner(state) {
      
//   const goodses = await fetch(url2, { headers2 });
//   const j = await goodses.json();
//   state.commit("setsubBanner", j);
//   console.log('in setsubBanner method',j);
// },




  },
  modules: {},
  getters: {
    getNewGoodses: (state) => {
      console.log('in getNewGoodses method',state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses
    },
    //getsubBanner
    // getsubBanner: (state) => {
    //   console.log('in getsubBanner method',state.subBannerses);
    //   console.log(state.subBannerses);
    //   return state.subBannerses
    // },

  }


  //subBannerses
  



});