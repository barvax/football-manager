var teamsFixtures = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var tempForfixturs;
var gamesForFixtures = [];
var round = [];
function SetGamesPerRound(){
    for (let i = 0; i < teamsFixtures.length/2; i++) {
        gamesForFixtures.push(teamsFixtures[i]);
        gamesForFixtures.push(teamsFixtures[teamsFixtures.length-i-1])
        
    }
   
    for (let i = 0; i < gamesForFixtures.length; i++) {
       round.push(gamesForFixtures[i]) ;
        
    }
    gamesForFixtures =[];
}

function NextRound(){
    tempForfixturs = teamsFixtures[1];
for (let i = 1; i < teamsFixtures.length; i++) {
    teamsFixtures[i] = teamsFixtures[i+1];
    
}
teamsFixtures[teamsFixtures.length-1] = tempForfixturs;

}

function AllGamesPerGameCycle(){
    for (let i = 0; i < teamsFixtures.length-1; i++) {
        SetGamesPerRound();
       NextRound();
        
    }
    console.log(round)
}

fixturesSection  = document.getElementById('fixtures');

function setOnScreen(team1,team2,src1,src2,score1,score2){
    //create the round number title//
/*var roundDiv = document.createElement('div');
roundDiv.classList.add('roundName-div');
roundDiv.innerHTML = 'Round'+'/ 34'
fixturesSection.append(roundDiv);*/
//create the table//
var table = document.createElement('table');
table.classList.add('fixture-table');
fixturesSection.append(table);
//create the tr//
var tr = document.createElement('tr');
tr.classList.add('fixtureTd');
table.append(tr);
//create the td אולי נכניס שם בעתיד תאריך ושעת משחק // 
/*var td = document.createElement('td');
td.classList.add('fixtureTd');
tr.append(td);*/
///create the fixtureInnerBox
function Test(){
    var fixtureInnerBox = document.createElement('div');
    fixtureInnerBox.classList.add('fixtureInnerBox');
    tr.append(fixtureInnerBox);
    //create the image//
    var image = document.createElement('img');
    image.src = src1;
    fixtureInnerBox.append(image);
    //create the team name//
    var teamName = document.createElement('h4');
    teamName.innerHTML = team1;
    fixtureInnerBox.append(teamName);
    //create the result//
    var div = document.createElement('div');
    fixtureInnerBox.append(div);
    var resultTitle1 = document.createElement('h4');
    resultTitle1.classList.add('fixtureResult');
    resultTitle1.id=score1;
    resultTitle1.innerHTML = "0";
    div.append(resultTitle1);
    var fixtureInnerBox = document.createElement('div');
    fixtureInnerBox.classList.add('fixtureInnerBox');
    tr.append(fixtureInnerBox);
    //create the image//
    var image = document.createElement('img');
    image.src = src2;
    fixtureInnerBox.append(image);
    //create the team name//
    var teamName = document.createElement('h4');
    teamName.innerHTML = team2;
    fixtureInnerBox.append(teamName);
    //create the result//
    var div = document.createElement('div');
    fixtureInnerBox.append(div);
    var resultTitle2 = document.createElement('h4');
    resultTitle2.id=score2;
    resultTitle2.classList.add('fixtureResult');
    resultTitle2.innerHTML = '0';
    div.append(resultTitle2);
}
Test();


}
console.log('team fixtures')
console.log(teamsFixtures)
var FixturesArray = [] ///את זה בניתי בשביל לגשת ל Id של כל תוצאה בכל סיבוב בשביל לעדכן. קצת עקום אבל זה מה יש...
//////////בהזדמנות צריך להוסיף עוד סיבוב להפוך ביתיות
function Round1(){
    for (let i = 0; i < round.length/2; i++) {
        if(i%[teamsFixtures.length/2]==0){
            var roundDiv = document.createElement('div');
roundDiv.classList.add('roundName-div');
roundDiv.innerHTML = 'Round '+(i/[teamsFixtures.length/2]+1) +' /' + (teamsFixtures.length-1)*2
fixturesSection.append(roundDiv);
        }
        if(i==0){
            setOnScreen(theTeamsArray[round[i]].name,theTeamsArray[round[i+1]].name,theTeamsArray[round[i]].image,theTeamsArray[round[i+1]].image,round[i],round[i+1]);
        }else if(i==1){
            setOnScreen(theTeamsArray[round[i+1]].name,theTeamsArray[round[i+2]].name,theTeamsArray[round[i+1]].image,theTeamsArray[round[i+2]].image,round[i],round[i+1]);
        }else{
            setOnScreen(theTeamsArray[round[i*2]].name,theTeamsArray[round[i*2+1]].name,theTeamsArray[round[i*2]].image,theTeamsArray[round[i*2+1]].image,round[i],round[i+1]);
        }
        
        
    }
}

function Round2(){
    for (let i = 0; i < round.length/2; i++) {
        if(i%[teamsFixtures.length/2]==0){
            var roundDiv = document.createElement('div');
roundDiv.classList.add('roundName-div');
roundDiv.innerHTML = 'Round '+(i/[teamsFixtures.length/2]+14) +' /' + (teamsFixtures.length-1)*2
fixturesSection.append(roundDiv);
        }
        if(i==0){
            setOnScreen(theTeamsArray[round[i+1]].name,theTeamsArray[round[i]].name,theTeamsArray[round[i+1]].image,theTeamsArray[round[i]].image);
        }else if(i==1){
            setOnScreen(theTeamsArray[round[i+2]].name,theTeamsArray[round[i+1]].name,theTeamsArray[round[i+2]].image,theTeamsArray[round[i+1]].image);
        }else{
            setOnScreen(theTeamsArray[round[i*2+1]].name,theTeamsArray[round[i*2]].name,theTeamsArray[round[i*2+1]].image,theTeamsArray[round[i*2]].image);
        }
        
        
    }
}

function AllGameDisplayOnScreen(){
    AllGamesPerGameCycle();
    Round1();
    Round2();
}

AllGameDisplayOnScreen();
