//movimentação ator
let yAtor = 366
let xAtor = 85
let colisao = false
let comprimentoCarro = 50
let alturaCarro = 40
let meusPontos = 0
function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      voltaAtorPInicial();
      somDeColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPInicial(){
  yAtor = 366
}

function contaPontos(){
  fill(255,255,0)
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width/5, 27)
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorPInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}