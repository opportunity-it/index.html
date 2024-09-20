// const slides = document.querySelectorAll('.slide');
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
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
//     showSlide(currentSlide);
// });


// let startX;

// const slider = document.querySelector('.slider');

// slider.addEventListener('touchstart', (event) => {
//     startX = event.touches[0].clientX;
// });

// slider.addEventListener('touchmove', (event) => {
//     const moveX = event.touches[0].clientX;
//     const diffX = startX - moveX;

//     if (diffX > 50) {
     
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//     } else if (diffX < -50) {
   
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(currentSlide);
//     }
// });


// showSlide(currentSlide);


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isAnimating = false; // Змінна для перевірки анімації

function showSlide(index) {
    if (isAnimating) return; // Якщо анімація активна, виходимо з функції
    isAnimating = true; // Встановлюємо, що анімація активна

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); 
    });

    // Встановлюємо затримку перед дозволом наступної анімації
    setTimeout(() => {
        isAnimating = false; // Дозволяємо наступну анімацію через 500 мс
    }, 300); // Час затримки, що відповідає вашій анімації
}

document.querySelector('.slider .next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide);
});

document.querySelector('.slider .prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    showSlide(currentSlide);
});

let startX;

const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

slider.addEventListener('touchmove', (event) => {
    const moveX = event.touches[0].clientX;
    const diffX = startX - moveX;

    if (Math.abs(diffX) > 50) { // Додаємо перевірку для свіпу
        if (diffX > 0) {
            currentSlide = (currentSlide + 1) % slides.length; // Наступний слайд
        } else {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Попередній слайд
        }
        showSlide(currentSlide);
    }
});

showSlide(currentSlide);
