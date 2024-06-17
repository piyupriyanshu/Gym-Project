// For Carousel

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');

    var carouselIndex = 0;

    rightArrow.addEventListener('click', function() {
        carouselIndex = (carouselIndex + 1) % 4;
        slider.style.transform = 'translate(' + (carouselIndex * -25) + '%)';
    });

    leftArrow.addEventListener('click', function() {
        carouselIndex = (carouselIndex - 1) % 4;
        slider.style.transform = 'translate(' + (carouselIndex * -25) + '%)';
    });
});



































// const slider = document.querySelector('.slider');

// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');

// var carouselIndex = 0;

// rightArrow.addEventListener('click', function() {
//     carouselIndex +=1;
//     slider.style.transform = 'translate(" + (carouselIndex) * -25+ "%)';
// });

// leftArrow.addEventListener('click', function() {
//     carouselIndex -=1;
//     slider.style.transform = 'translate(" + (carouselIndex) * -25+ "%)';
// });

// const slider = document.querySelector('container3 .carousel .slider');
// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');

// var carouselIndex = 0;

// rightArrow.addEventListener('click', function() {
//     carouselIndex += 1;
//     slider.style.transform = 'translate(' + (carouselIndex * -25) + '%)';
// });

// leftArrow.addEventListener('click', function() {
//     carouselIndex -= 1;
//     slider.style.transform = 'translate(' + (carouselIndex * -25) + '%)';
// });
