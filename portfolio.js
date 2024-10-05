const menuLinks = document.querySelectorAll('.menu a');
const examples = document.querySelectorAll('.example-foto');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
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
