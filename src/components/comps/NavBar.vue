<template>
  <div className="nav">
    <h3>Contractor - Find your next job</h3>
    <div class="links">
      <RouterLink :to="'/dashboard'"><a>Dashboard</a></RouterLink>
      <RouterLink :to="'/job'"><a>Job(Dev View)</a></RouterLink>
    </div>
    <div className="icons">
      <button>User</button>
      <button>Fave</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav {
  display: flex;
}
</style>
