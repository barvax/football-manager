




var myTable = document.getElementById('theTable');

function DisplayTable() {
   /* var teamIndex = document.getElementById('table-index');
    var imgSrc = document.getElementById('tableImgSrc');
    var tableTeamName = document.getElementById('tableTeamName');
    var gamesPlayed = document.getElementById('tablePlayed');
    var teamWins = document.getElementById('tableWins');
    var teamDraw = document.getElementById('tableDraw');
    var teamLoss = document.getElementById('tableLoss');
    var teamGF = document.getElementById('TableGF');
    var teamGA = document.getElementById('TableGA');
    var teamGD = document.getElementById('TableGD');
    var Points = document.getElementById('TablePoints');
    var last5 = document.getElementById('tableLast5');
    var last4 = document.getElementById('tableLast4');
    var last3 = document.getElementById('tableLast3');
    var last2 = document.getElementById('tableLast2');
    var last1 = document.getElementById('tableLast1');*/

    for (let i = 0; i < 14; i++) {
        var tr = document.createElement('tr');
        myTable.append(tr);
        ///מיקום בטבלה
        var tdTeamIndex = document.createElement('td');
        tdTeamIndex.innerHTML = i+1;
        tr.append(tdTeamIndex);

        ////  תמונת הקבוצה///
        var imgParent = document.createElement('td');
        imgParent.colSpan = '2';
        var tdTeamImg = document.createElement('img');
        tdTeamImg.src = theTeamsArray[i].image;
        tr.append(imgParent);
        imgParent.append(tdTeamImg);

        ///שם הקבןצה//
        var tdTeamName = document.createElement('td');
        tdTeamName.innerHTML = theTeamsArray[i].name;
        tdTeamName.colSpan = '2';
        tr.append(tdTeamName);
        //משחקים///
        var gamesPlayed = document.createElement('td');
        gamesPlayed.innerHTML = theTeamsArray[i].statistics.played;
        tr.append(gamesPlayed);
        //נצחונות//
        var gamesWon = document.createElement('td');
        gamesWon.innerHTML = theTeamsArray[i].statistics.wins;
        tr.append(gamesWon);
        ///תיקו///
        var gamesDraw = document.createElement('td');
        gamesDraw.innerHTML = theTeamsArray[i].statistics.draw;
        tr.append(gamesDraw);
        //הפסדים///
        var gamesLose = document.createElement('td');
        gamesLose.innerHTML = theTeamsArray[i].statistics.lose;
        tr.append(gamesLose);
        ///נקודות///
        var points = document.createElement('td');
        points.innerHTML = theTeamsArray[i].statistics.points;
        tr.append(points);
        // שערי זכות///
        var GF = document.createElement('td');
        GF.innerHTML = theTeamsArray[i].statistics.Gf;
        tr.append(GF);
        ///שערי חובה///
        var GA = document.createElement('td');
        GA.innerHTML = theTeamsArray[i].statistics.Ga;
        tr.append(GA);
        ///הפרש שערים///
        var GD = document.createElement('td');
        GD.innerHTML = theTeamsArray[i].statistics.Gd;
        tr.append(GD);
         ///נקודות//
         var points = document.createElement('td');
         points.innerHTML = theTeamsArray[i].statistics.points;
         tr.append(points);
         ///משחקים אחורה///
         var game5 = document.createElement('td');
         game5.innerHTML = theTeamsArray[i].statistics.last5;
         tr.append(game5);
         var game4 = document.createElement('td');
         game4.innerHTML = theTeamsArray[i].statistics.last4;
         tr.append(game4);
         var game3 = document.createElement('td');
         game3.innerHTML = theTeamsArray[i].statistics.last3;
         tr.append(game4);
         var game2 = document.createElement('td');
         game2.innerHTML = theTeamsArray[i].statistics.last2;
         tr.append(game2);
         var game1 = document.createElement('td');
         game1.innerHTML = theTeamsArray[i].statistics.last1;
         tr.append(game1);


    }


}

DisplayTable();
