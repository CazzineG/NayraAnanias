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

function downloadPDF(pdfPath, fileName) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openWhatsApp() {
    const phoneNumber = '5519999670165'; // número de telefone 
    const message = encodeURIComponent('Olá Nayra, gostaria de agendar um horário.'); // mensagem inicial
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}
