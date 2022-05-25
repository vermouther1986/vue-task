const url = "http://localhost:3000/goods/review/rating/"; 
const headers = { Accept: "application/json" };

export default {
 state: {
  ratinglist:[],
  },
  mutations: {
    //syncrous
    setRating(state, payload) {
      // state.rating.push(...payload);
     state.ratinglist.push(...payload[0].rating);
     console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
   async  setRating(state,payload) {
     const ratinglist= await fetch(url + payload, { headers });
      const j = await ratinglist.json();
      state.commit("setRating", j);
      console.log("in setRating method", j);
    },
  },
 getters: {
    getRating: (state) => {
      console.log("in getRating method", state.ratinglist);
      console.log(state.ratinglist);
      return state.ratinglist;
    },
 },
};