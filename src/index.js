const accesKey = ('w8VUjLkw3Ulex5O5Pjt3072JAE5eVY0i_pA0sZBernU');
const endPoint = 'https://api.unsplash.com/photos/random';

export default async function getImages() {
  const response = await fetch(`${endPoint}?client_id=${accesKey}&count=30`);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  // const imagesList = await jsonResponse.results;
  function createImages(images) {
    for (let i = 0; i < images.length; i += 1) {
      const image = document.createElement('img');
      image.src = images[i].urls.thumb;
      document.body.appendChild(image);
    }
  }
  createImages(jsonResponse);
}
getImages('');
