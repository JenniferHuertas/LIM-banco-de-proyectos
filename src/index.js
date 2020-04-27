const accesKey = ('w8VUjLkw3Ulex5O5Pjt3072JAE5eVY0i_pA0sZBernU');
const endPoint = 'https://api.unsplash.com/search/photos';

export default async function getImages(query) {
  const response = await fetch(`${endPoint}?query=${query
  }&client_id=${accesKey}`);
  const jsonResponse = await response.json();
  const imagesList = await jsonResponse.results;
  function createImages(images) {
    for (let i = 0; i < images.length; i += 1) {
      const image = document.createElement('img');
      image.src = imagesList[i].urls.thumb;
      document.body.appendChild(image);
    }
  }
  createImages(imagesList);
}
getImages('dog');
