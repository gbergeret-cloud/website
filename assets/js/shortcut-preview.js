const previewElement = document.querySelectorAll(".preview");
const commingSoonElements = document.querySelectorAll(".teaser");

//Don't look futher the password is here:
const pwd = "Control" + "devmode" + "Shift";

let buffer = "";

const isLocalEnv = window.location.href.includes("0.0.0.0:4000");

const showDevMode = () => {
  previewElement.forEach((el) => {
    el.classList.remove("preview");
  });
  commingSoonElements.forEach((el) => {
    el.style.display = "none";
  });
};

if (isLocalEnv) {
  showDevMode();
}

document.addEventListener("keydown", function (event) {
  if (buffer.length > pwd.length) {
    buffer = "";
  }
  if (event.ctrlKey) {
    buffer = event.key;
  } else {
    buffer += event.key;
  }

  if (buffer === pwd) {
    showDevMode();
  }
});
