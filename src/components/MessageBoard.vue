<!-- TODO: Add restart game method -->
<template>
  <div class="message-board__wrapper" v-if="show">
    <h1 class="message-board__header">
      {{ gameWon.player }}
    </h1>
    <button class="message-board__button"
            v-on:click="onClickHandler">
      Restart game
    </button>
  </div>
</template>
<script>
  import store from '../store';

  export default {
    name: 'MessageBoard',
    methods: {
      onClickHandler: function () {
        store.startGame();
      }
    },
    props: {
      gameWon: {
        type: Object,
        required: true
      },
      show: {
        type: Boolean,
        required: true,
      }
    }
  }
</script>
<style>
  .message-board__wrapper {
    background: #cccccc;
    z-index: 10;
    padding: 1rem;
    width: 250px;
    height: 150px;
    margin: 0 auto;
  }

  .message-board__header {
    text-align: center;
  }

  .message-board__button {
    margin: 0 auto;
    display:block;
    width: 200px;
    height: 20px;
  }
</style>
