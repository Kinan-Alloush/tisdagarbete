// Visa/dölj text

const toggleBtn = document.querySelector("#toggleBtn");

const extraText = document.querySelector("#extraText");
 
toggleBtn.addEventListener("click", () => {

  if (extraText.style.display === "none") {

    extraText.style.display = "block";

  } else {

    extraText.style.display = "none";

  }

});
 
// Byt tema (bakgrund + text)

const themeBtn = document.querySelector("#themeBtn");

const body = document.querySelector("body");
 
themeBtn.addEventListener("click", () => {

  body.classList.toggle("dark-theme");

});

 