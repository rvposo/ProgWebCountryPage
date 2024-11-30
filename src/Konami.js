var receiver = [];
var index = 0;
const engage = (key) => {
  //SETAS DO TECLADO: CIMA, CIMA, BAIXO, BAIXO, ESQUERDA, DIREITA, ESQUERDA, DIREITA.
  const sender = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
  ];

  if (key === sender[index]) {
    receiver.push(key);
    index++;
  } else {
    receiver.length = 0;
    index = 0;
    return;
  }

  if (receiver.toString() === sender.toString()) {
    let answer = prompt("Em que fogo o Nunes Filho queimou a rosca?");
    if (answer && answer.toLowerCase() === "fogo do amor") {
      window.location = "fiction.html";
    } else {
      alert("You are not worthy");
    }
  }
};

document.addEventListener("keydown", (event) => {
  engage(event.code);
});
