let image = document.querySelector(".bulb-status");
let bulb_click_btn = document.querySelector("#toggle-btn");
let bulbon = false;
bulb_click_btn.addEventListener("click", function () {
  if (bulbon === false) {
    image.src = "./lighton.png";
    bulbon = true;
  } else {
    image.src = "./lightoff.png";
    bulbon = false;
  }
});
