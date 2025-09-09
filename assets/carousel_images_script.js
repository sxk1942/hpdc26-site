carouselWrapper = document.querySelector('.image-wrapper');
prevBtn = document.querySelector('.prev-btn');
nextBtn = document.querySelector('.next-btn');
images = document.querySelectorAll('.carousel-image');

currentIndex = 0;
imageWidth = images[0].clientWidth;

nextBtn.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  //carouselWrapper.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
  carouselWrapper.style.transform = 'translateX(' + (-imageWidth * currentIndex) + 'px)';
});

prevBtn.addEventListener('click', function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  //carouselWrapper.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
  carouselWrapper.style.transform = 'translateX(' + (-imageWidth * currentIndex) + 'px)';
});
