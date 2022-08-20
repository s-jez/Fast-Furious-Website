var audio = document.querySelector(".my-audio");
audio.volume = 0.3;

var button = document.querySelector(".btn-color");
button.addEventListener("click", () => {
  var random = Math.floor(Math.random() * 5 + 1);
  if (random == 1) button.style.backgroundColor = "forestgreen";
  else if (random == 2) button.style.backgroundColor = "tomato";
  else if (random == 3) button.style.backgroundColor = "red";
  else if (random == 4) button.style.backgroundColor = "lightseagreen";
  else if (random == 5) button.style.backgroundColor = "orchid";
  else button.style.backgroundColor = "white";
});
