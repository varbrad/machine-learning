<template>
  <div id="app">
    <router-view class="root-router"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  font-family: 'Space Mono', monospace;
}

#app {
  display: flex;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
}

#app > .root-router {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(100% - 18vmin);
  height: calc(100% - 18vmin);
  box-shadow: 0 0 0 4px black, 1.5vmin 1.75vmin 0 0 rgba(0, 0, 0, .2);
  background-color: white;
}

#app > .root-router > h1 {
  display: flex;
  margin: 0;
  font-size: 2rem;
  padding: .5rem .5rem 0 .5rem;
  font-weight: 400;
  color: #2849f2;
  align-items: center;
  justify-content: center;
}

#app > .root-router > h1 > .small {
  font-size: 1rem;
  padding: .25rem .5rem;
  margin: .5rem;
  border: 1px dashed #c0c0c0;
  font-weight: bold;
  color: #393939;
  border-radius: 999px;
}

#app > .root-router > p {
  margin: 0;
  font-size: 1.2rem;
  padding: .5rem .5rem 0 .5rem;
  font-weight: 400;
  color: #191919;
}

#app > .root-router > a {
  margin: 0;
  font-size: 1.2rem;
  padding: .5rem .5rem 0 .5rem;
  font-weight: 700;
  color: #f24928;
}
</style>
