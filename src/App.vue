<template>
  <div id="app">
    <MessageBoard :show="gameOver"
                  :game-won="gameWon" />
    <GameBoard :board="board"
               :game-over="gameOver"
               :player-turn="playerTurn" />
  </div>
</template>
<script>
  import store from './store';
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
        return store.state.board
      },
      gameOver() {
        return store.state.gameOver
      },
      playerTurn() {
        return store.state.playerTurn
      },
      gameWon() {
        return store.state.gameWon
      }
    },
    watch: {
      playerTurn: function() {
        store.aiTurn()
      }
    }
  }
</script>
