<template>
      <div class="container" @click="openArticle(article.url)">
        <div class="header">
          <div class="img-container" v-lazy-container="{selector: 'img'}" >
              <img
              :data-src="article.multimedia[0].url"
              :data-loading="article.multimedia[3].url"
              data-error="../assets/NoImage.jpg"
              :alt="article.multimedia[0].caption"
              >
          </div>
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
  name: 'NewsCard',
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
  border: 1px solid $black;
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
  align-items: center;
  margin: 2em;
  transition: all 0.25s ease-in-out;

  .header {
    position: relative;
    width: 100%;

    .section-name {
      text-transform: uppercase;
      background-color: #305c91;
      color: white;
      position: absolute;
      bottom: 0;
      margin: 0.25em 0;
      padding: 0.25em 1em;
    }
    .img-container {
      overflow: hidden;
      img {
        width: 100%;
        object-fit: cover;
        object-position: center center;
      }
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

  &:hover {
    cursor: pointer;

    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 499px) {
  .container {
    width: 100%;
    margin: 2em 0;
  }
}
</style>
