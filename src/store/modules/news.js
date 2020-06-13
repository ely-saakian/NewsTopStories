export default {
  state: {
    isLoading: false,
    newsData: {
    },
    currentSection: 'home'
  },
  getters: {
    NewsData (state) {
      return state.newsData.results
    },
    CurrentSection (state) {
      return state.currentSection
    }
  },
  actions: {
    async fetchNewsData ({ commit, state }) {
      state.isLoading = true
      const URL = `https://api.nytimes.com/svc/topstories/v2/${state.currentSection}.json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx`
      window.fetch(URL).then(res => res.json()).then((data) => {
        commit('setNewsData', data)
      })
    },
    setCurrentSection ({ commit, dispatch }, section = 'home') {
      commit('setCurrentSection', section)
      dispatch('fetchNewsData')
      this.isLoading = true
    }
  },
  mutations: {
    setNewsData (state, newsData) {
      state.newsData = newsData
      state.isLoading = false
    },
    setCurrentSection (state, section) {
      state.currentSection = section
    }
  }
}
