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
    let answer = prompt(" ");
    document.getElementById("status").innerText = answer
      ? `Your answer: ${answer}`
      : "No answer provided.";
    receiver.length = 0;
    index = 0;
    window.location = "pages/fiction.html";
  }
};

document.addEventListener("keydown", (event) => {
  engage(event.code);
});
