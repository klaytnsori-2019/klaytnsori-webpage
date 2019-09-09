import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    storeInput: null
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
