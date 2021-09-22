document.addEventListener('keypress', function (event) {
    if (event.key === 'q') {
        document.getElementById('pickTeamMain').style.visibility = "hidden";
    }
    if (event.key === 'w') {
        document.getElementById('pickTeamMain').style.visibility = "visible";
    }
    if (event.key === 'e') {
        document.querySelector('.player-profile').style.visibility = 'visible';
    }
})
var bottonPlaceId;

function Test(pos, id) {
    var ron = document.querySelectorAll(".example");
    bottonPlaceId = id;

    if (pos == 'st') {
     
        var stList = document.querySelectorAll(".example-st");

        for (i = 0; i < ron.length; i++) {
            ron[i].style.display = 'none'


        }
        for (let j = 0; j < stList.length; j++) {

            stList[j].style.display = 'block';

        }
    }else if(pos == 'mid'){
       
        var midList = document.querySelectorAll(".example-mid");
        for (i = 0; i < ron.length; i++) {
            ron[i].style.display = 'none'


        }
        for (let j = 0; j < midList.length; j++) {

            midList[j].style.display = 'block';

        }

    }else if(pos == 'def'){
       
        var defList = document.querySelectorAll(".example-def");
        for (i = 0; i < ron.length; i++) {
            ron[i].style.display = 'none'


        }
        for (let j = 0; j < defList.length; j++) {

            defList[j].style.display = 'block';

        }

    }else if(pos == 'gk'){
      
        var gkList = document.querySelectorAll(".example-gk");
        for (i = 0; i < ron.length; i++) {
            ron[i].style.display = 'none'


        }
        for (let j = 0; j < gkList.length; j++) {

            gkList[j].style.display = 'block';

        }

    }
}


