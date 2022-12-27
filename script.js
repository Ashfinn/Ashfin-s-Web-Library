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

var gallery = document.querySelector('.image-gallery');
var pauseButton = document.querySelector('.image-gallery button:nth-child(1)');
var playButton = document.querySelector('.image-gallery button:nth-child(2)');

pauseButton.addEventListener('click', function() {
  gallery.classList.add('paused');
});

playButton.addEventListener('click', function() {
  gallery.classList.remove('paused');
});
