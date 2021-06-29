import { createStore } from 'vuex'
import { GloablDataProps, testData, testPosts } from '../mock/testData'

export default createStore<GloablDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (state) {
      state.user = {
        ...state.user,
        isLogin: true,
        nickName: 'xch'
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {

  }
})
