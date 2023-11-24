<template>
  <NavBar />
  <SearchBar user="Kieran" />
  <RecentContracts />
  <ForYouContracts />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import RecentContracts from "./components/RecentContracts.vue";
import ForYouContracts from "./components/ForYouContracts.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SearchBar,
    RecentContracts,
    ForYouContracts,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
