// Perguntas iniciais
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// Mensagem inicial
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Exercício opcional
const gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// Condicionais para a resposta
if (gostaDeEstudar == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDeEstudar == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Resposta inválida. Por favor, insira 1 para SIM ou 2 para NÃO.");
}
