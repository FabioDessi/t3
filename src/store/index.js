import Vue from 'vue';

export const store = Vue.observable({
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
});

export const mutations = {
  turn(cell) {
    store.board.splice(cell, 1, 'O')

  }
};
