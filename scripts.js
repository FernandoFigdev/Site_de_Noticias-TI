let slideIndex = 0;
let slideWidth;
const slideshowArea = document.querySelector(".slideshow_area");

window.onload = function() {
    showSlide(slideIndex);
    adjustSlideWidth();
    setInterval(nextSlide, 5000);
    window.addEventListener('resize', adjustSlideWidth);
}

function adjustSlideWidth() {
    const slideshow = document.getElementById("slideshow");
    slideWidth = slideshow.offsetWidth;
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.style.width = slideWidth + "px";
    });

    showSlide(slideIndex);
}

function showSlide(index) {
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    slideshowArea.style.transition = "transform 0.5s ease";
    slideshowArea.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

