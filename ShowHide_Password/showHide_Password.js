var state = false;
const eyes = document.getElementById("eye");
const passWord = document.getElementById("password");

eyes.addEventListener("click", function () {
  if (state) {
    passWord.setAttribute("type", "password");
    eyes.style.color = "#7a797e";
    state = false;
  } else {
    passWord.setAttribute("type", "text");
    eyes.style.color = "#5887ef";
    state = true;
  }
});
