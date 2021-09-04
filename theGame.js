
function StartTheGame() {
  //
}


function RandomWin() {
    var whoWins = Math.floor(Math.random() * 5);
    return whoWins;
}

function TheGame() {
    for (let i = 0; i < theTeamsArray.length; i++) {
        for (let j = 0; j < 1; j++) {
            var Gf1 = RandomWin();
            var Gf2 = RandomWin();
           // console.log(theTeamsArray[round[j+i]].name + ' ' + Gf1)
           // console.log(theTeamsArray[round[i+j+1]].name + ' ' + Gf2)
           
            console.log("this is the round.."+round[j+i])
            console.log("this is the round.."+round[j+i+1])
            theTeamsArray[round[j+i]].statistics.played++;
            console.log(theTeamsArray[round[j+i]].statistics.played);
           
           //console.log(theTeamsArray[round[j+i]].statistics) ;
          // console.log(theTeamsArray[round[j+i+1]].statistics)
          
           
            if (Gf1 == Gf2) {
                console.log('draw');
                theTeamsArray[round[j+i]].statistics.draw++;
                theTeamsArray[round[j+i]].statistics.points+=1;
                theTeamsArray[round[j+i]].statistics.draw++;
                theTeamsArray[round[j+i]].statistics.points+=1;
            } else if (Gf1 > Gf2) {
                console.log(theTeamsArray[round[i+j]].name + ' wins');
                theTeamsArray[round[j+i]].statistics.wins++;
                theTeamsArray[round[j+i]].statistics.points+=3;
                theTeamsArray[round[j+i]].statistics.lose++;
            } else if (Gf1 < Gf2) {
                console.log(theTeamsArray[round[i+j+1]].name + ' wins');
                theTeamsArray[round[j+i]].statistics.lose++;
                theTeamsArray[round[j+i]].statistics.wins++;
                theTeamsArray[round[j+i]].statistics.points+=3;
            }
          /* 
            team1.statistics.Gf +=Gf1;
            team1.statistics.Ga +=Gf2;
            team1.statistics.Gd = team1.statistics.Gf-team1.statistics.Ga
            team1.statistics.played++;
            team2.statistics.Gf +=Gf2;
            team2.statistics.Ga +=Gf1;
            team2.statistics.Gd = team2.statistics.Gf-team2.statistics.Ga
            team2.statistics.played++;
           */
            console.log(theTeamsArray[round[j+i]].statistics)
           i+=1;
        }
       
      
        
    }
   // console.log(theTeamsArray[0].statistics)
}