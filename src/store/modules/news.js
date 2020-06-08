export default {
  state: {
    newsData: {
      results: []
    }
  },
  getters: {
    getNewsData (state) {
      return state.newsData
    }
  },
  actions: {
    async fetchNewsData ({ commit }, section = 'home') {
      const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx`
      const res = await window.fetch(URL)
      const data = await res.json()
      commit('setNewsData', data)
    }
  },
  mutations: {
    setNewsData (state, newsData) {
      state.newsData = newsData
    }
  }
}
