function convertWons(){

    wonsValue = prompt("Digite um valor em Wons")
    oneWon = 0.0040
    alert("O valor em R$ " + wonsValue * oneWon)
}

function janken(player){

        const choices = { 1: "Pedra", 2: "Papel", 3: "Tesoura"};
        pc = Math.floor(Math.random() * 3) + 1; //Numero aleatorio entre 1 e 3. 

        if(player == pc){
            alert("empate")

        }else if(
            (player == 1 && pc == 3) ||
            (player == 2 && pc == 1) ||
            (player == 3 && pc == 2)
            ){
                alert("voce Venceu!")
            } else {
                alert("voce Perdeu")
            }
}   

document.getElementById("pedra").addEventListener("click", () => janken(1));
document.getElementById("papel").addEventListener("click", () => janken(2));
document.getElementById("tesoura").addEventListener("click", () => janken(3));