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

// Dark Mode
var root = document.querySelector(":root");
var darkbtn = document.getElementsByClassName("dark-btn")[0];
var menuIcon = document.getElementsByClassName("menu")[0];
var darkModeSt = false;
function darkMode() {
  if (darkModeSt) {
    // Light
    root.style.setProperty("--main-color", "white");
    root.style.setProperty("--main-color2", "#f0f6ff");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--text-color2", "gray");
    root.style.setProperty("--text-color3", "#0057d9");
    root.style.setProperty("--footer", "#191515");
    darkbtn.innerHTML = "Light";
    menuIcon.style.backgroundImage = "url('../../../imgs/menu-icon-black.svg')";
    darkModeSt = false;
  } else {
    // Dark
    root.style.setProperty("--main-color", "#181a1b");
    root.style.setProperty("--main-color2", "gray");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--text-color2", "cadetblue");
    root.style.setProperty("--text-color3", "#0057d9");
    root.style.setProperty("--footer", "black");
    menuIcon.style.backgroundImage = "url('../../../imgs/menu-icon-white.svg')";
    darkbtn.innerHTML = "Dark";
    darkModeSt = true;
  }
}
