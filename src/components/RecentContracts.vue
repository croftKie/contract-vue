<template>
  <div className="recentContracts">
    <h4>Recent Contracts</h4>
    <div className="contractContainer">
      <RecentCard />
    </div>
  </div>
</template>

<script>
import RecentCard from "./partials/RecentCard.vue";

export default {
  name: "RecentContracts",
  components: {
    RecentCard,
  },
};
</script>
