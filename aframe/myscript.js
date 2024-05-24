require("aframe")
document.querySelector('a-entity').addEventListener('collide', function (evt) {
    console.log('This A-Frame entity collided with another entity!');
  });