<template>
  <div id="app">
    <MessageBoard :show="false"
                  message="Testing" />
    <GameBoard :board="board"/>
  </div>
</template>

<script>
  import { store } from "./store";
  import MessageBoard from './components/MessageBoard';
  import GameBoard from './components/GameBoard';

  export default {
    name: 'App',
    components: {
      MessageBoard,
      GameBoard
    },
    computed: {
      board() {
        return store.board
      }
    },
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
