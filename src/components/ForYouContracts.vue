<template>
  <div className="contractsForYou">
    <h4>Contracts For You</h4>
    <div className="contractContainer">
      <ForYouCard />
    </div>
  </div>
</template>
<script>
import ForYouCard from "./partials/ForYouCard.vue";
export default {
  name: "ForYouContracts",
  components: {
    ForYouCard,
  },
};
</script>
