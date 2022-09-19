<template>
  <button id="track-button" v-on:click="onClick">Click me!!</button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  font-size: 1.8vw;
  margin: 2em;
  padding: 8px 20px;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
</style>
