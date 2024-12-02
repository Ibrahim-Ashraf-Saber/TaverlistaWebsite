// Menu
var menu = document.getElementsByClassName("links")[0];
var showMenuSt = false;

function showMenu() {
  if (showMenuSt) {
    // Close
    menu.style.display = "none";
    showMenuSt = false;
  } else {
    // Open
    menu.style.display = "block";
    showMenuSt = true;
  }
}

// Change Photos
var rightBtn = document.getElementById("right-btn");
var leftBtn = document.getElementById("left-btn");
var img1 = document.getElementById("photo-1");
var img2 = document.getElementById("photo-2");
var img3 = document.getElementById("photo-3");
var nameCountry = document.getElementById("name-country");
var imgCount = 2;

img1.style.transition = "all 1s";
img2.style.transition = "all 1s";
img3.style.transition = "all 1s";

function changePhotoRight() {
  imgCount++;
  if (imgCount == 6) imgCount = 1;

  if (imgCount == 1) {
    img1.style.backgroundImage = "url('../imgs/gallary-5.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-1.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-2.jpg')";
    nameCountry.innerHTML = "France";
  } else if (imgCount == 2) {
    img1.style.backgroundImage = "url('../imgs/gallary-1.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-2.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-3.jpg')";
    nameCountry.innerHTML = "Egypt";
  } else if (imgCount == 3) {
    img1.style.backgroundImage = "url('../imgs/gallary-2.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-3.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-4.jpg')";
    nameCountry.innerHTML = "England";
  } else if (imgCount == 4) {
    img1.style.backgroundImage = "url('../imgs/gallary-3.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-4.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-5.jpg')";
    nameCountry.innerHTML = "Thailand";
  } else if (imgCount == 5) {
    img1.style.backgroundImage = "url('../imgs/gallary-4.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-5.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-1.jpg')";
    nameCountry.innerHTML = "Turkey";
  }
}

function changePhotoLeft() {
  imgCount--;
  if (imgCount == 0) imgCount = 5;

  if (imgCount == 1) {
    img1.style.backgroundImage = "url('../imgs/gallary-5.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-1.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-2.jpg')";
    nameCountry.innerHTML = "France";
  } else if (imgCount == 2) {
    img1.style.backgroundImage = "url('../imgs/gallary-1.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-2.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-3.jpg')";
    nameCountry.innerHTML = "Egypt";
  } else if (imgCount == 3) {
    img1.style.backgroundImage = "url('../imgs/gallary-2.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-3.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-4.jpg')";
    nameCountry.innerHTML = "England";
  } else if (imgCount == 4) {
    img1.style.backgroundImage = "url('../imgs/gallary-3.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-4.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-5.jpg')";
    nameCountry.innerHTML = "Thailand";
  } else if (imgCount == 5) {
    img1.style.backgroundImage = "url('../imgs/gallary-4.jpg')";
    img2.style.backgroundImage = "url('../imgs/gallary-5.jpg')";
    img3.style.backgroundImage = "url('../imgs/gallary-1.jpg')";
    nameCountry.innerHTML = "Turkey";
  }
}

// Open Country
function openCountry() {
  console.log(imgCount);

  if (imgCount == 1)
    window.open("../pages/countries/html/france.html", "_blank");
  else if (imgCount == 2)
    window.open("../pages/countries/html/egypt.html", "_blank");
  else if (imgCount == 3)
    window.open("../pages/countries/html/england.html", "_blank");
  else if (imgCount == 4)
    window.open("../pages/countries/html/thailand.html", "_blank");
  else if (imgCount == 5)
    window.open("../pages/countries/html/turkey.html", "_blank");
}

// Dark Mode
var root = document.querySelector(":root");
var darkbtn = document.getElementsByClassName("dark-btn")[0];
var menuIcon = document.getElementsByClassName("menu")[0];
var darkModeSt = false;
function darkMode() {
  if (darkModeSt) {
    // Light
    root.style.setProperty("--main-color", "white");
    root.style.setProperty("--txt-color", "black");
    root.style.setProperty("--txt-color2", "gray");
    darkbtn.innerHTML = "Light";
    menuIcon.style.backgroundImage = "url('../imgs/menu-icon-black.svg')";
    darkModeSt = false;
  } else {
    // Dark
    root.style.setProperty("--main-color", "#181a1b");
    root.style.setProperty("--txt-color", "white");
    root.style.setProperty("--txt-color2", "cadetblue");
    menuIcon.style.backgroundImage = "url('../imgs/menu-icon-white.svg')";
    darkbtn.innerHTML = "Dark";
    darkModeSt = true;
  }
}
