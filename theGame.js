var roundCount = 0;
var factor = 0;
var teamHomeGlobal;
var teamAwayGlobal;
var MyTeamPlay;///אני מקבל את הנתון הזה וזה הגישה שלי לקבוצה שלי במשחק
var compTeamPlay;///אני מקבל את הנתון הזה וזה הגישה שלי לקבוצה היריבה במשחק
var wereIsMyTeam; //אני מקבל כאן את האינדקס של המקום של הקבוצה שלי בכדי לא להריץ אותה אוטומטית בפונקציהTheGame
var myTeamGoals=8;
var compTeamGoals=8;
var isHomeTeam = false;


function StartTheGame(){
    _StartTheGame(roundCount);
}
function _StartTheGame(round) {
    
        for (let j = 0; j < finalFixtursArray[0].length; j++) {
            if (theTeamsArray[finalFixtursArray[round][j][0]].name == myTeam.name) {
                teamHomeGlobal = theTeamsArray[finalFixtursArray[round][j][0]];
                MyTeamPlay = theTeamsArray[finalFixtursArray[round][j][0]];
                teamAwayGlobal = theTeamsArray[finalFixtursArray[round][j][1]]
                wereIsMyTeam = j;
                isHomeTeam = true;
                break;
                
            } else if (theTeamsArray[finalFixtursArray[round][j][1]].name == myTeam.name) {
                teamAwayGlobal = theTeamsArray[finalFixtursArray[round][j][1]]
                MyTeamPlay = theTeamsArray[finalFixtursArray[round][j][1]];
                teamHomeGlobal = theTeamsArray[finalFixtursArray[round][j][0]]
                wereIsMyTeam = j;
                break;
            }


        }

   
    var homeImage = document.getElementById('homeTeramImageRealTime');
    var awayImage = document.getElementById('awayTeramImageRealTime');
    homeImage.src = teamHomeGlobal.image;
    awayImage.src = teamAwayGlobal.image;
    var homeName = document.getElementById('homeTeramNameRealTime');
    var awayName = document.getElementById('awayTeramNameRealTime');
    homeName.innerHTML = teamHomeGlobal.name;
    awayName.innerHTML = teamAwayGlobal.name;
}



