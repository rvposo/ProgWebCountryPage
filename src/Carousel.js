const images = document.querySelectorAll(".carousel-images img");
const texts = [
  {
    title: "Lago Ness",
    description:
      "O Lago Ness é um dos mais famosos lagos de água doce, localizado nas Terras Altas da Escócia. Ele se destaca não apenas por sua grande extensão, mas também por sua profundidade impressionante. Embora não seja o maior lago em superfície na Escócia, ele é o maior em volume de água, alcançando profundidades de até 230 metros. Suas águas são notavelmente escuras e turvas devido à grande quantidade de turfa nas áreas circundantes, o que torna a visibilidade subaquática bastante limitada. O lago se tornou conhecido mundialmente por conta da lenda do monstro do Lago Ness, carinhosamente chamado de Nessie. A história de uma criatura misteriosa que habita suas águas remonta a séculos, mas foi em 1933 que a lenda ganhou notoriedade, após um casal ter relatado ter visto algo incomum na superfície do lago. Desde então, muitas pessoas afirmam ter avistado Nessie, e algumas fotos, embora polêmicas, alimentaram ainda mais o mito. Nessie é frequentemente descrito como uma criatura grande, semelhante a um plesiossauro, um réptil marinho extinto. O folclore em torno do lago tornou-o um grande ponto de atração turística. Todos os anos, milhares de pessoas visitam o Lago Ness, tanto para explorar suas águas misteriosas quanto para apreciar as belezas naturais da região. Além disso, o lago é parte de uma importante rota histórica, o Canal da Caledônia, que conecta a costa leste à costa oeste da Escócia, passando por vários lagos. Ao longo das décadas, diversas expedições científicas utilizaram tecnologia avançada, como sonares e submarinos, para tentar encontrar evidências de Nessie. No entanto, nenhuma prova conclusiva foi descoberta, o que mantém o mistério vivo e a curiosidade sobre o lago sempre renovada. Seja pela mítica criatura ou pelas paisagens deslumbrantes, o Lago Ness continua a fascinar pessoas de todo o mundo.",
  },
  {
    title: "Castelo de Dunnottar",
    description:
      "O Castelo de Dunnottar é uma fortaleza histórica situada dramaticamente no topo de penhascos rochosos, com vista para o Mar do Norte, na costa leste da Escócia, perto da cidade de Stonehaven. Esta localização estratégica e isolada faz do castelo uma das ruínas mais impressionantes do país, oferecendo vistas espetaculares e um ambiente carregado de história. A história do Castelo de Dunnottar remonta à Idade Média, com registros de construções no local desde o século V, embora as ruínas atuais datem principalmente dos séculos XIV a XVII. Ao longo dos séculos, ele desempenhou um papel vital em diversos eventos históricos escoceses, servindo como fortaleza e refúgio para reis, guerreiros e clérigos. Uma das ocasiões mais notáveis em sua história ocorreu no século XVII, quando o castelo abrigou as Joias da Coroa da Escócia, durante a invasão das forças de Oliver Cromwell. Graças à sua localização remota e quase inexpugnável, as joias foram protegidas de serem capturadas pelos ingleses. As estruturas remanescentes incluem uma série de edifícios históricos, como o salão principal, a capela e as muralhas de defesa, todos integrados aos penhascos íngremes que cercam o castelo. Sua localização natural, com penhascos a quase 50 metros acima do nível do mar, tornou Dunnottar uma fortificação quase impenetrável, o que contribuiu para sua relevância militar por muitos anos. O castelo também está fortemente associado às lutas pela independência da Escócia. William Wallace, o famoso herói escocês, teria sitiado o castelo durante sua campanha contra a ocupação inglesa. Mais tarde, durante as Guerras Civis Britânicas, Dunnottar foi um dos últimos redutos a resistir às forças de Cromwell, defendendo com sucesso as Joias da Coroa. Atualmente, as ruínas do Castelo de Dunnottar são uma atração turística popular, conhecida não só pela sua importância histórica, mas também pela sua localização pitoresca e atmosfera dramática. Visitantes de todo o mundo são atraídos pela paisagem deslumbrante e pela oportunidade de explorar um local que foi palco de momentos cruciais da história escocesa",
  },
  {
    title: "Castelo de Eilean Donan",
    description:
      "O Castelo de Eilean Donan é um dos castelos mais icônicos e fotografados da Escócia, localizado em uma pequena ilha onde três lagos se encontram: o Loch Duich, o Loch Long e o Loch Alsh, nas Terras Altas ocidentais do país. Conectado ao continente por uma elegante ponte de pedra, o castelo é famoso tanto por sua beleza quanto por sua história rica, sendo cercado por uma paisagem deslumbrante de montanhas e águas serenas. A história do Castelo de Eilean Donan remonta ao século XIII, quando foi construído para defender a área contra invasores vikings. Ao longo dos séculos, ele desempenhou um papel importante nas turbulentas lutas políticas da Escócia, especialmente nas Guerras de Independência e nos conflitos entre clãs. O castelo tornou-se um dos principais bastiões do clã Mackenzie, que o manteve sob controle por gerações, sendo também uma fortaleza aliada ao clã MacRae. Durante o século XVIII, o castelo esteve no centro das rebeliões jacobitas, quando os escoceses lutaram para restaurar a dinastia Stuart ao trono britânico. Em 1719, Eilean Donan foi utilizado como base por forças espanholas que apoiavam os jacobitas, mas foi destruído pelas forças do governo britânico em um ataque com canhões. As ruínas permaneceram inativas por quase 200 anos, até que, no início do século XX, o castelo foi reconstruído de forma meticulosa por John MacRae-Gilstrap, descendente do clã MacRae, que dedicou anos à restauração do castelo à sua antiga glória. Hoje, o Castelo de Eilean Donan é um símbolo do orgulho e da herança escocesa. Ele foi restaurado com atenção aos detalhes históricos e agora serve como uma atração turística muito popular, recebendo visitantes de todo o mundo. No interior, o castelo exibe uma combinação de artefatos históricos e móveis que recontam sua longa e movimentada história. Além disso, sua localização cinematográfica o tornou um cenário ideal para filmes, sendo destaque em várias produções, como 'Highlander' e 'O Mundo Não é o Bastante' da franquia James Bond. Rodeado por uma paisagem natural de tirar o fôlego, com montanhas que se erguem ao redor e as águas tranquilas dos lagos refletindo o céu escocês, o Castelo de Eilean Donan continua a ser um dos locais mais emblemáticos e visitados da Escócia, encapsulando tanto a beleza quanto o espírito de sua terra.",
  },
];
let currentIndex = 0;

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carouselImages = document.querySelector(".carousel-images");
const carouselText = document.querySelector(".carousel-text");

function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
  carouselText.innerHTML = `
    <h2>${texts[currentIndex].title}</h2>
    <p>${texts[currentIndex].description}</p>
  `;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();
