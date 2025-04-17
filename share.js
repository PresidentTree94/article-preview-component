//Find the share button and the share bubble.
const shareButton = document.getElementById("share");
const shareBubble = document.getElementById("bubble");

//Toggles the share button and bubble according to the values passed.
function modifyBubble(bckgrndClr, fltr, dsply) {
  shareButton.style.backgroundColor = bckgrndClr;
  shareButton.firstElementChild.style.filter = fltr;
  shareBubble.style.display = dsply;
}

//Shows and hides the share bubble when the share button is clicked.
shareButton.addEventListener("click", () => {
  if (shareBubble.style.display == "flex") {
    modifyBubble("var(--aliceBlue)", "none", "none");
  } else {
    modifyBubble("var(--slateGray)", "brightness(0) invert(1)", "flex");
  }
});

//Hides the share bubble when the user clicks outside the button and bubble.
document.addEventListener("click", (event) => {
  if (!shareButton.contains(event.target) && !shareBubble.contains(event.target)) {
    modifyBubble("var(--aliceBlue)", "none", "none");
  }
});

//Prevents the bubble from hiding when the user clicks inside the bubble.
shareBubble.addEventListener("click", (event) => {
  event.stopPropagation();
});