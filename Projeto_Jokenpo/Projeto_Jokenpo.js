const prompt = require('prompt-sync')();

const jogo = 'Vamos jogar Jokenpô?';
console.log(jogo);

let rodadas = +prompt("Gostaria de jogar quantas rodadas?");
console.log(`Você escolher ${rodadas} rodadas.`);
for (let i = 0; i < rodadas; i++){
    
    let c_robo = (c_jogador = empate = 0)

    let jogador = +prompt("Digite uma opção: 0 ou 1 ou 2 (0 = pedra, 1 = papel ou 2 = tesoura)")

    let robo = Math.floor(Math.random() * 3)
    console.log(robo)

    if ((jogador == 0 && robo == 2) || (jogador == 1 && robo == 0) || (jogador == 2 && robo == 1)) {
        c_jogador += 1
        console.log("Jogador venceu.")
    } else if ((jogador == 2 && robo == 0) || (jogador == 0 && robo == 1) || (jogador == 1 && robo == 2)) {
        c_robo += 1
        console.log("Jogador perdeu")
    } else {
        console.log("Empate")
    }
}
console.log(
    `Jogador ganhou ${c_jogador} rodadas.
     Robo ganhou ${c_robo} rodadas.`
     )
if (c_jogador > c_robo) {
console.log("Consquistou a vitória.");
} else if (c_jogador > c_robo)  {
console.log("Você não ganhou desta vez.");
} else console.log("Competição empatada. Tente novamente");

let continuar = prompt("Deseja jogar novamente? [Sim ou Não]").slice(0,1).toUpperCase();
if (continuar == 'S') {
    console.log("Jogar novamente.")
}else{
    console.log("Fim de jogo.")
}
