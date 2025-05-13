let start = [];
let nowBoard = [];
let moves = 0;
let timer = 0;
let timerId;
let bestMoves = 0;
let prevLevel = -1;
let lastMove = null;

const game = document.getElementById('game');
const move = document.getElementById('moves');
const time = document.getElementById('timer');
const min = document.getElementById('min');

function board() {
  game.innerHTML = '';
  for (let y = 0; y < nowBoard.length; y++) {
    for (let x = 0; x < nowBoard[y].length; x++) {
      const div = document.createElement('div');
      if (nowBoard[y][x] === 1) {
      div.className = 'cell on';
      } else {
        div.className = 'cell';
    }   

      div.id = `cell-${x}-${y}`; 

      div.onclick = function () {
        if (lastMove && lastMove.x === x && lastMove.y === y) {
          neighbors(x, y);
          moves = Math.max(0, moves - 1);
          move.textContent = moves;
          lastMove = null;
        } else {
          neighbors(x, y);
          moves++;
          move.textContent = moves;
          lastMove = { x, y };
        }

        board();
        isWin();
      };

      game.appendChild(div);
    }
  }
}


function neighbors(x, y) {
  const directions = [[0, 0], [0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let i = 0; i < directions.length; i++) {
    const dx = directions[i][0];
    const dy = directions[i][1];
    const nx = x + dx;
    const ny = y + dy;
    if (ny >= 0 && ny < 5 && nx >= 0 && nx < 5) {
      nowBoard[ny][nx] = 1 - nowBoard[ny][nx];
    }
  }
}

function isWin() {
  let off = true;
  for (let y = 0; y < nowBoard.length; y++) {
    for (let x = 0; x < nowBoard[y].length; x++) {
      if (nowBoard[y][x] === 1) {
        off = false;
        break;
      }
    }
    if (!off) break;
  }
  if (off) {
    clearInterval(timerId);
    alert(`Ви виграли за ${moves} ходів і ${timer} секунд!`);
    restart();
  }
}

function restart() {
  for (let y = 0; y < start.length; y++) {
    for (let x = 0; x < start[y].length; x++) {
      nowBoard[y][x] = start[y][x];
    }
  }

  moves = 0;
  move.textContent = moves;
  lastMove = null;

  clearInterval(timerId);
  startTimer();
  board(nowBoard);
}

function startTimer() {
  clearInterval(timerId);
  timer = 0;
  time.textContent = timer;
  timerId = setInterval(() => {
    timer++;
    time.textContent = timer;
  }, 1000);
}

function newGame() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * data.length);
      } while (newIndex === prevLevel);

      prevLevel = newIndex;
      const level = data[newIndex];

      start = [];
      nowBoard = [];
      for (let y = 0; y < level.field.length; y++) {
        start[y] = [];
        nowBoard[y] = [];
        for (let x = 0; x < level.field[y].length; x++) {
          start[y][x] = level.field[y][x];
          nowBoard[y][x] = level.field[y][x];
        }
      }

      bestMoves = level.min;
      min.textContent = bestMoves;
      moves = 0;
      move.textContent = moves;
      lastMove = null;

      startTimer();
      board(nowBoard);
    });
}

document.getElementById('newGame').onclick = newGame;
document.getElementById('restart').onclick = restart;

newGame();
