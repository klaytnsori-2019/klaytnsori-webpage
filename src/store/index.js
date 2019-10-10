
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    storeInput: null,
    index: null,
    question_state:0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    transferString (state, payload){
      console.log(payload);
      state.storeInput = payload
    }
  }
});
