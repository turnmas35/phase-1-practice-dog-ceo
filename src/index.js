console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchDogs() {
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => addImages(json.message));
  }

fetchDogs()

function addImages(images) {
    const dogImageContainer = document.getElementById('dog-image-container');
    images.forEach(image => {
      const dogImage = document.createElement("img");
      dogImage.src = image
      dogImageContainer.appendChild(dogImage);
    });
  }

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const allBreeds = []

function fetchBreeds() {
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => {
      Object.keys(json.message).forEach(breed => {
        addBreed(breed)
        allBreeds.push(breed)
      })
    });
  }

fetchBreeds()

const breedDropdown = document.getElementById('breed-dropdown');
const dogBreedContainer = document.getElementById('dog-breeds');

breedDropdown.addEventListener('change', function (e) {
  const selectedLetter = e.target.value;
  dogBreedContainer.innerHTML = ''
  const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter))
  filteredBreeds.map(breed => addBreed(breed))
});

function addBreed(breed) {
  console.log(breed)
      const dogBreed = document.createElement("li");
      dogBreed.innerText = breed
      dogBreed.addEventListener('click', function (){
        dogBreed.style.color = 'red';
    });
  dogBreedContainer.appendChild(dogBreed);
}