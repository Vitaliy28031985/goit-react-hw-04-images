

 export default  function  fetchImages(imgValue, page) {
const url = 'https://pixabay.com/api/';
const key = '27545952-886edf6444d41f28a84ae17ec';
const perPage = '12'; 
const fetchEl = `?key=${key}&q=${imgValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;


return  fetch(`${url}${fetchEl}`).then(response => {
   if(response.ok) {
      return response.json();
   }

   return Promise.reject(new Error('Nothing was found for your request'));})

}
