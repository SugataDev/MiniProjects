const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

// Function to move the "No" button randomly
function moveButton() {
  // Calculate available screen space safely
  const padding = 50;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  // Generate random positions within viewport limits
  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  // Switch button to fixed positioning so it can fly anywhere on screen
  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Trigger movement on both desktop hover and mobile touch
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents accidental clicks on mobile
  moveButton();
});

// Action when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  alert("Yay! I can’t wait! 🥰❤️");
});
