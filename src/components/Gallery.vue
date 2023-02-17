<script>
  export default {
    methods: {
      async get() {
        this.page++
        let url

        if (this.query !== null) {
          url = `https://api.unsplash.com/search/photos/?client_id=yS4UrYLKoSM9H8GlVk4EZfedHnQ-E17vYvgjAmttAAQ&per_page=30&page=${this.page}&query=${this.query} `
        } else {
          url = `https://api.unsplash.com/photos/?per_page=30&page=${this.page}&client_id=yS4UrYLKoSM9H8GlVk4EZfedHnQ-E17vYvgjAmttAAQ`
        }

        const response = await fetch(url)
        const result = await response.json()

        let data = result

        if (this.query !== null) {
          data = result.results
        }

        this.$store.commit('updateQuery', data)
      },
      infiniteScroll() {
        // adapted from: https://www.digitalocean.com/community/tutorials/vuejs-implementing-infinite-scroll
        window.onscroll = () => {
          let pageEnd = document.documentElement.offsetHeight - 300
          if (window.innerHeight + window.pageYOffset >= pageEnd) {
            this.get()
          }
        }
      },
      showTopBtn() {
        window.onscroll = () => {
          if ((document.documentElement.scrollTop = 500)) {
            this.showTop = true
          } else {
            this.showTop = false
          }
        }
      },
      goToTop() {
        // source https://stackoverflow.com/questions/58213748/how-to-animate-scroll-to-top-javascript
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      selectImg(e) {
        this.selectedImg = e.target.getAttribute('src')
        this.selectedImgAlt = e.target.getAttribute('alt')
        this.selectedUser = e.target.getAttribute('data-user')
        document.body.style.overflow = 'hidden'
      },
      closeImg() {
        this.selectedImg = null
        this.selectedImgAlt = null
        this.selectedUser = null
        this.zoomIn = false
        document.body.style.overflow = 'auto'
      },
      zoom() {
        this.zoomIn = !this.zoomIn
      }
    },
    watch: {
      query() {
        this.$store.commit('clearOldQuery')
        this.page = 0
        this.get()
      },
      endPage() {
        this.get()
      }
    },
    mounted() {
      this.showTopBtn()
      this.infiniteScroll()
    },
    created() {
      console.log('gallery created clear')
      this.$store.commit('clearOldQuery')
      console.log('gallery created get')
      this.get()
    },
    data() {
      return {
        page: 0,
        showTop: false,
        selectedImg: null,
        selectedImgAlt: null,
        selectedUser: null,
        zoomIn: false,
        endPage: false
      }
    },
    props: {
      query: String
    },
    computed: {
      col1() {
        return this.$store.state.col1
      },
      col2() {
        return this.$store.state.col2
      },
      col3() {
        return this.$store.state.col3
      }
    }
  }
</script>

<template>
  <div class="img-container">
    <div class="column">
      <img
        v-for="item in col1"
        @click="selectImg"
        class="img-item"
        :id="item.id"
        :key="item.id"
        :src="item.urls.regular"
        :alt="item.alt_description"
        :data-user="item.user.name"
      />
    </div>
    <div class="column">
      <img
        v-for="item in col2"
        @click="selectImg"
        class="img-item"
        :id="item.id"
        :key="item.id"
        :src="item.urls.regular"
        :alt="item.alt_description"
        :data-user="item.user.name"
      />
    </div>
    <div class="column">
      <img
        v-for="item in col3"
        @click="selectImg"
        class="img-item"
        :id="item.id"
        :key="item.id"
        :src="item.urls.regular"
        :alt="item.alt_description"
        :data-user="item.user.name"
      />
    </div>
  </div>

  <div class="top-btn" @click="goToTop" v-if="showTop">
    <i class="bi bi-chevron-up"></i>
  </div>

  <!-- MODAL -->
  <div class="img-modal" v-if="selectedImg !== null">
    <i class="bi bi-x-lg close-modal" @click="closeImg"></i>

    <div class="card">
      <div class="card-info">
        <i class="bi bi-camera-fill"></i>
        <p>by {{ selectedUser }}</p>
      </div>

      <img
        :src="selectedImg"
        :alt="selectedImgAlt"
        class="modal-img"
        @click="zoom"
        :class="{ zoom: zoomIn }"
      />
    </div>
  </div>
</template>
