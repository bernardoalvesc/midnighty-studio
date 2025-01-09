const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.getElementById('carousel');

let index = 0;
const totalItems = 4;  // Número total de imagens no carrossel

nextBtn.addEventListener('click', () => {
    if (index < totalItems - 1) {  // O índice vai até 3 para 4 imagens
        index++;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
});
