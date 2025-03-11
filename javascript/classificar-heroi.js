  // Para capturar a resposta do usuário no temrinal 
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});  

// Função para avaliar o nível do herói
function avaliarHeroi() {
  rl.question("Digite o nome do seu herói: ", function(nomeHeroi) {
    rl.question("Digite a quantidade de XP do herói: ", function(XP) {
      XP = parseInt(XP); // Converter XP para número pois ele vem em formato de texto
      let nivelHeroi = "";

      if (XP <= 1000) {
        nivelHeroi = "Ferro"
      } else if (XP > 1000 && XP <= 2000) {
        nivelHeroi = "Bronze"
      } else if (XP > 2000 && XP <= 5000) {
        nivelHeroi = "Prata"
      } else if (XP > 5000 && XP <= 7000) {
        nivelHeroi = "Ouro"
      } else if (XP > 7000 && XP <= 8000) {
        nivelHeroi = "Platina"
      } else if (XP > 8000 && XP <= 9000) {
        nivelHeroi = "Ascendente"
      } else if (XP > 9000 && XP <= 10000) {
        nivelHeroi = "Imortal"
      } else {
        nivelHeroi = "Radiante"
      }

      console.log("Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)

      // Perguntar se deseja testar outro herói
      rl.question("Deseja testar outro herói? (S/N): ", function(resposta) {
        if (resposta.toUpperCase() === "S") {
          avaliarHeroi(); // Reinicia o processo
        } else if (resposta.toUpperCase() === "N") {
          console.log("Até logo!");
          rl.close(); // Encerra o programa
        } else {
          console.log("Resposta inválida. Encerrando o programa.")
          rl.close();
        }
      })
    })
  })
}

// Iniciar o programa
avaliarHeroi()
