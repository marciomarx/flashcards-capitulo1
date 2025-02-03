const flashcards = [
  { question: "O que é homeostase?", answer: "É a capacidade do organismo de manter um ambiente interno estável, apesar das mudanças externas." },
  { question: "Qual é o principal sistema responsável pela homeostase?", answer: "O sistema nervoso e o sistema endócrino." },
  { question: "O que é um mecanismo de feedback negativo?", answer: "Um mecanismo que reverte uma mudança no corpo para manter a homeostase." },
  { question: "Dê um exemplo de feedback negativo.", answer: "Regulação da temperatura corporal: se o corpo esquenta, o suor é produzido para resfriá-lo." },
  { question: "O que é um mecanismo de feedback positivo?", answer: "Um mecanismo que amplifica uma mudança no corpo, levando a uma resposta mais intensa." },
  { question: "Dê um exemplo de feedback positivo.", answer: "Liberação de oxitocina durante o parto, que intensifica as contrações uterinas." },
  { question: "O que são receptores no sistema de controle do corpo?", answer: "Estruturas que detectam mudanças no ambiente interno ou externo." },
  { question: "O que é um centro de controle no sistema de feedback?", answer: "A parte do sistema que processa informações dos receptores e envia sinais para os efetores." },
  { question: "O que são efetores no sistema de controle do corpo?", answer: "Estruturas (como músculos ou glândulas) que respondem aos sinais do centro de controle." },
  { question: "Qual é a diferença entre feedback negativo e positivo?", answer: "O feedback negativo reverte mudanças, enquanto o feedback positivo as amplifica." },
  { question: "O que é um set point no sistema de controle do corpo?", answer: "O valor ideal ou normal que o corpo tenta manter (ex.: temperatura corporal de 37°C)." },
  { question: "Como o corpo regula a glicose no sangue?", answer: "Através da insulina (reduz a glicose) e do glucagon (aumenta a glicose)." },
  { question: "O que é um sensor no sistema de controle do corpo?", answer: "Outro termo para receptor, que detecta mudanças." },
  { question: "O que é um estímulo no sistema de controle do corpo?", answer: "Qualquer mudança que ativa os receptores." },
  { question: "O que é um sistema de controle em malha aberta?", answer: "Um sistema que não usa feedback para ajustar sua resposta." },
  { question: "O que é um sistema de controle em malha fechada?", answer: "Um sistema que usa feedback para ajustar sua resposta." },
  { question: "Qual é a função do hipotálamo na homeostase?", answer: "Ele atua como um centro de controle para temperatura, fome, sede e outras funções." },
  { question: "O que é a lei do equilíbrio de massas?", answer: "A ideia de que a quantidade de uma substância no corpo é mantida constante." },
  { question: "O que é um exemplo de homeostase química?", answer: "Manutenção do pH sanguíneo em torno de 7,4." },
  { question: "O que é um exemplo de homeostase física?", answer: "Manutenção da pressão arterial." },
  { question: "O que é um exemplo de homeostase térmica?", answer: "Manutenção da temperatura corporal em torno de 37°C." },
  { question: "O que é um exemplo de homeostase osmótica?", answer: "Manutenção da concentração de solutos no sangue." },
  { question: "O que é um exemplo de homeostase hormonal?", answer: "Regulação dos níveis de cálcio no sangue pelo paratormônio." },
  { question: "O que é um exemplo de homeostase neural?", answer: "Regulação da frequência cardíaca pelo sistema nervoso autônomo." },
  { question: "O que é um exemplo de homeostase comportamental?", answer: "Beber água quando se está com sede." },
  { question: "O que é um exemplo de homeostase celular?", answer: "Manutenção do equilíbrio de íons dentro e fora da célula." },
  { question: "O que é um exemplo de homeostase sistêmica?", answer: "Regulação da pressão arterial pelo sistema cardiovascular." },
  { question: "O que é um exemplo de homeostase orgânica?", answer: "Regulação da função renal para manter o equilíbrio hídrico." },
  { question: "O que é um exemplo de homeostase tecidual?", answer: "Cicatrização de feridas na pele." },
  { question: "O que é um exemplo de homeostase molecular?", answer: "Manutenção da estrutura das proteínas em condições ideais." }
];

let currentCardIndex = 0;

// Seleção de elementos
const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const flashcardScreen = document.getElementById("flashcardScreen");

const flashcardElement = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const prevButton = document.getElementById("prevButton");
const resetButton = document.getElementById("resetButton");
const nextButton = document.getElementById("nextButton");

// Função para exibir o flashcard atual
function showCard(index) {
  questionElement.textContent = flashcards[index].question;
  answerElement.textContent = flashcards[index].answer;
  flashcardElement.classList.remove("flipped");
}

// Função para iniciar os flashcards
function startFlashcards() {
  welcomeScreen.style.display = "none";
  flashcardScreen.style.display = "flex";
  showCard(currentCardIndex);
}

// Função para exibir o próximo flashcard
function nextCard() {
  if (currentCardIndex < flashcards.length - 1) {
    currentCardIndex++;
    showCard(currentCardIndex);
  }
}

// Função para exibir o flashcard anterior
function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    showCard(currentCardIndex);
  }
}

// Função para reiniciar os flashcards
function resetCards() {
  currentCardIndex = 0;
  showCard(currentCardIndex);
}

// Função para virar o flashcard
function flipCard() {
  flashcardElement.classList.toggle("flipped");
}

// Atribuição dos eventos aos botões e ao flashcard
startButton.addEventListener("click", startFlashcards);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", prevCard);
resetButton.addEventListener("click", resetCards);
flashcardElement.addEventListener("click", flipCard);
