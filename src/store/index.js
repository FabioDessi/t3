import Vue from 'vue';
import { bestSpot, checkTie, checkWin, emptySquares } from '../utils/'
const store = Vue.observable({
  state: {
    board: Array.from(Array(9).keys()),
    gameOver: false,
    gameWon: {},
    playerTurn: true
  },

  startGame() {
    this.state.gameOver = false;
    this.state.board = Array.from(Array(9).keys());
    this.state.gameWon = Object.assign({})
  },

  turn(cell, player) {
    this.state.board.splice(cell, 1, player);
    if(checkWin(this.state.board, player)) {
      this.gameOver(checkWin(this.state.board, player));
    } else {
      if(checkTie(this.state.board)) this.gameOver({index: null, player: 'Tie Game'})
    }
    this.state.playerTurn = false;
  },

  aiTurn() {
    if (!this.state.playerTurn && emptySquares(this.state.board).length !== 0 ) {
      this.state.board.splice(bestSpot(this.state.board), 1, 'X');
      if(checkWin(this.state.board, 'X')) {
        this.gameOver(checkWin(this.state.board, 'X'));
      } else {
        if(checkTie(this.state.board)) this.gameOver({index: null, player: 'Tie Game'})
      }
      this.state.playerTurn = true;
    }
  },

  gameOver(gameWon) {
    this.state.gameOver = true;
    this.state.gameWon =  Object.assign({}, gameWon);
  }

});

export default store;
