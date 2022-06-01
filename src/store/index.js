import { createStore } from "vuex";
import category from "./home/category";
import hotGoods from "./home/hotGoods";
import swiper from "./home/swiper";
import reviewScore from "./review/reviewScore";
import scoreTotal from "./review/scoreTotal";
// import reviewRouter from '../router/reviewRouter'
import reviewList from "./review/reviewList";
import QaList from "./Qa/QaList";
import goodsStyle from "./goods/goodsstyle";

export default createStore({
  modules: {
    category,
    hotGoods,
    swiper,
    reviewScore,
    scoreTotal,
    reviewList,
    QaList,
    goodsStyle,
    // revireewRouter
  },
});
// Vue.use(Vuex);
