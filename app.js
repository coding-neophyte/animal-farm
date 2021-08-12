const catPic = document.getElementById('cat-photo');
const dogPic = document.getElementById('dog-photo');
const horsePic = document.getElementById('horse-photo');

const catNoise = document.getElementById('cat-sound');
const dogNoise = document.getElementById('dog-sound');
const horseNoise = document.getElementById('horse-sound');

function playAnimalNoise(Noise) {
  Noise.play();
}


catPic.addEventListener('click', () => {
  playAnimalNoise(catNoise);
});

dogPic.addEventListener('click', () => {
  playAnimalNoise(dogNoise);
});

horsePic.addEventListener('click', () => {
  playAnimalNoise(horseNoise);
});
