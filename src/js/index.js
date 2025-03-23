import { fetchFotos } from './image-api';

const refForm = document.querySelector('#search-form');
const refGallery = document.querySelector('.gallery');
const refLoadMore = document.querySelector('.load-more');
let searchQuery = null;
let page = 1;

refForm.addEventListener('submit', onSubmit);
refLoadMore.addEventListener('click', onClckloadMore);

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  searchQuery = form.elements.searchQuery.value;
  if (searchQuery === '') {
    return console.log('Please fill in all the fields!');
  }

  fetchFotos(searchQuery, page)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        return console.log(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      showLoadMore(hits, totalHits, page);
      makeMarkup(hits);
      page += 1;
    })
    .catch(error => {
      console.log(error);
    });
}

function makeMarkup(dataResp) {
  const markup = dataResp
    .map(
      dataEl => `<div class="photo-card">
  <img src=${dataEl.webformatURL} alt=${dataEl.tags} loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${dataEl.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${dataEl.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${dataEl.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${dataEl.downloads}</b>
    </p>
  </div>
</div>`
    )
    .join('');
  refGallery.insertAdjacentHTML('beforeend', markup);
}

function onClckloadMore() {
  fetchFotos(searchQuery, page)
    .then(({ hits, totalHits }) => {
      showLoadMore(hits, totalHits, page);
      makeMarkup(hits);
      page += 1;
    })
    .catch(error => {
      console.log(error);
    });
}

function showLoadMore(hits, totalHits, page) {
  console.log(page);
  console.log(hits.length * page);
  console.log(totalHits);
  if (hits.length % 40 === 0 && hits.length * page < totalHits) {
    console.log('Первый иф');
    // console.log(' Второй иф');
    return refLoadMore.classList.add('load-more-visible');
  }
  if (hits.length * page >= totalHits - 40) {
    // console.log('Первый иф');
    console.log('Второй иф');
    return refLoadMore.classList.remove('load-more-visible');
  }
  //   refLoadMore.classList.remove('load-more-visible');
  //   console.log('Третий');
}
