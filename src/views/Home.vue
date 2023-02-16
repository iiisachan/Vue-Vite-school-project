import Gallery from '../components/Gallery.vue';

<script>
  import Gallery from '../components/Gallery.vue'

  export default {
    components: { Gallery },
    data() {
      return {
        query: null
      }
    },
    methods: {
      submit(e) {
        e.preventDefault()
        this.$router.push(this.query)
        this.query = null
        this.$store.commit('clearOldQuery')
      }
    }
  }
</script>

<template>
  <div class="banner">
    <div class="banner-content">
      <h1>Search for images</h1>
      <p>High quality images from Unslash</p>
      <form class="home-search">
        <i class="bi bi-search"></i>
        <input
          name="query"
          type="search"
          v-model="query"
          placeholder="Search images..."
          required
          @keydown.enter="submit"
        />
      </form>
    </div>
  </div>

  <h2 class="search-titel">Discover</h2>

  <Gallery :query="query"> </Gallery>
</template>

<style>
  .banner {
    min-height: 400px;
    background: rgb(245, 245, 245);
    background: linear-gradient(
      100deg,
      rgba(245, 245, 245, 1) 43%,
      rgba(136, 160, 168, 1) 94%
    );
    background-image: url('../../assets/banner1.jfif');
    background-size: cover;
    box-shadow: 0 10px 10px #00000014;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
  }

  .home-search {
    background-color: #fff;
    font-size: 16px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    max-width: 450px;
    margin-top: 1rem;
    display: flex;
  }

  .home-search:hover {
    box-shadow: 0 0 0 3px #0000001a;
    border: 1px solid white;
  }

  .home-search input {
    flex-grow: 1;
  }

  .search-titel {
    padding: 3rem 1rem 2rem;
    font-size: 2rem;
  }
</style>
