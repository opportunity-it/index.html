//    const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === index);
//     });
// }

// document.querySelector('.slider .next').addEventListener('click', () => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// });

// document.querySelector('.slider .prev').addEventListener('click', () => {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length; // перемикання на попередній слайд
//     showSlide(currentSlide);
// });

// showSlide(currentSlide);



const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); 
    });
}

document.querySelector('.slider .next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide);
});

document.querySelector('.slider .prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    showSlide(currentSlide);
});

// Додавання функції для свайпу
let startX;

const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

slider.addEventListener('touchmove', (event) => {
    const moveX = event.touches[0].clientX;
    const diffX = startX - moveX;

    if (diffX > 50) {
        // Свайп вліво
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    } else if (diffX < -50) {
        // Свайп вправо
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
});

// Ініціалізація першого слайду
showSlide(currentSlide);
