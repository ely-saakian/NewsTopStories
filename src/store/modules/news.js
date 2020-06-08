export default {
  state: {
    newsData: {
      results: []
    },
    currentSection: 'home'
  },
  getters: {
    getNewsData (state) {
      return state.newsData
    },
    getCurrentSection (state) {
      return state.currentSection
    }
  },
  actions: {
    async fetchNewsData ({ commit, state }) {
      const URL = `https://api.nytimes.com/svc/topstories/v2/${state.currentSection}.json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx`
      const res = await window.fetch(URL)
      const data = await res.json()
      commit('setNewsData', data)
    },
    setCurrentSection ({ commit, dispatch }, section = 'home') {
      commit('setCurrentSection', section)
      dispatch('fetchNewsData')
    }
  },
  mutations: {
    setNewsData (state, newsData) {
      state.newsData = newsData
    },
    setCurrentSection (state, section) {
      state.currentSection = section
    }
  }
}
