import Gallery from '../components/Gallery.vue';

<script>
  import Gallery from '../components/Gallery.vue'

  export default {
    components: { Gallery },
    computed: {
      searched() {
        return this.$route.params.search
      }
    }
  }
</script>

<template>
  <h1 class="search-titel">Search result for {{ searched }}</h1>
  <Gallery :query="searched"> </Gallery>
</template>
