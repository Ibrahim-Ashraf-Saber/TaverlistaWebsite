// Change Image
let currentIndex = 0;
const images = document.querySelectorAll("#slideshow img");
const totalImages = images.length;
function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add("active");
}
setInterval(showNextImage, 3000);

// Show Password
var showPass = document.getElementById("showPass");
var pass = document.getElementById("input-pass");
function showPassword() {
  if (showPass.checked) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
