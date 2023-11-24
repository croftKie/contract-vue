<template>
  <NavBar />
  <SearchBar user="Kieran" />
  <RecentContracts />
  <ForYouContracts />
</template>

<script>
import NavBar from "../comps/NavBar.vue";
import SearchBar from "../comps/SearchBar.vue";
import RecentContracts from "../comps/RecentContracts.vue";
import ForYouContracts from "../comps/ForYouContracts.vue";

export default {
  name: "DashBoard",
  components: {
    NavBar,
    SearchBar,
    RecentContracts,
    ForYouContracts,
  },
};
</script>
