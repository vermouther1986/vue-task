// import hotGoods from "../home/hotGoods";

// const url = "http://localhost:3000/goods/review/list/"; 
const url = "http://localhost:3000/goods/review/goodsId/:goodsId/offset/:offset"; 
 const headers = { Accept: "application/json" };
 
 export default {
  state: {
    // goods:{},
    review:{},
    showed:false,
    reviewList:[],
   },
   mutations:{
     //syncrous
    //  setreviewsList(state, payload) {
    //  state.reviewslist.push(...payload);
    //   //state.reviewslist = payload[0];
    //   console.log("array push ", payload);
      // reviewlist
      setReview(state, payload) {
        // state.reviewslist.push(...payload);
         state.review = payload[0];
         console.log("array push ", payload[0]);
     },
     setReviewList(state, payload) {
       state.reviewList.push(...payload);
      //  state.reviews = payload[0];
       console.log("array push ", payload);
   },

   setShowed(state, payload) {
    // state.reviewslist.push(...payload);
    state.showed = payload;
   
},
   },
   actions: {
     //asyncronous
    async setReview(context,payload) {
      const {goodsId,offset} = payload ;
      const newurl=url
      .replace(":goodsId",goodsId)
      .replace(":offset",offset)
      const goods = await fetch(newurl,{headers});
       const j = await goods.json();
       if(offset===0){

        context.commit("setReview",j);
       }else{
         context.commit("setShowed",true);
         context.commit("setReviewList",j[0].reviewList);
       }
     },
   },
  getters: {
    getReview: (state) => {
      console.log("in getReview method", state.getReview);
      console.log(state.review);
      return state.review;
    },
    getReviewList: (state) => {
       console.log("in getReviewList method", state.reviewList);
       console.log(state.reviewList);
       return state.reviewList;
     },
     getShowed: (state) => {
      console.log("in getShowed method", state.showed);
      console.log(state.showed);
      return state.showed;
    },
  },
 };