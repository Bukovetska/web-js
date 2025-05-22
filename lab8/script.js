const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('show');
});

let slide = 0;
const allSlides = document.querySelectorAll('.slide');
const allDots = document.querySelectorAll('.dot');

function show(value) {
  for (let i = 0; i < allSlides.length; i++) {
    allSlides[i].classList.remove('active');
    allDots[i].classList.remove('active');
  }

  allSlides[value].classList.add('active');
  allDots[value].classList.add('active');
  slide = value;
}

const previous = document.querySelector('.prev');
const next = document.querySelector('.next');

let auto;

function start() {
  auto = setTimeout(() => {
    show((slide + 1) % allSlides.length);
    start();
  }, 3000);
}

function reset() {
  clearTimeout(auto);
  start();
}

start();

previous.onclick = function() {
  show((slide - 1 + allSlides.length) % allSlides.length);
  reset();
};

next.onclick = function() {
  show((slide + 1) % allSlides.length);
  reset();
};

for (let i = 0; i < allDots.length; i++) {
  allDots[i].addEventListener('click', function() {
    show(i);
    reset();
  });
}
