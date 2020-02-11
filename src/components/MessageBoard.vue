<!-- TODO: Add restart game method -->
<template>
  <div class="message-board__wrapper" v-if="show">
    <h1 class="message-board__header">
      {{message}}
    </h1>
    <button class="message-board__button">Restart game</button>
  </div>
</template>
<script>
  export default {
    name: 'MessageBoard',
    props: {
      message: {
        type: String
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
    position: absolute;
    width: 400px;
    height: 200px;
    top: 20px;
    left: 50%;
    margin-left: -200px;
    background: #cccccc;
  }
</style>
