var teamIndex = 0;

var teams = [MHaifa,Ashdod, MtelAviv,beitarJerusalem,bneiShacnin,beerSheva,hapoelJerusalem,kiryatShmona,hapoelHaifa,maccabiNetanya,mPetachTikva,hapoelNofHaGalil,hapoelHadera,hapoelTelAviv]
var myTeam = teams[teamIndex];
function pickTeam(oparator) {
    if (oparator == '+') {
        if(teamIndex<teams.length-1){
            teamIndex += 1;
        }else{
            teamIndex=0;
        }
       
    } else if (oparator == '-') {
        if(teamIndex>0){
            teamIndex -= 1;
        }else{
            teamIndex = 13;
        }
       
    }

    var image = document.getElementById('team-image');
    var name = document.getElementById('team-name');
    var attack = document.getElementById('attack');
    var defence = document.getElementById('defence');
    var popularity = document.getElementById('popularity');

    image.src = teams[teamIndex].image;
    name.innerHTML = teams[teamIndex].name;
    attack.innerHTML = teams[teamIndex].attack+'%';
    document.querySelector('.attack').style.width = teams[teamIndex].attack+'%';
    defence.innerHTML = teams[teamIndex].defence+'%';
    document.querySelector('.defence').style.width = teams[teamIndex].defence+'%';
    popularity.innerHTML = teams[teamIndex].popularity+'%';
    document.querySelector('.popularity').style.width = teams[teamIndex].popularity+'%';

}

function StartGame(){
myTeam = teams[teamIndex];
document.querySelector('.slideshow').style.display = 'none';
document.querySelector('.left-menu-panel').style.visibility = 'visible';
document.querySelector('.section-main').style.display = 'block';

setMainScreen();
}
