var teamsFixtures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var tempForfixturs;
var gamesForFixtures = [];
var round = [];
var roundTemp = [];
var finalFixtursArray = []
var round2 = round;


function Step1() {
	for (i = 0; i < 26; i++) {
		finalFixtursArray.push([]);
		for (j = 0; j < 7; j++) {
			finalFixtursArray[i].push([]);
		}
	}
}
function Step3() {////ההיפןך של בית חוץ
	var temp;
	for (i = 14; i < 182; i++) {
		for (j = 0; j < 13; j++) {
			temp = round[j + i]
			round[j + i] = round[j + 1 + i]
			round[j + 1 + i] = temp
			j++
		}
		i += 27
	}
	for (t = 0; t < 182; t++) {
		roundTemp.push(round[t])
	}
}
function InsertRound2() {
	for (j = 0; j < 182; j++) {
		roundTemp.push(round2[j])
	}
}
function RoundTwo() {
	var temp;
	for (i = 0; i < 182; i++) {
		temp = round2[i];
		round2[i] = round2[i + 1]
		round2[i + 1] = temp
		i++
	}
}
function SetGamesPerRound() {
	for (let i = 0; i < teamsFixtures.length / 2; i++) {
		gamesForFixtures.push(teamsFixtures[i]);
		gamesForFixtures.push(teamsFixtures[teamsFixtures.length - i - 1])
	}
	for (let i = 0; i < gamesForFixtures.length; i++) {
		round.push(gamesForFixtures[i]);
	}
	gamesForFixtures = [];
}
function NextRound() {
	tempForfixturs = teamsFixtures[1];
	for (let i = 1; i < teamsFixtures.length; i++) {
		teamsFixtures[i] = teamsFixtures[i + 1];
	}
	teamsFixtures[teamsFixtures.length - 1] = tempForfixturs;
}
function AllGamesPerGameCycle() {
	for (let i = 0; i < teamsFixtures.length - 1; i++) {
		SetGamesPerRound();
		NextRound();
	}
  
}
function FinalFixtures() {
	x = 0
	for (i = 0; i < 26; i++) {
		for (j = 0; j < 7; j++) {
			finalFixtursArray[i][j].push(roundTemp[x]);
			finalFixtursArray[i][j].push(roundTemp[x + 1]);
			x += 2
		}
	}
	console.log('--final--')
	console.log(finalFixtursArray)
}

AllGamesPerGameCycle();
Step1();
Step3();

RoundTwo();
InsertRound2();
FinalFixtures();
//////////////////////////////////////////////////////////////////////////////
fixturesSection = document.getElementById('fixtures');

function setOnScreen(team1, team2, src1, src2, score1, score2) {
    //create the round number title//
   
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
    function Test() {
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
        resultTitle1.id = score1;
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
        //create the stadium//
        var stadium = document.createElement('h6');
        stadium.classList.add('stadiumName');
        stadium.innerHTML = 'איצטדיון';
        teamName.append(stadium);
        //create the result//
        var div = document.createElement('div');
        fixtureInnerBox.append(div);
        var resultTitle2 = document.createElement('h4');
        resultTitle2.id = score2;
        resultTitle2.classList.add('fixtureResult');
        resultTitle2.innerHTML = '0';
        div.append(resultTitle2);
    }
    Test();


}

function UpdateTheFixtures(theRound, factor) {


    var ron = document.querySelectorAll('.fixtureResult');

    for (let i = 0; i < theTeamsArray.length; i++) {
        ron[i + factor].id = theTeamsArray[round[i + factor]].name + theRound;
        console.log(ron[i + factor])
        var uptate = document.getElementById( ron[i + factor].id);
        uptate.innerHTML = theTeamsArray[round[i+factor]].roundResults[theRound-1]
    }
    


}

function InsertStadiumName(){
    var ron = document.querySelectorAll('.stadiumName');
   
    for (let k = 0; k < ron.length; k++) {
        ron[k].id = 'stadiumName'+k;
       
    }
   

console.log('**********')
x=0
    for (let i = 0; i < (theTeamsArray.length-1)*2; i++) {
        for (let j = 0; j < theTeamsArray.length/2; j++) {
           var set = document.getElementById('stadiumName'+x)
           set.innerHTML = 'stadium: '+(theTeamsArray[finalFixtursArray[i][j][0]].stadium) 
            x++
        }
        
        
    }
}

function Round1() {
    for (let i = 0; i < round.length / 2; i++) {
        if (i % [teamsFixtures.length / 2] == 0) {
            var roundDiv = document.createElement('div');
            roundDiv.classList.add('roundName-div');
            roundDiv.innerHTML = 'Round ' + (i / [teamsFixtures.length / 2] + 1) + ' /' + (teamsFixtures.length - 1) * 2
            fixturesSection.append(roundDiv);
        }
        if (i == 0) {
            setOnScreen(theTeamsArray[round[i]].name, theTeamsArray[round[i + 1]].name, theTeamsArray[round[i]].image, theTeamsArray[round[i + 1]].image, theTeamsArray[round[i]].name + (i / [teamsFixtures.length / 2] + 1), theTeamsArray[round[i + 1]].name + (i / [teamsFixtures.length / 2] + 1));
        } else if (i == 1) {
            setOnScreen(theTeamsArray[round[i + 1]].name, theTeamsArray[round[i + 2]].name, theTeamsArray[round[i + 1]].image, theTeamsArray[round[i + 2]].image, theTeamsArray[round[i + 1]].name + (i / [teamsFixtures.length / 2] + 1), theTeamsArray[round[i + 2]].name + (i / [teamsFixtures.length / 2] + 1));
        } else {
            setOnScreen(theTeamsArray[round[i * 2]].name, theTeamsArray[round[i * 2 + 1]].name, theTeamsArray[round[i * 2]].image, theTeamsArray[round[i * 2 + 1]].image, theTeamsArray[round[i * 2]].name + (i / [teamsFixtures.length / 2] + 1), theTeamsArray[round[i * 2 + 1]].name + (i / [teamsFixtures.length / 2] + 1));
        }


    }
}

function Round2() {
    for (let i = 0; i < round.length / 2; i++) {
        if (i % [teamsFixtures.length / 2] == 0) {
            var roundDiv = document.createElement('div');
            roundDiv.classList.add('roundName-div');
            roundDiv.innerHTML = 'Round ' + (i / [teamsFixtures.length / 2] + 14) + ' /' + (teamsFixtures.length - 1) * 2
            fixturesSection.append(roundDiv);
        }
        if (i == 0) {
            setOnScreen(theTeamsArray[round[i + 1]].name, theTeamsArray[round[i]].name, theTeamsArray[round[i + 1]].image, theTeamsArray[round[i]].image);
        } else if (i == 1) {
            setOnScreen(theTeamsArray[round[i + 2]].name, theTeamsArray[round[i + 1]].name, theTeamsArray[round[i + 2]].image, theTeamsArray[round[i + 1]].image);
        } else {
            setOnScreen(theTeamsArray[round[i * 2 + 1]].name, theTeamsArray[round[i * 2]].name, theTeamsArray[round[i * 2 + 1]].image, theTeamsArray[round[i * 2]].image);
        }


    }
}

function AllGameDisplayOnScreen() {
    AllGamesPerGameCycle();
    Round1();
    Round2();
}

AllGameDisplayOnScreen();




//////////////////////////new///////////
/*
var teamsFixtures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var tempForfixturs;
var gamesForFixtures = [];
var round = [];

*/

/*
/////////////***********************************////////////////////
/*
*/
InsertStadiumName();