function SetPlayersOnMatchScreen() {


    var root = document.getElementById('targetidTeamPlayers');

    var MyGK = document.createElement('h2');
    root.append(MyGK);
    MyGK.innerHTML = "GK";

    var def = document.createElement('h2');
    root.append(def);
    def.innerHTML = "def";

    var mid = document.createElement('h2');
    root.append(mid);
    mid.innerHTML = "mid";

    var st = document.createElement('h2');
    root.append(st);
    st.innerHTML = "st";



    for (i = 0; i < NumOfPlayerInTeam[teamIndex]; i++) {
        if (myTeam.players[i].position == 'goal-keeper') {
            var div = document.createElement('div')
            div.classList.add('div22');
            MyGK.append(div);
            var scoreGk  =document.createElement('h6');
            scoreGk.innerHTML = myTeam.players[i].newAtr[8]+" / " + myTeam.players[i].newAtr[6] ;
            scoreGk.classList.add('example-gk');
            scoreGk.classList.add('example');
            scoreGk.classList.add('data');
          
            div.append(scoreGk)
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            div.append(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['gk' + i];
            line.index = [i];
            line.classList.add('example');
            line.classList.add('example-gk');
            
            
         
           

        } else if (myTeam.players[i].position == 'back') {
            var div = document.createElement('div')
            div.classList.add('div22');
            def.append(div)
            var scoreDef  =document.createElement('h6');
            scoreDef.innerHTML = myTeam.players[i].newAtr[8]+" / " + myTeam.players[i].newAtr[6] ;
            scoreDef.classList.add('example-def');
            scoreDef.classList.add('example');
            scoreDef.classList.add('data');
            div.appendChild(scoreDef)
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            div.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['def' + i];
            line.index = [i];
            line.classList.add('example');
            line.classList.add('example-def');
          

        } else if (myTeam.players[i].position == 'center') {
            var div = document.createElement('div')
            div.classList.add('div22');
            mid.append(div)
            var scoreMid  =document.createElement('h6');
            scoreMid.innerHTML =  myTeam.players[i].newAtr[8]+" / " + myTeam.players[i].newAtr[6] ;
            scoreMid.classList.add('example-mid');
            scoreMid.classList.add('data')
            scoreMid.classList.add('example');
            div.appendChild(scoreMid)
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            div.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['mid' + i];
            line.index = [i];
            line.classList.add('example');
            line.classList.add('example-mid');
           

        } else if (myTeam.players[i].position == 'forward') {
            var div = document.createElement('div')
            div.classList.add('div22');
            st.append(div)
            var scoreSt  =document.createElement('h6');
            scoreSt.innerHTML = myTeam.players[i].newAtr[8]+" / " + myTeam.players[i].newAtr[6] ;
            scoreSt.classList.add('example-st');
            scoreSt.classList.add('example');
            scoreSt.classList.add('data')
            div.appendChild(scoreSt)
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            div.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['st' + i];
            line.index = [i];
            line.classList.add('example');
            line.classList.add('example-st');
          

        }
    }

}

function updatethePlayerlist(){
  var ron =   document.querySelectorAll('.data');
  for (let i = 0; i < ron.length; i++) {
    // console.log(ron[i])
     ron[i].innerHTML = myTeam.players[i].newAtr[8]+" / " + myTeam.players[i].newAtr[6] ;
      
  }
}
function MyNewFunction(e) {
    if(bottonPlaceId!=null){
        console.log(myTeam.players[(e.target.index)].name)
        var temp;
        //  var ron = document.querySelectorAll(".example");
        if (myTeam.startingLineup.length == 0) {
    
            myTeam.startingLineup.push(myTeam.players[(e.target.index)]);
            myTeam.players[(e.target.index)].newAtr[9] = true;
            document.getElementById(bottonPlaceId).innerHTML = myTeam.players[(e.target.index)].name;
    
        } else {
            if (document.getElementById(bottonPlaceId).innerHTML == "") {
    
                for (let i = 0; i < myTeam.startingLineup.length; i++) {
                    if (myTeam.startingLineup[i] == myTeam.players[e.target.index]) {
                       
                        return;
    
                    }
                }
                myTeam.startingLineup.push(myTeam.players[(e.target.index)]);
                myTeam.players[(e.target.index)].newAtr[9] = true;
                document.getElementById(bottonPlaceId).innerHTML = myTeam.players[(e.target.index)].name;
            } else {
                
                var name = document.getElementById(bottonPlaceId).innerHTML;
                for (let i = 0; i < myTeam.startingLineup.length; i++) {
                    if (myTeam.startingLineup[i].name == myTeam.players[(e.target.index)].name) {
                        alert(myTeam.startingLineup[i].name)
                        return;
    
    
                    }
    
                }
               
                for (let i = 0; i < myTeam.startingLineup.length; i++) {
                    if (myTeam.startingLineup[i].name == name) {
                        temp = myTeam.startingLineup[i];///the player to remove
                        myTeam.startingLineup[i].newAtr[9] = false;
                        myTeam.startingLineup[i] = myTeam.startingLineup[myTeam.startingLineup.length - 1];
                        myTeam.startingLineup[myTeam.startingLineup.length - 1] = temp;
                        myTeam.startingLineup.pop();
                        myTeam.startingLineup.push(myTeam.players[(e.target.index)]);//the player to add
                        myTeam.players[(e.target.index)].newAtr[9] = true;
                        document.getElementById(bottonPlaceId).innerHTML = myTeam.players[(e.target.index)].name;
                        console.log(myTeam.startingLineup)
                        updateTheTeamAttack()
                          updateTeamBar()
                        return;
    
    
                    }
                }
                
                
     
            }
    
    
        }
    
    
        console.log(myTeam.startingLineup)
      
        

    }
    
   
  
}

function updateTeamBar(){
    var attack = document.getElementById('team-attack-players');
    var defence = document.getElementById('team-defence-players');
  if(myTeam.startingLineup.length==11){
  
    attack.innerHTML = myTeam.attack+'%';
    document.querySelector('.skills-atk').style.width = myTeam.attack+'%';
    defence.innerHTML = myTeam.defence+'%';
    document.querySelector('.skills-def').style.width = myTeam.defence+'%';
   
  }else{
    attack.innerHTML = '';
    document.querySelector('.skills-atk').style.width = 0+'%';
    defence.innerHTML = '';
    document.querySelector('.skills-def').style.width = 0+'%';
  }
    
}

function updateTheTeamAttack(){
   var def = 0;
   var attack = 0;
    for (let i = 0; i < myTeam.startingLineup.length; i++) {
       
        if(myTeam.startingLineup[i].shortPos=='gk'||myTeam.startingLineup[i].shortPos=='def'||myTeam.startingLineup[i].shortPos=='mid'){
          //  console.log(myTeam.startingLineup[i].name+" def")
          def+=(myTeam.startingLineup[i].newAtr[8])
        }
        if(myTeam.startingLineup[i].shortPos=='mid'||myTeam.startingLineup[i].shortPos=='st'){
           // console.log(myTeam.startingLineup[i].name+" attack")
           attack+=myTeam.startingLineup[i].newAtr[8]
        }
    }
    var num1 = def/9
    var num2 = attack/6
    myTeam.defence =num1.toFixed(1)
    myTeam.attack =num2.toFixed(1)
   
    
}
//SetPlayersOnMatchScreen();  קורא לזה ב slideShow


