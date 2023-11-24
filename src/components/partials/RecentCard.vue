<template>
  <div className="card">
    <div className="content">
      <div>
        <button v-if="true">Logo</button>
        <button v-else>Missing Logo</button>
        <p>Company Name</p>
      </div>
      <div>
        <p className="jobTitle">Job Title</p>
        <p>Job City - Job Country</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecentCard",
};
</script>
