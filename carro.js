//movimentação
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 260, 318]
let velCarros = [2, 4, 6, 7, 3, 2.75]

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (verificaPassouTela(xCarros[i])){
    xCarros[i] = 600;
   }
  }
}

function verificaPassouTela(xCarros){
  return xCarros < - 50;
}
