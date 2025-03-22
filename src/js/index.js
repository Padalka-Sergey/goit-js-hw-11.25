import { fetchFotos } from './image-api';

const refForm = document.querySelector('#search-form');

refForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const searchQuery = form.elements.searchQuery.value;
  if (searchQuery === '') {
    return console.log('Please fill in all the fields!');
  }
  console.log(searchQuery);
  fetchFotos(searchQuery).then(data => {
    if (data.hits.length === 0) {
      return console.log(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    console.log(data.hits);
  });

  form.reset();
}
