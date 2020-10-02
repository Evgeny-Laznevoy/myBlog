<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import './assets/index.css';

#app {
  width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  background-color: #FAFBFC;
}

</style>
