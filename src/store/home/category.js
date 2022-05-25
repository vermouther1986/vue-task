const url = "http://localhost:3000/categories";
//const url2 = "http://localhost:3000/subBannerses";
const headers = { Accept: "application/json" };
//const headers2 = { Accept: "application/json" };

export default ({
  state: {
    categories: [],
    //subBannerses: []
  },
  mutations: {
    //syncrous
    setCategor(state, payload) {
      state.categories.push(...payload);
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
    async setCategor(state) {
      
      const categor = await fetch(url, { headers });
      const j = await categor.json();
      state.commit("setCategor", j);
      console.log('in setCategor method',j);
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
    getCategor: (state) => {
      console.log('in getCategor method',state.categories);
      console.log(state.categories);
      return state.categories
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