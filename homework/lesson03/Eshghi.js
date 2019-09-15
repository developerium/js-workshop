function Game() {
    let computer = Math.floor(Math.random() * 3);
    let player = Math.floor(Math.random() * 3);

    let ObjectStrings = [
        'Sang',
        'Kaghaz',
        'Gheychi',
    ];

    console.log('Player : ' + ObjectStrings[player] + ' | Computer : ' + ObjectStrings[computer]);

    if ((player == 1 && computer == 0) || (player == 2 && computer == 1) || (player == 0 && computer == 2)) {
        console.log('Game Result : YOU WIN');
    }
    else if(computer == player) {
        console.log('Game Result : EQUAL');
    }
    else {
        console.log('Game Result : YOU LOSE');
    }

}