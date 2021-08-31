function MoveSlide(sign){
    var len = myTeam.players.length;
    if(sign=='+' ){
        if(ron<len-1){
            ron++;
        }else{
            ron = 0;
        }
        
    }else if(sign=='-'){
        if(ron>0){
            ron--;
        }else{
            ron = len-1;
        }
    }
    
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
   var avgTech = document.getElementById('avg tech');
   var avgMental = document.getElementById('avg mental');
   var avgPhysical = document.getElementById('avg Physical');
   var totalScore = document.getElementById('total score');
   var playerImg = document.getElementById('playerImg-card');
   var fieldImg = document.getElementById('field-img-card');

    name.innerHTML = myTeam.players[ron].name;
    number.innerHTML = myTeam.players[ron].number;
    position.innerHTML = myTeam.players[ron].position;
    corners.innerHTML = myTeam.players[ron].technical.corners;
    aggression.innerHTML = myTeam.players[ron].mental.Aggression;
    acceleration.innerHTML = myTeam.players[ron].physical.Acceleration;
    crossing.innerHTML = myTeam.players[ron].technical.crossing;
    anticipation.innerHTML = myTeam.players[ron].mental.Anticipation;
    agillity.innerHTML = myTeam.players[ron].physical.Agillity;
    dribbling.innerHTML = myTeam.players[ron].technical.dribbling;
    bravery.innerHTML = myTeam.players[ron].mental.Bravery;
    ballance.innerHTML = myTeam.players[ron].physical.Ballance;
    finishing.innerHTML = myTeam.players[ron].technical.dribbling;
    composure.innerHTML = myTeam.players[ron].mental.Composure;
    jumping.innerHTML = myTeam.players[ron].physical.Jumping;
    freeKicks.innerHTML = myTeam.players[ron].technical.FreeKick;
    concentration.innerHTML =myTeam.players[ron].mental.Concentration;
    naturalFithness.innerHTML = myTeam.players[ron].physical.NaturalFithness;
    heading.innerHTML = myTeam.players[ron].technical.Heading;
    determination.innerHTML = myTeam.players[ron].mental.Determination;
    pace.innerHTML = myTeam.players[ron].physical.Pace;
    longshots.innerHTML = myTeam.players[ron].technical.Longshots;
    flair.innerHTML = myTeam.players[ron].mental.Flair;
    stamina.innerHTML = myTeam.players[ron].physical.Stamina;
    marking.innerHTML = myTeam.players[ron].technical.Marking;
    leadeship.innerHTML = myTeam.players[ron].mental.Leadeship;
    passing.innerHTML = myTeam.players[ron].technical.Passing;
    offtheball.innerHTML = myTeam.players[ron].mental.Offtheball;
    penelty.innerHTML = myTeam.players[ron].technical.Penelty;
    positioning.innerHTML = myTeam.players[ron].mental.Positioning;
    tackeling.innerHTML = myTeam.players[ron].technical.Tackeling;
    teamWork.innerHTML = myTeam.players[ron].mental.TeamWork;
    technique.innerHTML = myTeam.players[ron].technical.Technique;
    longThrows.innerHTML = myTeam.players[ron].technical.longThrows;
    vision.innerHTML = myTeam.players[ron].mental.Vision;
    workRate.innerHTML = myTeam.players[ron].mental.WorkRate;
    avgTech.innerHTML = myTeam.players[ron].technical.avgTechn;
    avgMental.innerHTML = myTeam.players[ron].mental.avgmental;
    avgPhysical.innerHTML = myTeam.players[ron].physical.avgPhysical;
    totalScore.innerHTML = myTeam.players[ron].total +' / 100';
    playerImg.src = myTeam.players[ron].img;
    fieldImg.src = myTeam.players[ron].positionImg;
}