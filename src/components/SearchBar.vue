<template>
  <div className="searchHome">
    <div className="introText">
      <p>Hello, {{ user }}</p>
      <h4>Find the perfect contract</h4>
    </div>
    <div className="searchBar">
      <input type="text" placeholder="What are you looking for?" />
      <button>Search</button>
    </div>
    <div className="options">
      <button className="active">Remote</button>
      <button>In-office</button>
      <button>Hybrid</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    user: String,
  },
};
</script>
