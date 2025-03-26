import { fetchFotos } from './image-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refForm = document.querySelector('#search-form');
const refGallery = document.querySelector('.gallery');
const refLoadMore = document.querySelector('.load-more');

let searchQuery = null;
let page = 1;
let gallery = null;

refForm.addEventListener('submit', onSubmit);
refLoadMore.addEventListener('click', onClckloadMore);
refGallery.addEventListener('click', onClckLinkImg);

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  searchQuery = form.elements.searchQuery.value;
  page = 1;

  delMarkup();
  delLoadMore();

  if (searchQuery === '') {
    Notiflix.Notify.failure('Please fill in all the fields!');
    return;
  }

  fetchFotos(searchQuery, page)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      showLoadMore(hits, totalHits, page);
      makeMarkup(hits);

      page += 1;
    })
    .catch(error => {
      console.log(error);
    });
}

function onClckloadMore() {
  fetchFotos(searchQuery, page)
    .then(({ hits, totalHits }) => {
      showLoadMore(hits, totalHits, page);
      makeMarkup(hits);
      // gallery.refresh();
      makeLowScroll();
      page += 1;
    })
    .catch(error => {
      console.log(error);
    });
}

function makeMarkup(dataResp) {
  const markup = dataResp
    .map(
      dataEl => `<a href=${dataEl.largeImageURL} class="large-image"><div class="photo-card">
  <img src=${dataEl.webformatURL} alt=${dataEl.tags} loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${dataEl.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${dataEl.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${dataEl.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${dataEl.downloads}
    </p>
  </div>
</div></a>`
    )
    .join('');
  refGallery.insertAdjacentHTML('beforeend', markup);
}

function showLoadMore(hits, totalHits, page) {
  if (hits.length % 40 === 0 && hits.length * page < totalHits) {
    return refLoadMore.classList.add('load-more-visible');
  }
  refLoadMore.classList.remove('load-more-visible');

  Notiflix.Notify.failure(
    "We're sorry, but you've reached the end of search results."
  );
}

function delMarkup() {
  refGallery.innerHTML = '';
}

function delLoadMore() {
  if (refLoadMore.classList.contains('load-more-visible')) {
    refLoadMore.classList.remove('load-more-visible');
  }
}

function onClckLinkImg(evt) {
  evt.preventDefault();

  gallery = new SimpleLightbox('.gallery a');
}

function makeLowScroll() {
  const { height } = refGallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
