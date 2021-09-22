function AVgTeamStats(){
    var tempDef =0;
    var tempAttack=0;
   var  numDef=0;
    var numAttack=0;
    for (let i = 0; i < theTeamsArray.length; i++) {
        for (let j = 0; j < theTeamsArray[i].players.length; j++) {
            if(theTeamsArray[i].players[j].position == 'goal-keeper' ||theTeamsArray[i].players[j].position == 'back'||theTeamsArray[i].players[j].position == 'center'){
               tempDef+= theTeamsArray[i].players[j].newAtr[6];
               numDef++;
            }
            if(theTeamsArray[i].players[j].position == 'center'||theTeamsArray[i].players[j].position == 'forward'){
                numAttack++;
                tempAttack+= theTeamsArray[i].players[j].newAtr[6];
            }
            
        }
      
        tempDef =  Math.floor(tempDef/numDef);
        theTeamsArray[i].defence = tempDef;
        tempDef = 0;
        numDef = 0;
        tempAttack =  Math.floor(tempAttack/numAttack);
        theTeamsArray[i].attack = tempAttack;
        tempAttack = 0;
        numAttack = 0;
    }
    alert('1')
}
AVgTeamStats();


pickTeam('test');
/*
for (let i = 0; i < theTeamsArray.length; i++) {
    console.log(theTeamsArray[i].defence)
    console.log(theTeamsArray[i].attack)
    
}
*/
/*
var day = 25
var  now = new Date(2018, 11, day, 10, 33, 30, 0);
console.log(now)
*/
document.addEventListener('keypress', function (event) {
    if (event.key == 'd') {
        //console.log(theTeamsArray[1][0].getCalcScore())
        console.log(theTeamsArray[1].players[0].newAtr)
        console.log(theTeamsArray[1].players[1].newAtr)
      //  console.log(theTeamsArray[1].players[0].getCalcScore())
    }
 
})

