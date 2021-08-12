const catPic = document.getElementById('cat-photo');
const dogPic = document.getElementById('dog-photo');
const horsePic = document.getElementById('horse-photo');

const catNoise = document.getElementById('cat-sound');
const dogNoise = document.getElementById('dog-sound');
const horseNoise = document.getElementById('horse-sound');


catPic.addEventListener('click', () => {
  catNoise.play();
});

dogPic.addEventListener('click', () => {
  dogNoise.play();
});

horsePic.addEventListener('click', () => {
  horseNoise.play();
});
