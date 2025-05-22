const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

function loadSlides() {
  fetch('slides.json')
    .then(response => response.json())
    .then(data => initialize(data));
}

function initialize(data) {
  const carrousel = document.getElementById('carrousel');
  const indicator = document.getElementById('indicator');

  for (let i = 0; i < data.length; i++) {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `<img src="${data[i].src}" alt="${data[i].alt}">`;
    carrousel.appendChild(slide);

    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.slide = i;
    indicator.appendChild(dot);
  }

  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let timer;

  function show(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      dots[i].classList.remove('active');
    }
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }

  function start() {
    timer = setTimeout(() => {
      show((current + 1) % slides.length);
      start();
    }, 3000);
  }

  function reset() {
    clearTimeout(timer);
    start();
  }

  start();

  document.querySelector('.prev').onclick = () => {
    show((current - 1 + slides.length) % slides.length);
    reset();
  };

  document.querySelector('.next').onclick = () => {
    show((current + 1) % slides.length);
    reset();
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
      show(i);
      reset();
    };
  }
}

loadSlides();
