const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 3
  const randowNumber = getRandomNumber();
  console.log(randowNumber);
  document.body.style.backgroundColor = colors[randowNumber];
  color.textContent = colors[randowNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
