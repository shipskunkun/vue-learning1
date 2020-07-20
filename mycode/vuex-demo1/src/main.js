import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.use(Vuex)
Vue.config.productionTip = false

// 写错1， 这里要大写， new Vuex.Store
const store  = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment({state}) {  //注意和 mutations 中写法不一样， 是一个对象
      setTimeout(() => {
        state.count++
      }, 1000);
    }
  },
  getters: {  //写成getter
    doubleCount: state => {
      return state.count * 2
    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
