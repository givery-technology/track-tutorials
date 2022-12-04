<template>
  <div id="track-text">{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    msg: String
  }
});
</script>

<style scoped>
div {
  font-family: revert-layer;
  font-size: 2.8vw;
}
</style>
