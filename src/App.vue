<template>
  <div id="app">
    <MessageBoard :show="true"
                  message="Testing" />
  </div>
</template>

<script>
  import MessageBoard from './components/MessageBoard';

  export default {
    name: 'App',
    components: {
      MessageBoard
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
