<template>
  <TrackButton :onClick="onClick" />
  <TrackText :msg='state.text' />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TrackButton from './components/TrackButton.vue';
import TrackText from './components/TrackText.vue';

export default defineComponent({
  name: 'App',
  components: {
    TrackButton,
    TrackText
  },
  setup() {
    const state = reactive({
      text: "",
    });
    const onClick = () => {
      state.text = "hello track";
    };
    return { state, onClick };
  }
});
</script>

<style>
#app {
  text-align: center;
}
</style>
