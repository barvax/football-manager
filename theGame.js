
var teamHomeGlobal;
var teamAwayGlobal;

function StartTheGame() {
var place = 0;

    for (let i = 0; i < theTeamsArray.length; i++) {
        if(round[i]==teamIndex){
            console.log("**************")
            console.log(teamIndex);
            console.log("**************")
            console.log(i);
            place = i;
            if(i%2==0){
               
                teamHomeGlobal = theTeamsArray[teamIndex];
                teamAwayGlobal = theTeamsArray[round[place+1]];
            }else{
                
                teamHomeGlobal = theTeamsArray[teamIndex];
                teamAwayGlobal = theTeamsArray[round[place-1]];
            }
            

        }
        
    }
   var homeImage =  document.getElementById('homeTeramImageRealTime');
   var awayImage = document.getElementById('awayTeramImageRealTime');
homeImage.src = teamHomeGlobal.image;
awayImage.src = teamAwayGlobal.image;
   var homeName =  document.getElementById('homeTeramNameRealTime');   
   var awayName  = document.getElementById('awayTeramNameRealTime');
   homeName.innerHTML = teamHomeGlobal.name;
   awayName.innerHTML = teamAwayGlobal.name;
}
//StartTheGame();

var roundCount = 1;
var factor = 0;
function RandomWin() {
    var whoWins = Math.floor(Math.random() * 5);
    return whoWins;
}

function TheGame() {
    for (let i = 0; i < theTeamsArray.length; i++) {
        for (let j = 0; j < 1; j++) {
            var Gf1 = RandomWin();
            var Gf2 = RandomWin();


            console.log("this is the round.." + round[j + i])
            console.log("this is the round.." + round[j + i + 1])
            theTeamsArray[round[j + i]].statistics.played++;
            theTeamsArray[round[j + i]].statistics.Gf += Gf1;
            theTeamsArray[round[j + i]].roundResults.push(Gf1)
            theTeamsArray[round[j + i]].statistics.Ga += Gf2;

            theTeamsArray[round[j + i]].statistics.Gd = theTeamsArray[round[j + i]].statistics.Gf - theTeamsArray[round[j + i]].statistics.Ga;
            theTeamsArray[round[j + i + 1]].roundResults.push(Gf2);
            theTeamsArray[round[j + i + 1]].statistics.played++;
            theTeamsArray[round[j + i + 1]].statistics.Gf += Gf2;
            theTeamsArray[round[j + i + 1]].statistics.Ga += Gf1;
            theTeamsArray[round[j + i + 1]].statistics.Gd = theTeamsArray[round[j + i + 1]].statistics.Gf - theTeamsArray[round[j + i + 1]].statistics.Ga;




            if (Gf1 == Gf2) {
                console.log('draw');
                theTeamsArray[round[j + i]].statistics.draw++;
                theTeamsArray[round[j + i]].statistics.points += 1;
                theTeamsArray[round[j + i + 1]].statistics.draw++;
                theTeamsArray[round[j + i + 1]].statistics.points += 1;
            } else if (Gf1 > Gf2) {
                console.log(theTeamsArray[round[i + j]].name + ' wins');
                theTeamsArray[round[j + i]].statistics.wins++;
                theTeamsArray[round[j + i]].statistics.points += 3;
                theTeamsArray[round[j + i + 1]].statistics.lose++;
            } else if (Gf1 < Gf2) {
                console.log(theTeamsArray[round[i + j + 1]].name + ' wins');
                theTeamsArray[round[j + i]].statistics.lose++;
                theTeamsArray[round[j + i + 1]].statistics.wins++;
                theTeamsArray[round[j + i + 1]].statistics.points += 3;
            }


            i += 1;
        }



    }
    UpdateTheFixtures(roundCount, factor)
    roundCount += 1;
    factor += 14;
    DestroyTable();
    DisplayTable();
    console.log(theTeamsArray[0].statistics);

}

////////////test///////////////
var build = false;
var goal1 = 0;
var goal2 = 0;
var Team1Scorers = [];
var Team2Scorers = [];
var timeOfScore1 = [];
var timeOfScore2 = [];
var gameTime = 0;

var firstLoad = false;

tempIdForTimer1 = 0;
tempIdForTimer2 = 0;


