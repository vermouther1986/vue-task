const url = "http://localhost:3000/goods/review/list/"; 
 const headers = { Accept: "application/json" };
 
 export default {
  state: {
    reviewslist:[],
   },
   mutations: {
     //syncrous
     setreviewsList(state, payload) {
     state.reviewslist.push(...payload);
      //state.reviewslist = payload[0];
      console.log("array push ", payload);
     },
   },
   actions: {
     //asyncronous
    async  setreviewsList(state,payload) {
      const reviewlist = await fetch(url + payload, { headers });
       const j = await reviewlist.json();
       state.commit("setreviewsList", j);
       console.log("in setreviewsList method", j);
     },
   },
  getters: {
    getreviewsList: (state) => {
       console.log("in getreviewsList method", state.reviewslist);
       console.log(state.reviewslist);
       return state.reviewslist;
     },
  },
 };