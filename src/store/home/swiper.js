const url = "http://localhost:3000/swiper";
//const url2 = "http://localhost:3000/subBannerses";
const headers = { Accept: "application/json" };
//const headers2 = { Accept: "application/json" };

export default ({
  state: {
    swiper: [],
    //subBannerses: []
  },
  mutations: {
    //syncrous
    setSwiperSilder(state, payload) {
      state.swiper.push(...payload);
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
    async setSwiperSilder(state) {
      
      const silders = await fetch(url, { headers });
      const j = await silders.json();
      state.commit("setSwiperSilder", j);
      console.log('in setSwiperSilder method',j);
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
    getSwiperSilder: (state) => {
      console.log('in getNewGoodses method',state.swiper);
      console.log(state.swiper);
      return state.swiper
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