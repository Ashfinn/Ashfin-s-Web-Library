// Add some scroll animation to the website links
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    window.scroll({
      top: offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  });
});
