
function setMainScreen(){
    document.getElementById('my-team-name').innerHTML = myTeam.name;
    document.getElementById('my-team-img').src = myTeam.image;
    document.getElementById('stadium-name').innerHTML = myTeam.stadium;
    document.getElementById('stadium-capacity').innerHTML = myTeam.stadiumCapacity;
    document.getElementById('avg-atended').innerHTML = myTeam.avgAtended;
    document.getElementById('financial').innerHTML = myTeam.financialState;
    document.getElementById('Traning').innerHTML = myTeam.traningFacilities;
    document.getElementById('staff').innerHTML = myTeam.staff;
    document.getElementById('balance').innerHTML = myTeam.money;
console.log(myTeam.name)
}



