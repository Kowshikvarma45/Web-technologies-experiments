const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn')

let currentIndex = 0;

setInterval(showNextImage,5000)

function showNextImage() {
  currentIndex = (currentIndex + 1) % slides.length;
  document.querySelector('.image-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}
function showPrevImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    document.querySelector('.image-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);
