var link = document.querySelector(".feedback-link");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userComment = popup.querySelector("[name=comment]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userComment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains("modal-show")) {
      evt.preventDefault();
      overlay.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
