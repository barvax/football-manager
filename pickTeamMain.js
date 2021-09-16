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
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            MyGK.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['gk' + i];
            line.index = [i];
            line.classList.add('example');

        } else if (myTeam.players[i].position == 'back') {
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            def.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['def' + i];
            line.index = [i];
            line.classList.add('example');

        } else if (myTeam.players[i].position == 'center') {
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            mid.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['mid' + i];
            line.index = [i];
            line.classList.add('example');

        } else if (myTeam.players[i].position == 'forward') {
            var line = document.createElement('h5');
            line.innerHTML = myTeam.players[i].name;
            st.appendChild(line);
            line.addEventListener("click", MyNewFunction)
            line.id = ['st' + i];
            line.index = [i];
            line.classList.add('example');
            line.classList.add('example-st');

        }
    }

}


function MyNewFunction(e) {
    if(bottonPlaceId!=null){
        console.log(myTeam.players[(e.target.index)].name)
        var temp;
        //  var ron = document.querySelectorAll(".example");
        if (myTeam.startingLineup.length == 0) {
    
            myTeam.startingLineup.push(myTeam.players[(e.target.index)]);
            document.getElementById(bottonPlaceId).innerHTML = myTeam.players[(e.target.index)].name;
    
        } else {
            if (document.getElementById(bottonPlaceId).innerHTML == "") {
    
                for (let i = 0; i < myTeam.startingLineup.length; i++) {
                    if (myTeam.startingLineup[i] == myTeam.players[e.target.index]) {
                       
                        return;
    
                    }
                }
                myTeam.startingLineup.push(myTeam.players[(e.target.index)]);
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
                        temp = myTeam.startingLineup[i];
                        myTeam.startingLineup[i] = myTeam.startingLineup[myTeam.startingLineup.length - 1];
                        myTeam.startingLineup[myTeam.startingLineup.length - 1] = temp;
                        myTeam.startingLineup.pop();
                        myTeam.startingLineup.push(myTeam.players[(e.target.index)]);
                        document.getElementById(bottonPlaceId).innerHTML = myTeam.players[(e.target.index)].name;
                        console.log(myTeam.startingLineup)
                        return;
    
    
                    }
                }
                
                
     
            }
    
    
        }
    
    
        console.log(myTeam.startingLineup)

    }
   
  
}
SetPlayersOnMatchScreen();


