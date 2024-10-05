const menuLinks = document.querySelectorAll('.menu a');
const examples = document.querySelectorAll('.example-foto');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    menuLinks.forEach(link => link.classList.remove('active'));

    this.classList.add('active');

    const selectedCategory = this.textContent;

    examples.forEach(example => {
      if (selectedCategory === 'Усі') {
        example.style.display = 'block';
      } else {
        example.style.display = example.id === selectedCategory ? 'block' : 'none';
      }
    });
  });
});


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
