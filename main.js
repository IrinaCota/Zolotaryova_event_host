//import './js/about-me';
//import './js/aos';
//import './js/faq';
//import './js/footer';
import './src/js/header';
import './src/js/modal';
//import './js/projects';
import './src/js/reviews';
import './src/js/scroll-to-top';
//import './js/theme-picker';

document.addEventListener('DOMContentLoaded', () => {
  const partials = {
    header: './src/partials/header.html',
    hero: './src/partials/hero.html',
    advert: './src/partials/advert.html',
    benefits: './src/partials/benefits.html',
    gallery: './src/partials/gallery.html',
    about: './src/partials/about.html',
    reviews: './src/partials/reviews.html',
    footer: './src/partials/footer.html',
    'scroll-to-top': './src/partials/scroll-to-top.html',
  };

  Object.entries(partials).forEach(([id, url]) => {
    const container = document.getElementById(id);
    if (container) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load: ${url}`);
          }
          return response.text();
        })
        .then(html => {
          container.innerHTML = html;
        })
        .catch(err => {
          console.error(err);
        });
    }
  });
});
