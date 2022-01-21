var mobilenav = document.getElementById("mobileNav");
var button = document.getElementById("menu");

mobilenav.style.display = "none";
button.style.opacity = 1;

button.onclick = () => {
  if (mobilenav.style.display == "none") {
    mobilenav.style.display = "block";
    button.style.opacity = 0.5;
  } else {
    mobilenav.style.display = "none";
    button.style.opacity = 1;
  }
};
