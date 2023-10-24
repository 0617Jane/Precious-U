// Initialize array subscript
let slideIndex = 0;
showSlides();
// Operate previous/next picture
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Display the current picture based on the subscript
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
// Set a loop timer to rotate pictures
setInterval(() => {
  plusSlides(1)
}, 3000)