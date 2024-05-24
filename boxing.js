let health = 100;
const imgSrc = document.getElementById("bag");
const punchButton = document.getElementById("punch-button");
const resetButton = document.getElementById("reset-button");
const healthBar = document.querySelector(".health-bar");

punchButton.addEventListener("click", () => {
  if (health > 0) {
    health -= 20;
    healthBar.style.width = health + "px";
  }
  if (health < 1) {
    imgSrc.setAttribute("src", "images/bag-burst.png");
  }
  console.log(healthBar.style.width);
});
resetButton.addEventListener("click", () => {
  healthBar.style.width = 100 + "px";
  health = 100
  imgSrc.setAttribute("src", "images/bag.png");
});
