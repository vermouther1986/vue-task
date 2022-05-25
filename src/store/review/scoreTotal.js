 const url = "http://localhost:3000/goods/review/total/"; 
 const headers = { Accept: "application/json" };
 
 export default {
  state: {
    total:[],
   },
   mutations: {
     //syncrous
     setTotal(state, payload) {
      state.total = payload[0];
      console.log("array push ", payload);
     },
   },
   actions: {
     //asyncronous
    async  setTotal(state,payload) {
      const totals= await fetch(url + payload, { headers });
       const j = await totals.json();
       state.commit("setTotal", j);
       console.log("in setTotal method", j);
     },
   },
  getters: {
     getTotal: (state) => {
       console.log("in getTotal method", state.total);
       console.log(state.total);
       return state.total;
     },
  },
 };