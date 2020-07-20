<template>
  <div id="app">
    {{ count }}
    <br>
    {{ $store.getters.doubleCount }}
    <br>
    <!--写错的原因，不能用 this.$store，默认都是 this-->
    <button @click="$store.commit('increment')">点击+1</button> 
    <button @click="$store.dispatch('increment')">点击+1</button> 
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    count() {
        return this.$store.state.count
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
