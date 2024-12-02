// Dark Mode
var root = document.querySelector(":root");
var darkbtn = document.getElementsByClassName("dark-btn")[0];
var darkModeSt = false;
function darkMode() {
  if (darkModeSt) {
    // Light
    root.style.setProperty("--main-color", "white");
    root.style.setProperty("--txt-color", "black");
    root.style.setProperty("--txt-color2", "gray");
    root.style.setProperty("--footer", "#191515");
    root.style.setProperty("--review-back", "rgba(128, 128, 128, 0.6)");
    root.style.setProperty("--btn-back", "transparent");
    darkbtn.innerHTML = "Light";
    darkModeSt = false;
  } else {
    // Dark
    root.style.setProperty("--main-color", "#181a1b");
    root.style.setProperty("--txt-color", "#ffffff");
    root.style.setProperty("--txt-color2", "cadetblue");
    root.style.setProperty("--footer", "#000000");
    root.style.setProperty("--review-back", "rgba(91, 146, 148, 0.6)");
    root.style.setProperty("--btn-back", "#181a1b");
    darkbtn.innerHTML = "Dark";
    darkModeSt = true;
  }
}
