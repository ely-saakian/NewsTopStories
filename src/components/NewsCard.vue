<template>
      <div class="container border" @click="openArticle(article.url)">
        <div class="header">
            <img
            v-if="article.multimedia"
            :src="article.multimedia[3].url"
            :alt="article.multimedia[3].caption"
            >
            <img v-else src="../assets/NoImage.png" alt="Image Not Available">
            <div class="section-name">{{article.section}}</div>
        </div>
        <div class="body">
            <p class="date">{{publishedDate(article.published_date)}}</p>
            <p class="title">{{article.title}}</p>
            <p class="abstract">{{article.abstract}}</p>
        </div>
        <div class="footer">
            <p  v-if="article.byline" class="byline">{{article.byline}}</p>
        </div>
      </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['article'],
  methods: {
    publishedDate (date) {
      return moment(date).format('MMM D YYYY h:mm A')
    },
    openArticle (url) {
      window.open(url)
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 210px;
  margin: 2em;
  align-items: center;
  animation: boxShadowOut 0.5s ease-out;

  &:hover {
    animation: boxShadowIn 0.5s ease-out forwards;
  }

  @keyframes boxShadowIn {
    from {
      box-shadow: 0px 0px 0px 0px rgba(184, 184, 184, 0);
    }
    to {
      box-shadow: 0px 0px 30px 0px rgba(184, 184, 184, 0.5);
    }
  }
  @keyframes boxShadowOut {
    0% {
      box-shadow: 0px 0px 0px 0px rgba(184, 184, 184, 0.5);
    }
    100% {
      box-shadow: 0px 0px 30px 0px rgba(184, 184, 184, 0);
    }
  }

  // for border animation
  position: relative;
  vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  // --end border animation req

  .header {
    position: relative;

    .section-name {
      text-transform: uppercase;
      background-color: black;
      color: white;
      position: absolute;
      bottom: 0;
      margin: 0.25em 0;
      padding: 0.25em 1em;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1em;
    height: 100%;
    .date {
      text-transform: uppercase;
      font-size: 0.75rem;
      color: gray;
      margin: 1em 0;
    }
    .title {
      font-weight: 700;
      margin: 1em 0;
    }
    .abstract {
      margin: 1em 0;
      margin-bottom: 2em;
    }
  }

  .footer {
    color: $black;
    width: 100%;
    text-align: center;
    padding: 0.5em 1em;
    border-bottom: 2px solid black;

    p {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
}
.border {
  cursor: pointer;
  color: $black;
  &::before,
  &::after {
    z-index: -1;
    border: 2px solid transparent;
    border-top: none;
  }

  @keyframes borderIn {
    0% {
      border-right-color: $black;
      border-left-color: $black;
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  &::before {
    bottom: 0;
    right: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }

  &:hover::before,
  &:hover::after {
    animation: borderIn 0.5s ease-out;
  }
}
</style>
