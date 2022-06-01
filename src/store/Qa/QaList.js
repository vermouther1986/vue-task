const url = "http://localhost:3000/goods/quesiton/";
const headers = { Accept: "application/json" };

export default {
  state: {
    Qalist: { qaList: [] },
    currentPageNo: 1,
    totalPage: Number,
    sortlist: [],
  },
  mutations: {
    //syncrous
    setQalist(state, payload) {
      // state.rating.push(...payload);
      //   state.Qalist = payload[0];
      state.Qalist = payload[0];
      console.log("array push ", payload);
    },

    AddPageNo(state) {
      state.currentPageNo++;
    },
    CutPageNo(state) {
      state.currentPageNo--;
    },
    sortQaList(state) {
      state.Qalist.qaList.sort({});
    },
    sortList(state, value) {
      if (value === "total_yes") {
        const arr = state.Qalist.qaList.sort((a, b) => b.count - a.count);
        state.Qalist.qaList = arr;
      }
      if (value === "created_at") {
        const arr = state.Qalist.qaList.sort(
          (a, b) => new Date(b.answerDate) - new Date(a.answerDate)
        );
        state.Qalist.qaList = arr;
      }
      console.log("sortlist push ", value);
    },
  },

  actions: {
    //asyncronous
    async setQalist(context, payload) {
      const Qa = await fetch(url + payload, { headers });
      const j = await Qa.json();
      context.commit("setQalist", j);
      console.log("in setQalist method", j);
    },
  },
  getters: {
    getQalist: (state) => {
      console.log("in getQalist method", state.Qalist);
      console.log(state.Qalist);
      return state.Qalist;
    },
    getcurrentPageNo: (state) => {
      console.log("in getcurrentPageNo method", state.currentPageNo);
      console.log(state.currentPageNo);
      return state.currentPageNo;
    },
  },
};
