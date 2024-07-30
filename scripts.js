// scripts.js

function downloadPDF(url, filename) {
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function openWhatsApp() {
    window.location.href = 'https://wa.me/1234567890'; // Substitua pelo número real do WhatsApp
}

// Carrossel automático com imagens
let currentCarouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextCarouselItem() {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
    showCarouselItem(currentCarouselIndex);
}

setInterval(nextCarouselItem, 3000); // Troca a cada 3 segundos

// Animação de foto e nome
window.addEventListener('load', () => {
    const profilePhoto = document.querySelector('.profile-photo');
    const profileName = document.querySelector('.profile-name');
    
    profilePhoto.classList.add('animate-photo');
    profileName.classList.add('animate-name');
});
