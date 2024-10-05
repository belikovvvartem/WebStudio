var modal = document.getElementById("modal");
var closeModal = document.getElementsByClassName("close")[0];
var modalTriggers = document.querySelectorAll(".open-modal");

modalTriggers.forEach(function (trigger) {
  trigger.onclick = function () {
    modal.style.display = "flex";
  };
});

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
