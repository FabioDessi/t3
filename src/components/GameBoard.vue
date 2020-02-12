<template>
  <table class="game-board__table">
    <tr class="game-board__row"
        v-for="(group, i) in [0, 1, 2]"
        :key="i">
      <td class="game-board__column"
          v-for="(cell, i) in board.slice( i * 3, (i + 1) * 3)"
          :key="i" >
      <span v-if="typeof cell !== 'number'">
        {{ cell }}
      </span>
        <span v-else
              v-on:click="onClickHandler"
              :id="(group * 3) + i">
      </span>
      </td>
    </tr>
  </table>
</template>
<script>
  import store from '../store';

  export default {
    name: 'GameBoard',
    methods: {
      onClickHandler: function (event) {
        if(!this.gameOver && this.playerTurn) store.turn(Number.parseInt(event.target.id, 10), 'O');
      }
    },
    props: {
      board: {
        type: Array,
        required: true
      },
      gameOver: {
        type: Boolean,
        required: true
      },
      playerTurn: {
        type: Boolean,
        required: true
      }
    }
  }
</script>
<style>
  .game-board__table {
    border-collapse: collapse;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -155px;
    margin-top: -155px;
  }

  .game-board__column {
    border: 2px solid #333;
    height: 100px;
    width: 100px;
    text-align: center;
    vertical-align: middle;
    font-family: "Comic Sans MS", cursive;
    font-size: 70px;
    cursor: pointer;
  }

  .game-board__column span {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
