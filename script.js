document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slideshow .slide');
    const slideInterval = 5000;

    function changeSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
        resetAutoSlide();
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
        resetAutoSlide();
    });

    let autoSlide = setInterval(function() {
        changeSlide(1);
    }, slideInterval);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(function() {
            changeSlide(1);
        }, slideInterval);
    }
});
