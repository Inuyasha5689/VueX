/**
 * Created by dasco on 3/5/2017.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store = new Vuex.Store({
   state: {
       counter: 0
   }
});