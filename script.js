var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModal = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function () {
  modal.style.display = "flex";
};

// Закриття вікна при натисканні на Х
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Закриття вікна при натисканні поза його межами
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};