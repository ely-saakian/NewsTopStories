export default {
  state: {
    isLoading: false,
    newsData: {
    },
    currentSection: {
      section: null,
      name: null
    },
    currentSectionIndex: null
  },
  getters: {
    newsData (state) {
      return state.newsData.results
    },
    currentSection (state) {
      return state.currentSection
    },
    currentSectionIndex (state) {
      return state.currentSectionIndex
    }
  },
  actions: {
    async fetchNewsData ({ commit, state }) {
      state.isLoading = true
      const URL = `https://api.nytimes.com/svc/topstories/v2/${state.currentSection.section}.json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx`
      window.fetch(URL).then(res => res.json()).then((data) => {
        commit('setNewsData', data)
      })
    },
    setCurrentSection ({ commit, dispatch }, section = window.localStorage.getItem('currentSection') || { section: 'home', name: 'Home' }) {
      commit('setCurrentSection', section)
      dispatch('fetchNewsData')
    }
  },
  mutations: {
    setNewsData (state, newsData) {
      state.newsData = newsData
      state.isLoading = false
    },
    setCurrentSection (state, section) {
      window.localStorage.setItem('currentSection', section)
      state.currentSection.section = section.section
      state.currentSection.name = section.name
    }
  }
}
