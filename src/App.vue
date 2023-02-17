<!-- JS code -->
<script>
  import SearchBar from './components/SearchBar.vue'

  export default {
    components: {
      SearchBar
    }
  }
</script>

<!-- HTML code -->
<template>
  <nav>
    <div>
      <RouterLink class="logo" to="/"> Logo </RouterLink>
    </div>
    <SearchBar />
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style>
  nav {
    height: 80px;
    width: 100%;
    top: 0;
    background-color: white;
    box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    position: fixed;
  }

  .logo {
    flex-grow: 1;
    color: black;
    font-weight: 600;
    font-size: 32px;
    text-decoration: none;
    max-width: 250px;
    min-width: 150px;
  }
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  nav li a {
    text-decoration: none;
    margin: 1rem;
    color: black;
  }
</style>
