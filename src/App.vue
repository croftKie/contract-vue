<template>
  <RouterView />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* write custom CSS here specific to this component */

@font-face {
  font-family: "AzeretMono-Variable";
  src: url("@/assets/fonts/AzeretMono-Variable.woff2") format("woff2");
}

body {
  display: flex;
  padding: 2rem;

  background-color: rgb(255, 255, 248);
  font-family: "AzeretMono-Variable", monospace;
  line-height: 1.4rem;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --body-color: #040404;
  --button-active: rgb(0, 255, 149);
}

button {
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
  margin: 0 1rem;
}

button:active,
button:hover {
  background-color: var(--button-active);
}
</style>