function SetTimer() {
    StartTheGame();
    var timer = document.getElementById('timer');

    var time = 2000;
    var extra = Math.floor(Math.random() * 5) + 1;
    alert(extra)
    var extraTime = 0;
    ClearMatchRealTimeTable();
    BuildTHeTableHead();
   

    var interval = setInterval(() => {
        var extaPos = document.getElementById('extra');
        gameTime += 1;

        timer.innerHTML = gameTime;
        WhoScores();
        /*if(build==5){
           
              var x = document.querySelectorAll('.score-playerhome');             
           var player1Name = x[x.length-1]; 
           alert(player1Name )     
            
           player1Name.innerHTML = 'ron'//Team1Scorers[Team1Scorers.length-1];
         
           var y = document.querySelectorAll('.score-playeraway');             
           var player2Name = y[y.length-1];    
           alert(player2Name )           
           player2Name.innerHTML = 'ben'//Team2Scorers[Team2Scorers.length - 1];

         /*  var k = document.querySelectorAll('.score-timehome'); 
           var  time1 = k[k.length-1] ;
           time1.innerHTML = timeOfScore1[timeOfScore1.length - 1];

           var l = document.querySelectorAll('.score-timeaway'); 
           var  time2 = l[l.length-1] ;
           time2.innerHTML = timeOfScore2[timeOfScore2.length - 1];

        }*/
       
        document.getElementById('home-team').innerHTML = goal1;
        document.getElementById('away-team').innerHTML = goal2;
       
        if (gameTime >= 91) {
            timer.innerHTML = 90;
            extaPos.innerHTML = extraTime;
            extraTime += 1;
        }
        if (gameTime == 91 + extra + 1) {
            clearInterval(interval);
            alert('game ended');
            goal1 = 0;
            goal2 = 0;
            gameTime = 0;
        }

    }, time / 10);
}

function WhoScores() {
   
    var team1Chance = 95;
    var team2Chance = 95;

    var playerRandom1 = Math.floor(Math.random() * teamHomeGlobal.players.length - 1) + 1;
     console.log(playerRandom1);
    var player1 = teamHomeGlobal.players[playerRandom1].name;
    // console.log(player1);
    var playerRandom2 = Math.floor(Math.random() * teamAwayGlobal.players.length - 1) + 1;
    var player2 = teamAwayGlobal.players[playerRandom2].name;
//alert(playerRandom2)
    var chanceToScore1 = Math.floor(Math.random() * 100);
    var chanceToScore2 = Math.floor(Math.random() * 100);


  
    if (chanceToScore1 > team1Chance) {
        BuildScorers('tableMatchHome','home');
        goal1 += 1;
        Team1Scorers.push(player1);
        timeOfScore1.push(gameTime);
        alert(player1)
        var x = document.querySelectorAll('.score-playerhome');             
           var player1Name = x[x.length-1]; 
               
            
           player1Name.innerHTML = Team1Scorers[Team1Scorers.length-1];
         
           var k = document.querySelectorAll('.score-timehome'); 
           var  time1 = k[k.length-1] ;
           time1.innerHTML = timeOfScore1[timeOfScore1.length - 1];
    
     
        
        
    }
    if (chanceToScore2 > team2Chance) {
        BuildScorers('tableMatchAway','away');
        goal2 += 1;
        Team2Scorers.push(player2);
        timeOfScore2.push(gameTime);

       alert(player2)
      
        var y = document.querySelectorAll('.score-playeraway');             
        var player2Name = y[y.length-1];                    
        player2Name.innerHTML = Team2Scorers[Team2Scorers.length - 1];

        var l = document.querySelectorAll('.score-timeaway'); 
           var  time2 = l[l.length-1] ;
           time2.innerHTML = timeOfScore2[timeOfScore2.length - 1];
       
    }

}

function BuildScorers(id,were) {
    
    var div = document.createElement('div');
    div.classList.add('matchRealTime');
    document.getElementById(id).append(div);
   
    var img = document.createElement('img');
    img.src = "images/soccer-ball-retina.png";
    img.classList.add('soccerball');
    div.append(img);

    var playerName = document.createElement('h5');
    playerName.classList.add('score-player'+were);
   
    div.append(playerName);

    var playerTime = document.createElement('h5');
    playerTime.classList.add('score-time'+were);
    div.append(playerTime);
    build = true;
   

}

function BuildTHeTableHead(){
    var firstId = document.getElementById('theMatchStartTableHere');
    var table = document.createElement('table');
    table.classList.add('matchTableHead');
    table.id = 'tableHeadForDelete'
    firstId.append(table);
    var Tr = document.createElement('tr');
    table.append(Tr);

    var homeTd = document.createElement('td');
    homeTd.classList.add('tabletdmatch');
    homeTd.id = ('tableMatchHome');
    Tr.append(homeTd);

    var AwayTd = document.createElement('td');
    AwayTd.classList.add('tabletdmatch');
    AwayTd.id = ('tableMatchAway');
    Tr.append(AwayTd);
    firstLoad = true;

}


function ClearMatchRealTimeTable(){
    if(firstLoad){
        var RemoveMe =  document.getElementById('tableHeadForDelete');
        RemoveMe.remove();
    }
   
   
}


function RonTest(){
   
    for (let i = 0; i < theTeamsArray[13].players.length; i++) {
        console.log(theTeamsArray[13].players[i].name)
       
       
        
    }
}