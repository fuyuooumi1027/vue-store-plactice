import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Buy milk",
        done: false
      },
      {
        id: 2,
        name: "Buy VueBooks",
        done: true
      }
    ]
  }
  // mutations: {
  //   increment(state, amount) {
  //     state.count += amount;
  //   }
  // }
});

export default store;
