let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const sliderDotsContainer = document.querySelector('.slider-dots');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    // Highlight active dot
    const dots = sliderDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function createDots() {
    slides.forEach((slide, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(i);
            slideIndex = i;
        });
        sliderDotsContainer.appendChild(dot);
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

createDots();
showSlide(slideIndex);

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const znak = document.querySelectorAll('.znak');
    const nextButton = document.getElementById('nextButton');

    // Функция для отображения следующего слайда
    function showNextSlide() {
      znak[currentSlide].style.display = 'none'; // Скрыть текущий слайд
      currentSlide = (currentSlide + 1) % znak.length; // Получить индекс следующего слайда
      znak[currentSlide].style.display = 'block'; // Показать следующий слайд
    }

    // Добавляем обработчик события для кнопки "Следующий"
    nextButton.addEventListener('click', showNextSlide);
  });