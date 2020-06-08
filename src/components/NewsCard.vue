<template>
      <div class="container" @click="openArticle(article.url)">
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
  border: 2px solid $black;
  display: flex;
  flex-direction: column;
  width: 214px;
  align-items: center;
  margin: 2em;

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

    p {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
}

@media (max-width: 499px) {
  .container {
    width: 100%;
    margin: 2em 0;
  }

  .header {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
