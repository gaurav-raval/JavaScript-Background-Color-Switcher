const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id;
  });
});
