const imagens = [
  "biolife_pictures1/biolife4bufalo.jpg",
  "biolife_pictures1/biolife1.jpg",
  "biolife_pictures1/biolife3\ mangais.jpg",
  "biolife_pictures1/biolife6ave.jpeg"
];

let index = 0;
const hero = document.querySelector(".hero");

function trocarImagem() {
  index = (index + 1) % imagens.length;
  hero.style.backgroundImage = `url(${imagens[index]})`;
}

setInterval(trocarImagem, 5000);
