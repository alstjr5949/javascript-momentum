const imges =["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg",];

const chosenImage = imges[Math.floor(Math.random() * imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage);