const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    menuLinks.forEach(link => link.classList.remove('active'));

    this.classList.add('active');
  });
});
