import menu from '../menu.json';
import itemsGallery from '../templates/gallery.hbs';

const markup = itemsGallery(menu);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