function RandomWin() {
    var whoWins = Math.floor(Math.random() * 5);
    return whoWins;
}
function TheGame() {
    StartTheGame();
    _TheGame(roundCount)
}
function _TheGame(round) {

    for (let j = 0; j < finalFixtursArray[0].length; j++) {
        if(wereIsMyTeam==j){
           
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.played++;
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.Gf += myTeamGoals;
            theTeamsArray[finalFixtursArray[round][j][0]].roundResults.push(myTeamGoals)
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.Ga += compTeamGoals;
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.Gd = theTeamsArray[finalFixtursArray[round][j][0]].statistics.Gf - theTeamsArray[finalFixtursArray[round][j][0]].statistics.Ga;
    
            theTeamsArray[finalFixtursArray[round][j][1]].roundResults.push(compTeamGoals);
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.played++;
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.Gf += compTeamGoals;
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.Ga += myTeamGoals;
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.Gd = theTeamsArray[finalFixtursArray[round][j][1]].statistics.Gf - theTeamsArray[finalFixtursArray[round][j][1]].statistics.Ga;
    
    
    
    
            if (myTeamGoals == compTeamGoals) {
                console.log('draw');
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.draw++;
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.points += 1;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.draw++;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.points += 1;
            } else if (myTeamGoals > compTeamGoals) {
    
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.wins++;
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.points += 3;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.lose++;
            } else if (myTeamGoals < compTeamGoals) {
    
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.lose++;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.wins++;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.points += 3;
            }
    
    
    
        }else{
          ///////////////קצת טוחן את המחשב פה- צריך למצוא אלגוריתם אחר  
             var Gf1 =0;
            var Gf2 = 0;
             var team1attack = 1980 -  ((theTeamsArray[finalFixtursArray[round][j][0]].attack - theTeamsArray[finalFixtursArray[round][j][1]].defence)/2)
     var team2attack = 1980 -  ((theTeamsArray[finalFixtursArray[round][j][1]].attack - theTeamsArray[finalFixtursArray[round][j][0]].defence)/2)
            for(i=0;i<90;i++){
            var chanceToScore1 = Math.floor(Math.random() * 2000);
             var chanceToScore2 = Math.floor(Math.random() * 2000);    
                if(chanceToScore1>team1attack){
                Gf1++;
                }
                if(chanceToScore2>team2attack){
                 Gf2++;
                }
            }
              
  
           
   
    
                
    
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.played++;
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.Gf += Gf1;
            theTeamsArray[finalFixtursArray[round][j][0]].roundResults.push(Gf1)
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.Ga += Gf2;
            theTeamsArray[finalFixtursArray[round][j][0]].statistics.Gd = theTeamsArray[finalFixtursArray[round][j][0]].statistics.Gf - theTeamsArray[finalFixtursArray[round][j][0]].statistics.Ga;
    
            theTeamsArray[finalFixtursArray[round][j][1]].roundResults.push(Gf2);
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.played++;
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.Gf += Gf2;
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.Ga += Gf1;
            theTeamsArray[finalFixtursArray[round][j][1]].statistics.Gd = theTeamsArray[finalFixtursArray[round][j][1]].statistics.Gf - theTeamsArray[finalFixtursArray[round][j][1]].statistics.Ga;
    
    
    
    
            if (Gf1 == Gf2) {
                console.log('draw');
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.draw++;
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.points += 1;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.draw++;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.points += 1;
            } else if (Gf1 > Gf2) {
    
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.wins++;
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.points += 3;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.lose++;
            } else if (Gf1 < Gf2) {
    
                theTeamsArray[finalFixtursArray[round][j][0]].statistics.lose++;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.wins++;
                theTeamsArray[finalFixtursArray[round][j][1]].statistics.points += 3;
            }
    
    
        }
       


    }
    UpdateTheFixtures(roundCount)
    roundCount += 1;

    DestroyTable();
    DisplayTable();


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
    document.getElementById('extra').innerHTML = "";
    var theRoundCount = document.getElementById('roundMatchInGameView');
    theRoundCount.innerHTML = 'round: ' + (roundCount+1);
    StartTheGame();
    var timer = document.getElementById('timer');

    var time = 1000;
    var extra = Math.floor(Math.random() * 5) + 1;
   // alert(extra)
    var extraTime = 0;
   
    BuildTHeTableHead();


    var interval = setInterval(() => {
        var extaPos = document.getElementById('extra');
        gameTime += 1;

        timer.innerHTML = gameTime;
        WhoScores();

if(isHomeTeam){
    document.getElementById('home-team').innerHTML = goal1;
    document.getElementById('away-team').innerHTML = goal2;
}else{
    document.getElementById('home-team').innerHTML = goal2;
    document.getElementById('away-team').innerHTML = goal1;
}
      

        if (gameTime >= 91) {
            timer.innerHTML = 90;
            extaPos.innerHTML = extraTime;
            extraTime += 1;
        }
        if (gameTime == 91 + extra + 1) {
            clearInterval(interval);
            
            goal1 = 0;
            goal2 = 0;
            gameTime = 0;
            alert('game ended');
            ClearMatchRealTimeTable();
            TheGame();
            document.getElementById('SetNextMatchFixturesInGameView').style.visibility = 'visible';
        }

    }, time / 10);
   
}

function WhoScores() {
    var baseChanceToScore = 1980;
//alert(teamHomeGlobal.attack);
//alert(teamAwayGlobal.defence);
var homeAttack = baseChanceToScore - ((teamHomeGlobal.attack-teamAwayGlobal.defence)/2);
var awayAttack =baseChanceToScore - ((teamAwayGlobal.attack-teamHomeGlobal.defence)/2);
  //  var team1Chance = 97;
 //   var team2Chance = 97;

    
    //console.log(playerRandom1);
  
    // console.log(player1);
   
    //alert(playerRandom2)
    var chanceToScore1 = Math.floor(Math.random() * 2000);
    var chanceToScore2 = Math.floor(Math.random() * 2000);
   



    if (chanceToScore1 > homeAttack) {
         console.log('chanceToScore1');
         console.log(chanceToScore1);
         console.log('-------');
        var playerRandom1 = Math.floor(Math.random() * teamHomeGlobal.players.length - 1) + 1;
          var player1 = teamHomeGlobal.players[playerRandom1].name;
        BuildScorers('tableMatchHome', 'home');
        goal1 += 1;
        Team1Scorers.push(player1);
        timeOfScore1.push(gameTime);
       // alert(player1)
        var x = document.querySelectorAll('.score-playerhome');
        var player1Name = x[x.length - 1];


        player1Name.innerHTML = Team1Scorers[Team1Scorers.length - 1];

        var k = document.querySelectorAll('.score-timehome');
        var time1 = k[k.length - 1];
        time1.innerHTML = timeOfScore1[timeOfScore1.length - 1];




    }
    if (chanceToScore2 > awayAttack) {
         console.log('chanceToScore2');
         console.log(chanceToScore2);
         console.log('-------');
         var playerRandom2 = Math.floor(Math.random() * teamAwayGlobal.players.length - 1) + 1;
    var player2 = teamAwayGlobal.players[playerRandom2].name;
        BuildScorers('tableMatchAway', 'away');
        goal2 += 1;
        Team2Scorers.push(player2);
        timeOfScore2.push(gameTime);

        //alert(player2)

        var y = document.querySelectorAll('.score-playeraway');
        var player2Name = y[y.length - 1];
        player2Name.innerHTML = Team2Scorers[Team2Scorers.length - 1];

        var l = document.querySelectorAll('.score-timeaway');
        var time2 = l[l.length - 1];
        time2.innerHTML = timeOfScore2[timeOfScore2.length - 1];

    }
    myTeamGoals = goal1;
    compTeamGoals = goal2;
    
}

