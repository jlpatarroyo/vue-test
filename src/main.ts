import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    character:{}
  },
  mutations:{
    setCharacter(state, payload){
      state.character = payload;
    }
  },
  getters:{
    getCharacter: (state) => {
      return state.character;
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
