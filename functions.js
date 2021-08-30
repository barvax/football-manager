var screens = ['.section-main','.section-team','.section-staff']
var menu = ['team','staff','finance','leage-table','home']
function setMenu(){
    for (let index = 0; index < menu.length; index++) {
       document.getElementById(menu[index]).addEventListener('click',PlaySound);
        
    }
}
setMenu();
function PlaySound(){
    console.log('i will play sound');
}
function SetPlayersScreen(className){
  
   
    for (let i = 0; i < screens.length; i++) {
        document.querySelector(screens[i]).style.display = 'none';
        
    }

   document.querySelector(className).style.display = 'block';
   ShowPlayers();
   
}
var target ;
var hasStrated =false;
function ShowPlayers(){
   if(!hasStrated){
    for (let index = 0; index < myTeam.players.length; index++) {
        console.log(myTeam.players[index].position)
        if(myTeam.players[index].position=='goal-keeper'){
            target= document.getElementById('team-goalKeeper');
            insertPlayers(index);
        }else if(myTeam.players[index].position=='back'){
         target= document.getElementById('team-defence');
         insertPlayers(index);
        }else if(myTeam.players[index].position=='center'){
         target= document.getElementById('team-middle');
         insertPlayers(index);
 
        }else if(myTeam.players[index].position=='forward'){
         target= document.getElementById('team-attack');
         insertPlayers(index);
 
        }
      
     }
    
   }
   
   hasStrated = true;
   

   
}
function insertPlayers(index){
    var elementLi = document.createElement('li');
    var elementImg = document.createElement('img');
    elementImg.src = 'images/male-figure-man-boy-profile.jpg.png';
    var elementNum = document.createElement('h5');
    var elementName = document.createElement('h5');
    elementImg.classList.add("playerImgrCircle");
    elementName.innerHTML = myTeam.players[index].name;
    elementNum.innerHTML = myTeam.players[index].number;
    target.append(elementLi);
    elementLi.append(elementImg);
    elementLi.append(elementNum);
    elementLi.append(elementName);
}
