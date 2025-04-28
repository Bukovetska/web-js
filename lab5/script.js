const game = document.getElementById('game');
const scoreShow = document.getElementById('score');
const timerShow = document.getElementById('timer');

let score = 0;
let settings = null;
let X = 0;
let Y = 0;

const range = {
  easy:   { timetoplay: 10, size: 80, mindist: 50,  maxdist: 300 },
  medium: { timetoplay: 5,  size: 50, mindist: 200, maxdist: 500 },
  hard:   { timetoplay: 2,  size: 30, mindist: 600, maxdist: 1000 }
};

const Timer = {
  id: null,
  time: 0,
  back: null,

  start(time, back) {
    this.stop();
    this.time = time;
    this.back = back;
    timerShow.textContent = this.time;

    this.id = setInterval(() => {
      this.time--;
      timerShow.textContent = this.time;
      if (this.time <= 0) {
        this.stop();
        this.back();
      }
    }, 1000);
  },

  stop() {
    if (this.id !== null) {
      clearInterval(this.id);
      this.id = null;
    }
  },

  reset() {
    this.start(settings.timetoplay, this.back);
  }
};

function position(size, mindist, maxdist) {
  const padding = 10;
  const maxX = game.clientWidth - size - padding;
  const maxY = game.clientHeight - size - padding;

  let x, y, dist;

  do {
    x = Math.floor(Math.random() * maxX);
    y = Math.floor(Math.random() * maxY);
    const dx = x - X;
    const dy = y - Y;
    dist = Math.sqrt(dx * dx + dy * dy);
  } while (dist < mindist || dist > maxdist);

  X = x;
  Y = y;
  return { x, y };
}


function create(size, color) {
  const { x, y } = position(size, settings.mindist, settings.maxdist);

  const html = `
    <div id="element"
         style="
           width: ${size}px;
           height: ${size}px;
           background-color: ${color};
           position: absolute;
           left: ${x}px;
           top: ${y}px;
         ">
    </div>
  `;

  game.innerHTML = html;
  const element = document.getElementById('element');
  element.addEventListener('click', click);

  return element;
}


function click() {
  score++;
  scoreShow.textContent = score;
  Timer.reset();   
  show();         
}

function show() {
  game.innerHTML = '';
  const element = create(settings.size, settings.color);
  game.appendChild(element);
}

(function () {
  const value = new URLSearchParams(window.location.search);
  const level = value.get('level');
  const color = value.get('color');

  settings = {
    timetoplay: range[level].timetoplay,
    size: range[level].size,
    mindist: range[level].mindist,
    maxdist: range[level].maxdist,
    color: color
  };

  score = 0;
  scoreShow.textContent = score;

  show();
  Timer.start(settings.timetoplay, () => {
    alert(`Ви програли! Ваш рахунок: ${score}`);
    window.location.href = 'index.html';
  });
})();
