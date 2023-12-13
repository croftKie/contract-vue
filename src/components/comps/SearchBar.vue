<template>
  <div className="searchHome">
    <div className="introText">
      <p>Hello, {{ user }}</p>
      <h4>Find the perfect contract</h4>
    </div>
    <div className="searchBar">
      <input type="text" placeholder="What are you looking for?" />
      <button
        className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2"
      >
        Search
      </button>
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
