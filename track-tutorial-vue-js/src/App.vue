<template>
  <TrackButton :onClick="onClick" />
  <TrackText :msg='text' />
</template>

<script>
import TrackButton from './components/TrackButton.vue'
import TrackText from './components/TrackText.vue'

export default {
  name: 'App',
  components: {
    TrackButton,
    TrackText
  },
  data() {
    return {
      text: "",
    }
  },
  methods: {
    onClick() {
      this.text = "hello track";
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
