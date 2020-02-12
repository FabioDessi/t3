const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

export function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: `${player} Wins!`};
      break;
    }
  }
  return gameWon;
}

export function checkTie(board) {
  return emptySquares(board).length === 0;
}

export function bestSpot(board) {
  return minimax(board, 'X').index;
}

export function emptySquares(board) {
  return board.filter(s => typeof s == 'number')
}

function minimax(newBoard, player) {
  let availSpots = emptySquares(newBoard);

  if (checkWin(newBoard, 'O')) {
    return {score: -10};
  } else if (checkWin(newBoard, 'X')) {
    return {score: 10};
  } else if (availSpots.length === 0) {
    return {score: 0};
  }
  let moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    let move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player === 'X') {
      let result = minimax(newBoard, 'O');
      move.score = result.score;
    } else {
      let result = minimax(newBoard, 'X');
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;

    moves.push(move);
  }

  let bestMove;
  if(player === 'X') {
    let bestScore = -10000;
    for(let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for(let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}
