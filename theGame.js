
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
          
           
            console.log("this is the round.."+round[j+i])
            console.log("this is the round.."+round[j+i+1])
            theTeamsArray[round[j+i]].statistics.played++;
            theTeamsArray[round[j+i]].statistics.Gf += Gf1;
            theTeamsArray[round[j+i]].statistics.Ga += Gf2;
            theTeamsArray[round[j+i]].statistics.Gd =  theTeamsArray[round[j+i]].statistics.Gf-theTeamsArray[round[j+i]].statistics.Ga;
            
            theTeamsArray[round[j+i+1]].statistics.played++;
            theTeamsArray[round[j+i+1]].statistics.Gf += Gf2;
            theTeamsArray[round[j+i+1]].statistics.Ga += Gf1;
            theTeamsArray[round[j+i+1]].statistics.Gd =  theTeamsArray[round[j+i+1]].statistics.Gf-theTeamsArray[round[j+i+1]].statistics.Ga;
           
           
          
           
            if (Gf1 == Gf2) {
                console.log('draw');
                theTeamsArray[round[j+i]].statistics.draw++;
                theTeamsArray[round[j+i]].statistics.points+=1;
                theTeamsArray[round[j+i+1]].statistics.draw++;
                theTeamsArray[round[j+i+1]].statistics.points+=1;
            } else if (Gf1 > Gf2) {
                console.log(theTeamsArray[round[i+j]].name + ' wins');
                theTeamsArray[round[j+i]].statistics.wins++;
                theTeamsArray[round[j+i]].statistics.points+=3;
                theTeamsArray[round[j+i+1]].statistics.lose++;
            } else if (Gf1 < Gf2) {
                console.log(theTeamsArray[round[i+j+1]].name + ' wins');
                theTeamsArray[round[j+i]].statistics.lose++;
                theTeamsArray[round[j+i+1]].statistics.wins++;
                theTeamsArray[round[j+i+1]].statistics.points+=3;
            }
        
          
           i+=1;
        }
       
      
        
    }
   // console.log(theTeamsArray[0].statistics)
   DestroyTable();
   DisplayTable();
   console.log(theTeamsArray[0].statistics);

}