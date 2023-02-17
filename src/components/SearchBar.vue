<script>
  export default {
    data() {
      return {
        show: false,
        query: null
      }
    },
    methods: {
      submit(e) {
        e.preventDefault()
        this.$router.push(this.query.toLowerCase())
        this.show = false
        this.query = null
        // this.$store.commit('clearOldQuery')
      },
      hideOverlay() {
        this.show = !this.show
        if (this.query !== null) {
          this.query = null
        }
      }
    }
  }
</script>

<template>
  <div v-if="show">
    <form class="search-bar">
      <div class="search-input">
        <i class="bi bi-search"></i>
        <input
          name="query"
          type="text"
          v-model="query"
          @keydown.enter="submit"
          placeholder="Search images..."
          required
        />
      </div>
      <i class="bi bi-x-lg pointer" @click="hideOverlay"></i>
    </form>
    <div class="overlay" v-if="show" @click="hideOverlay"></div>
  </div>

  <label for="query" @click="hideOverlay">
    <i class="bi bi-search pointer"></i>
  </label>
</template>

<style lang="scss">
  $primary_1: #36494e;

  input {
    border: 0;
    padding-left: 10px;
    flex-grow: 1;
    height: 100%;
  }

  input:focus {
    outline: none;
  }

  .search-input {
    align-items: center;
    font-size: 16px;
    border-radius: 20px;
    display: flex;
    height: 35px;
    padding: 0 15px;
    width: 100%;
  }

  .overlay {
    height: 100%;
    width: 100%;
    top: 80px;
    // bottom: 0;
    left: 0;
    // right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 1;
  }

  .search-bar {
    background-color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    animation-duration: 1s;
  }

  .pointer {
    cursor: pointer;
  }
</style>
