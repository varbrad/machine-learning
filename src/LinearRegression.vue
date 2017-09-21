<template>
  <div class="linear-regression">
    <h1>Linear Regression <router-link class="small" to="/">&lt; Go Back</router-link></h1>
    <div class="flex">
      <svg ref="scatter" width="400" height="200" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet"></svg>
    </div>
  </div>
</template>

<script>
import { start } from './linear-regression'

export default {
  name: 'linear-regression',
  mounted () {
    start(this.$refs.scatter)
  }
}
</script>

<style scoped>
.linear-regression > .flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: #f9f9f9;
  user-select: none;
}

.linear-regression > .flex > svg {
  width: 100%;
  height: 100%;
}

.linear-regression > .flex > svg .active {
  stroke: black;
  stroke-width: 8px;
}
</style>
