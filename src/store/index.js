
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    count: 0,
    storeInput: null,
    index: null,
    answer_index: null,
    question_state:0,
    email: null,
  },
  mutations: {
    increment (state) {
      state.question_state++
    },
    transferString (state, payload){
      console.log(payload);
      state.email = payload
    }
  }
});
