// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createGalleryMurcup(galleryItems);
function galerryMarcup({ preview, original, description }) {
  return `<li class "list_item"><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`;
}
function createGalleryMurcup(items) {
  return items.map(galerryMarcup).join('');
}
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
console.log(galleryItems);
