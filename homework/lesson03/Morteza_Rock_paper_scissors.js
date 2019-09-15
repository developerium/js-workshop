// Rock–paper–scissors
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function Game(Player1,Player2){
  let Items = [
    { index: 0, name: 'Rock', icon: '✊', distractor: 1 },
    { index: 1, name: 'Paper', icon: '🖐', distractor: 2 },
    { index: 2, name: 'Scissors', icon: '✌️', distractor: 0 }
  ];
  
  console.log(Items[Player1].icon+' vs '+Items[Player2].icon);
  
  if (Player1 != Player2){
    let WinPlayer=0;
    if (Items[Player1].index==Items[Player2].distractor){
      WinPlayer=Player1;
    }
    else {
      WinPlayer=Player2;    
    }
    console.log("Player "+WinPlayer+" is Win '"+Items[WinPlayer].name +"'"+Items[WinPlayer].icon);
  } else{
    console.log("equal");
  }
}

let Pl1=getRandomInt(2);
let Pl2=getRandomInt(2);

Game(Pl1,Pl2);
