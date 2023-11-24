<template>
  <div className="card">
    <div className="logo">
      <button v-if="true">Logo</button>
      <button v-else>Missing Logo</button>
    </div>
    <div className="text">
      <p className="jobTitle">Job Title</p>
      <p>Date Added</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForYouCard",
};
</script>
