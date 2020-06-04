<template>
<div class="custom-select-wrapper">
    <div class="custom-select" :class="{'open':isOpen}">
        <div class="custom-select__trigger" @click="open"><span>arts</span>
            <div class="arrow"></div>
        </div>
        <div class="custom-options">
            <span class="custom-option"
            v-for="(section, index) in sections" :key="index"
            @click="select"
            >
            {{section}}
            </span>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      sections: [
        'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'
      ],
      isOpen: false
    }
  },
  methods: {
    open () {
      this.isOpen = !this.isOpen
    },
    select (e) {
      const selection = e.target
      this.fetchNewsData(selection.innerText)
      if (!selection.classList.contains('selected')) {
        if (selection.parentNode.querySelector('.custom-option.selected')) {
          selection.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
        }
        selection.classList.add('selected')
        selection.closest('.custom-select')
          .querySelector('.custom-select__trigger span')
          .textContent = selection.textContent
        this.open()
      } else {
        this.open()
      }
    },
    ...mapActions(['fetchNewsData'])
  }
}
</script>

<style lang='scss' scoped>
.custom-select-wrapper {
  position: relative;
  user-select: none;
  width: 210px;
  margin-bottom: 1em;
}

.custom-select {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-width: 0 2px 0 2px;
  border-style: solid;
  border-color: #394a6d;
}

.custom-select__trigger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  font-size: 20px;
  font-weight: 300;
  color: #3b3b3b;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
  cursor: pointer;
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #394a6d;
}

.custom-options {
  height: 50vh;
  overflow: scroll;
  width: 100%;
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  border: 2px solid #394a6d;
  border-top: 0;
  background: #fff;
  transition: all 0.25s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
}

.custom-select.open .custom-options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.custom-option {
  position: relative;
  display: block;
  padding: 0 22px 0 22px;
  font-size: 22px;
  font-weight: 300;
  color: #3b3b3b;
  line-height: 60px;
  cursor: pointer;
  transition: all 0.25s;
}

.custom-option:hover {
  cursor: pointer;
  background-color: #b2b2b2;
}

.custom-option.selected {
  color: #ffffff;
  background-color: #305c91;
}

.arrow {
  position: relative;
  height: 15px;
  width: 15px;
}

.arrow::before,
.arrow::after {
  content: "";
  position: absolute;
  bottom: 0px;
  width: 0.15rem;
  height: 100%;
  transition: all 0.25s;
}

.arrow::before {
  left: -5px;
  transform: rotate(45deg);
  background-color: #394a6d;
}

.arrow::after {
  left: 5px;
  transform: rotate(-45deg);
  background-color: #394a6d;
}

.open .arrow::before {
  left: -5px;
  transform: rotate(-45deg);
}

.open .arrow::after {
  left: 5px;
  transform: rotate(45deg);
}
</style>
