function rank(nomeJogador, numVitorias, numDerrotas){
    let saldoVitoria = numVitorias - numDerrotas

    let tipoSaldo 
        if(saldoVitoria>0){
            tipoSaldo = "positivo"
        } else if(saldoVitoria == 0){
            tipoSaldo = ""
        } else{
            tipoSaldo = "negativo"
        }

    let nivel
    if(saldoVitoria<=10){
        nivel = "Ferro"
    } else if(saldoVitoria>10 && saldoVitoria<=20) {
        nivel = "Bronze"
    } else if(saldoVitoria>20 && saldoVitoria<=50){
        nivel = "Prata"
    } else if(saldoVitoria>50 && saldoVitoria<=80){
        nivel = "Ouro"
    } else if (saldoVitoria>80 && saldoVitoria<=90){
        nivel = "Diamante"
    } else if(saldoVitoria>90 && saldoVitoria<=100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }

    let result = [nomeJogador,tipoSaldo, Math.abs(saldoVitoria), nivel]

    return result

}     

let dadosRank = rank("Augusto", 5, 15)

console.log(`O jogador ${dadosRank[0]} tem um saldo ${dadosRank[1]} de ${dadosRank[2]} vitórias e está no nível de ${dadosRank[3]}`)