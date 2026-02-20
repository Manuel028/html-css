const imagens = [
  "biolife_pictures1/biolife4bufalo.jpg",
  "biolife_pictures1/biolife1.jpg",
  "biolife_pictures1/biolife3\ mangais.jpg",
  "biolife_pictures1/biolife6ave.jpeg"
];

function clickMenu(){
            if (itens.style.display == 'block'){
                itens.style.display = 'none'
            
            } else {
                itens.style.display = 'block'
            }

        }
    
    function mudouTamanho() {
            if (window.innerWidth >= 600) {
                itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }    

let index = 0;
const hero = document.querySelector(".hero");

function trocarImagem() {
  index = (index + 1) % imagens.length;
  hero.style.backgroundImage = `url(${imagens[index]})`;
}

setInterval(trocarImagem, 5000);
