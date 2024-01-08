document.addEventListener('DOMContentLoaded', function () {
    const boutons = document.querySelectorAll('.bouton');
    const sections = document.querySelectorAll('section');

    boutons.forEach((bouton) => {
      bouton.addEventListener('click', () => {
        const target = bouton.getAttribute('data-target');
        sections.forEach((section) => {
          section.style.display = section.classList.contains(target) ? 'block' : 'none';
        });
      });
    });
});