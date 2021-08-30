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

//להראות ולהעלים מסך
function SetPlayersScreen(className){
  
   
    for (let i = 0; i < screens.length; i++) {
        document.querySelector(screens[i]).style.display = 'none';
        
    }

   document.querySelector(className).style.display = 'block';
   ShowPlayers();
   
}

function ShowHide(className,state){
    document.querySelector(className).style.visibility = state;
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
    elementImg.item = myTeam.players[index];
    elementImg.addEventListener('click',Test);
}

function Test(e){
    console.log(e.target.item.name);
    document.querySelector('.player-profile').style.visibility = 'visible';
    var name = document.getElementById('player-Profile-name');
    var number = document.getElementById('player-Profile-number');
    var position = document.getElementById('player-Profile-position');
    var corners = document.getElementById('Corners');
    var aggression = document.getElementById('Aggression');
    var acceleration = document.getElementById('Acceleration');
    var crossing = document.getElementById('Crossing');
    var anticipation = document.getElementById('Anticipation');
    var agillity = document.getElementById('Agillity');
    var dribbling = document.getElementById('Dribbling');
    var bravery = document.getElementById('Bravery');
    var ballance = document.getElementById('Ballance');
    var finishing = document.getElementById('Finishing');
    var composure = document.getElementById('Composure');
    var jumping = document.getElementById('Jumping');
    var freeKicks = document.getElementById('Free Kicks');
    var concentration = document.getElementById('Concentration');
    var naturalFithness = document.getElementById('Natural Fithness');
    var heading = document.getElementById('Heading');
    var determination = document.getElementById('Determination');
    var pace = document.getElementById('Pace');
    var longshots = document.getElementById('Long shots');
    var flair = document.getElementById('Flair');
    var stamina = document.getElementById('Stamina');
    var marking = document.getElementById('Marking');
    var leadeship = document.getElementById('Leadeship');
    var passing = document.getElementById('Passing');
    var offtheball = document.getElementById('Off the ball');
    var penelty = document.getElementById('Penelty');
    var positioning = document.getElementById('Positioning');
    var tackeling = document.getElementById('Tackeling');
    var teamWork = document.getElementById('TeamWork');
    var technique = document.getElementById('Technique');
    var vision = document.getElementById('Vision');
    var longThrows = document.getElementById('Long Throws');
    var workRate = document.getElementById('Work Rate');
   

    name.innerHTML = e.target.item.name;
    number.innerHTML = e.target.item.number;
    position.innerHTML = e.target.item.position;
    corners.innerHTML = e.target.item.technical.corners;
    aggression.innerHTML = e.target.item.mental.Aggression;
    acceleration.innerHTML = e.target.item.physical.Acceleration;
    crossing.innerHTML = e.target.item.technical.crossing;
    anticipation.innerHTML = e.target.item.mental.Anticipation;
    agillity.innerHTML = e.target.item.physical.Agillity;
    dribbling.innerHTML = e.target.item.technical.dribbling;
    bravery.innerHTML = e.target.item.mental.Bravery;
    ballance.innerHTML = e.target.item.physical.Ballance;
    finishing.innerHTML = e.target.item.technical.dribbling;
    composure.innerHTML = e.target.item.mental.Composure;
    jumping.innerHTML = e.target.item.physical.Jumping;
    freeKicks.innerHTML = e.target.item.technical.FreeKick;
    concentration.innerHTML = e.target.item.mental.Concentration;
    naturalFithness.innerHTML = e.target.item.physical.NaturalFithness;
    heading.innerHTML = e.target.item.technical.Heading;
    determination.innerHTML = e.target.item.mental.Determination;
    pace.innerHTML = e.target.item.physical.Pace;
    longshots.innerHTML = e.target.item.technical.Longshots;
    flair.innerHTML = e.target.item.mental.Flair;
    stamina.innerHTML = e.target.item.physical.Stamina;
    marking.innerHTML = e.target.item.technical.Marking;
    leadeship.innerHTML = e.target.item.mental.Leadeship;
    passing.innerHTML = e.target.item.technical.Passing;
    offtheball.innerHTML = e.target.item.mental.Offtheball;
    penelty.innerHTML = e.target.item.technical.Penelty;
    positioning.innerHTML = e.target.item.mental.Positioning;
    tackeling.innerHTML = e.target.item.technical.Tackeling;
    teamWork.innerHTML = e.target.item.mental.TeamWork;
    technique.innerHTML = e.target.item.technical.Technique;
    longThrows.innerHTML = e.target.item.technical.longThrows;
    vision.innerHTML = e.target.item.mental.Vision;
    workRate.innerHTML = e.target.item.mental.WorkRate;
}
