import axios from 'axios';

const API_KEY = '31316386-df3d7a07dab36b9800dfb8d2b';
const PARAMS =
  '&image_type=photo&orientation=horisontal&savesearch=true&per_page=40';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function fetchFotos(query, page) {
  return axios
    .get(`?key=${API_KEY}&q=${query}${PARAMS}&page=${page}`)
    .then(({ data }) => data);
  // .catch(error => {
  //   console.log(error);
  //   console.log('ОШИБКА');
  // });
}

export { fetchFotos };
