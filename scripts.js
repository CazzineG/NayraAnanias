// scripts.js
let currentIndex = 0;

function showNextReview() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    const offset = -currentIndex * 100;
    carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

setInterval(showNextReview, 3000);
