let palavra;

function palavraAleatoria() {
  let palavras = [
    "Superação",
    "Vencer",
    "Sucesso",
    "Êxito",
    "Triunfo",
    "Vitória",
    "Prosperidade",
  ];
  return random(palavras);
}

function setup() {
  createCanvas(windowWidth - 2, windowHeight - 2);
  palavra = palavraAleatoria();
  inicializaPlanoDeFundo();
  desenhaTexto();
  noLoop();

  canvas.addEventListener("click", trocarPalavra);
}

function mouseMoved() {
  inicializaPlanoDeFundo();
  desenhaTexto();
}

function trocarPalavra() {
  palavra = palavraAleatoria();
  inicializaPlanoDeFundo();
  desenhaTexto();
}

function inicializaPlanoDeFundo() {
  let gradient = drawingContext.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "yellow");
  gradient.addColorStop(1, "green");
  drawingContext.fillStyle = gradient;
  drawingContext.fillRect(0, 0, width, height);
}

function palavraParcial() {
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  return palavra.substring(0, quantidade);
}

function desenhaTexto() {
  let gradientText = lerpColor(color("blue"), color("red"), mouseX / width);
  fill(gradientText);
  textFont("Comic Sans MS");
  textStyle("bold");
  textSize(64);
  textAlign(CENTER, CENTER);
  let textX = width / 2;
  let textY = height / 2;
  let parcial = palavraParcial(textX, textY);
  text(parcial, textX, textY);
}

function bonsLugaresParaPassear() {
  let melhoresDias = {
    segunda: ["Parque Central", "Museu de Arte"],
    terca: ["Jardim Botânico", "Praça do Bairro"],
    quarta: ["Mirante da Cidade", "Centro Cultural"],
    quinta: ["Praia Local", "Trilha na Montanha"],
    sexta: ["Café Aconchegante", "Teatro Municipal"],
    sabado: ["Feira de Artesanato", "Passeio de Barco"],
    domingo: ["Parque Local", "Cinema ao Ar Livre"],
  };

  let diaDaSemana = prompt("Digite o dia da semana:");
  diaDaSemana = diaDaSemana.toLowerCase();

  let lugaresRecomendados = melhoresDias[diaDaSemana];

  if (lugaresRecomendados) {
    console.log(`Os melhores lugares para passear no(a) ${bairroCidade} na/no ${diaDaSemana} são:`);
    for (let lugar of lugaresRecomendados) {
      console.log("- " + lugar);
    }
  } else {
    console.log("Dia da semana inválido. Por favor, escolha um dia da semana válido.");
  }
}