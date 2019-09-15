
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getWinner(player1, player2){

    let Winner ="";

     switch (player1) {
        case "rock":
            if (player2=="rock")
                Winner="Equal";
            else if (player2=="paper")
                Winner="player2";
            else
                Winner ="player1";
            break;
        case "paper":
            if (player2=="rock")
            {Winner="player1";}
            else if (player2=="paper")  Winner="Equal";
            else Winner ="player2";
            break;
        case "scissors":
            if (player2=="rock") Winner="player2";
            else if (player2=="paper")  Winner="player1";
            else Winner ="Equal";
            break;
    }
    return Winner ;
}




const player1 = getComputerChoice();
console.log(' Player1 Choice is  ==>  ' + player1 );
const player2 = getComputerChoice();
console.log(' Player2 Choice is  ==>  ' + player2 );

console.log(' Winner is  ==>  ' + getWinner(player1, player2) );
