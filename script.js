function calcular(){
    const numeroAleatorio = Math.floor(Math.random() * 11)
    return numeroAleatorio
}

function jogar(){
    const pegaNumeroAleatorio = calcular()
    console.log(pegaNumeroAleatorio)
}

do{
    const palpite = prompt('Adivinhe o Número')

}
while(palpite != pegaNumeroAleatorio){

}



jogar()

