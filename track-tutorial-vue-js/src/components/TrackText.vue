<template>
  <div class="hello">
    <div id="track-text">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped>
div {
  font-family: revert-layer;
  font-size: 2.8vw;
}
</style>
