const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

function moveButton() {
  const padding = 50;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

yesBtn.addEventListener("click", () => {
  alert("Yay! I can’t wait! 🥰❤️");
});
