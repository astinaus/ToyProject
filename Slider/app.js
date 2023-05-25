const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const slideContainer = document.querySelector('.slider-container');

const renderSlides = () => {
  const images = [
    '강아지.jpg',
    '고양이.jpg',
    '병아리.jpg',
    '수달.jpg',
    '알파카.jpg',
    '토끼.jpg',
    '판다.jpg',
    '햄스터.jpg',
  ];
  const frag = document.createDocumentFragment();

  images.forEach((image) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = `./images/${image}`;
    img.alt = image.slice(0, -4);
    img.className = 'slide-img';
    div.className = 'slide';
    div.appendChild(img);
    frag.appendChild(div);
  });
  slideContainer.appendChild(frag);
};

renderSlides();

const slides = document.querySelectorAll('.slide');
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});

prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = 'none';
