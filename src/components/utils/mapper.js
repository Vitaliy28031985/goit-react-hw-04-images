export const  mapperImmage = (images) => {
return images.map(({id, webformatURL, largeImageURL, tags}) =>
({
   id,
   webformatURL,
   largeImageURL,
   tags,
}));
};