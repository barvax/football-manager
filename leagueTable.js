




var myTable = document.getElementById('theTable');

function DisplayTable() {

  alert("building table")
  myTable = document.getElementById('theTable');
  //the th//
  var header = document.createElement('tr');
  //header.style.position = "fixed";

  
  myTable.append(header);

  var club = document.createElement('th');
  club.colSpan = '5';
  club.innerHTML = 'Club';
  header.append(club);

  var MP = document.createElement('th');
  MP.innerHTML = 'MP';
  header.append(MP);
  var W = document.createElement('th');
  W.innerHTML = 'W';
  header.append(W);
  var D = document.createElement('th');
  D.innerHTML = 'D';
  header.append(D);
  var L = document.createElement('th');
  L.innerHTML = 'L';
  header.append(L);
  var GF = document.createElement('th');
  GF.innerHTML = 'GF';
  header.append(GF);
  var GA = document.createElement('th');
  GA.innerHTML = 'GA';
  header.append(GA);
  var GD = document.createElement('th');
  GD.innerHTML = 'GD';
  header.append(GD);
  var Pts = document.createElement('th');
  Pts.innerHTML = 'Pts';
  header.append(Pts);

  var last5 = document.createElement('th');
  last5.colSpan = '5';
  last5.innerHTML = 'last5';
  header.append(last5);



  for (let i = 0; i < 14; i++) {
    var tr = document.createElement('tr');
    myTable.append(tr);
    ///מיקום בטבלה
    var tdTeamIndex = document.createElement('td');
    tdTeamIndex.innerHTML = i + 1;
    tr.append(tdTeamIndex);

    ////  תמונת הקבוצה///
    var imgParent = document.createElement('td');
    imgParent.colSpan = '2';
    var tdTeamImg = document.createElement('img');
    tdTeamImg.src = sortedTeamsArray[i].image;
    tr.append(imgParent);
    imgParent.append(tdTeamImg);

    ///שם הקבןצה//
    var tdTeamName = document.createElement('td');
    tdTeamName.innerHTML = sortedTeamsArray[i].name;
    tdTeamName.colSpan = '2';
    tr.append(tdTeamName);
    //משחקים///
    var gamesPlayed = document.createElement('td');
    gamesPlayed.innerHTML = sortedTeamsArray[i].statistics.played;
    tr.append(gamesPlayed);
    //נצחונות//
    var gamesWon = document.createElement('td');
    gamesWon.innerHTML = sortedTeamsArray[i].statistics.wins;
    tr.append(gamesWon);
    ///תיקו///
    var gamesDraw = document.createElement('td');
    gamesDraw.innerHTML = sortedTeamsArray[i].statistics.draw;
    tr.append(gamesDraw);
    //הפסדים///
    var gamesLose = document.createElement('td');
    gamesLose.innerHTML = sortedTeamsArray[i].statistics.lose;
    tr.append(gamesLose);
    ///נקודות///
    //var points = document.createElement('td');
    // points.innerHTML = theTeamsArray[i].statistics.points;
    // tr.append(points);
    // שערי זכות///
    var GF = document.createElement('td');
    GF.innerHTML = sortedTeamsArray[i].statistics.Gf;
    tr.append(GF);
    ///שערי חובה///
    var GA = document.createElement('td');
    GA.innerHTML = sortedTeamsArray[i].statistics.Ga;
    tr.append(GA);
    ///הפרש שערים///
    var GD = document.createElement('td');
    GD.innerHTML = sortedTeamsArray[i].statistics.Gd;
    tr.append(GD);
    ///נקודות//
    var points = document.createElement('td');
    points.innerHTML = sortedTeamsArray[i].statistics.points;
    points.style.color="red";
    points.style.fontWeight = "bold"
    tr.append(points);
    ///משחקים אחורה///
    var game5 = document.createElement('td');
    game5.innerHTML = sortedTeamsArray[i].statistics.last5;
    tr.append(game5);
    var game4 = document.createElement('td');
    game4.innerHTML = sortedTeamsArray[i].statistics.last4;
    tr.append(game4);
    var game3 = document.createElement('td');
    game3.innerHTML = sortedTeamsArray[i].statistics.last3;
    tr.append(game3);
    var game2 = document.createElement('td');
    game2.innerHTML = sortedTeamsArray[i].statistics.last2;
    tr.append(game2);
    var game1 = document.createElement('td');
    game1.innerHTML = sortedTeamsArray[i].statistics.last1;
    tr.append(game1);


  }


}

//DisplayTable();
function DestroyTable() {
  myTable.remove();
  var restart = document.createElement('table');
  restart.id = 'theTable';
  restart.classList.add("leagueTable");
  document.getElementById('leagueTable').append(restart);
  alert('destroyed')
  Sort();
}



///// sample///
var newTemp = [];
function Sort(){
	for (i=0;i<sortedTeamsArray.length;i++){
		max = sortedTeamsArray[i].statistics.points;
		
		for (j=i;j<sortedTeamsArray.length;j++){
			if(sortedTeamsArray[j].statistics.points>=max){
			max = sortedTeamsArray[j].statistics.points;
			index=j;
			
		}
			
		}
		temp =sortedTeamsArray[i] ;
		sortedTeamsArray[i] = sortedTeamsArray[index]
		sortedTeamsArray[index] = temp
		
		
		


	
		
}


}

Sort();


/*

function SecondSortPart1(){
	alert ('ron')
	for (i=0; i<sortedTeamsArray.length-1; i++){
		if(sortedTeamsArray[i].statistics.Gd == sortedTeamsArray[i+1].statistics.Gd){
			if(newTemp[newTemp.length-1] != i){
				newTemp.push(i);
				newTemp.push(i+1);;
			}else{
				
				
				newTemp.push(i+1);
			}
			
			
		}
		
		
	}
	console.log(newTemp)
  newTemp=[]
}
//console.log(newTemp)
//SecondSortPart1();

function SecondSortPart2 (){
	
	for (i=0;i<newTemp.length;i++){
		
console.log(ron[newTemp[i]])
if(ron[newTemp[i]].ff >0){
	max = ron[newTemp[i]].ff
}
	
		
}
console.log(max)
}
//SecondSortPart2();
*/