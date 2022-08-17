// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

const galleryEl = galleryItems
  .map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');

gallery.innerHTML = galleryEl;

const lightbox = new SimpleLightbox('.gallery a');
console.log(lightbox);

lightbox.on(
  'shown.simplelightbox',
  () => (lightbox.defaultOptions.captionDelay = 250)
);

const galleryItem = document.querySelectorAll('.gallery img');
galleryItem.forEach(item => item.setAttribute('title', item.alt));
console.log(galleryItem);