function BuildScorers(id, were) {

    var div = document.createElement('div');
    div.classList.add('matchRealTime');
    document.getElementById(id).append(div);

    var img = document.createElement('img');
    img.src = "images/soccer-ball-retina.png";
    img.classList.add('soccerball');
    div.append(img);

    var playerName = document.createElement('h5');
    playerName.classList.add('score-player' + were);

    div.append(playerName);

    var playerTime = document.createElement('h5');
    playerTime.classList.add('score-time' + were);
    div.append(playerTime);
    build = true;


}

function BuildTHeTableHead() {
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
    homeTd.innerHTML = ''

    var AwayTd = document.createElement('td');
    AwayTd.classList.add('tabletdmatch');
    AwayTd.id = ('tableMatchAway');
    Tr.append(AwayTd);
    AwayTd.innerHTML = ''
    firstLoad = true;

}


function ClearMatchRealTimeTable() {
    if (firstLoad) {
        var RemoveMe = document.getElementById('tableHeadForDelete');
        RemoveMe.remove();
    }


}


function RonTest() {

    for (let i = 0; i < theTeamsArray[13].players.length; i++) {
        console.log(theTeamsArray[13].players[i].name)



    }
}

function PlayTest() {
    document.getElementById('playThisRound').style.visibility ='hidden';

SetTimer();
    
    
}
 function  SetNextMatchFixturesInGameView(){
    
  
    var theRoundCount = document.getElementById('roundMatchInGameView');
    theRoundCount.innerHTML = 'round: ' + (roundCount+1);
    var homeTeamName = document.getElementById('homeTeramNameRealTime');
    var homeTeamImg = document.getElementById('homeTeramImageRealTime');
    var awayTeamName = document.getElementById('awayTeramNameRealTime');
    var awayTeamImg = document.getElementById('awayTeramImageRealTime');
var targetHome;
var targetAway;
    for (let i = 0; i < finalFixtursArray[0].length; i++) {
        if(theTeamsArray[finalFixtursArray[roundCount][i][0]].name == myTeam.name){
          
            
            targetHome = theTeamsArray[finalFixtursArray[roundCount][i][0]];
            targetAway = theTeamsArray[finalFixtursArray[roundCount][i][1]];
        }else if(theTeamsArray[finalFixtursArray[roundCount][i][1]].name == myTeam.name){
           
            targetHome = theTeamsArray[finalFixtursArray[roundCount][i][1]];
            targetAway = theTeamsArray[finalFixtursArray[roundCount][i][0]];
        }
        
    }

    homeTeamName.innerHTML = targetHome.name;
   homeTeamImg.src = targetHome.image;
    awayTeamName.innerHTML = targetAway.name;
    awayTeamImg.src  = targetAway.image;
    document.getElementById('home-team').innerHTML = "";
    document.getElementById('away-team').innerHTML = "";
   document.getElementById('timer').innerHTML = "";
   document.getElementById('extra').innerHTML = "";
   document.getElementById('SetNextMatchFixturesInGameView').style.visibility = 'hidden';
   document.getElementById('playThisRound').style.visibility = 'visible'

}
//קורא לזה בלחיצה כל טאב Match day
///SetNextMatchFixturesInGameView();

