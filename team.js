function Team(name,players,stadium,money,image,attack,defence,popularity,stadiumCapacity,avgAtended,financialState,traningFacilities,staff,statistics){
    {
        this.name = name;
        this.players = players;
        this.stadium = stadium;
        this.money = money;
        this.image = image;
        this.attack = attack;
        this.defence = defence;
        this.popularity = popularity;
        this.stadiumCapacity = stadiumCapacity;
        this.avgAtended = avgAtended;
        this.financialState = financialState;
        this.traningFacilities = traningFacilities;
        this.staff = staff;
        this.statistics = statistics;
        this.GetMoney = function(){
            return this.money;
        }
        this.Increasr = function(){
            this.money+=500;
        }
        this.ShowPlayers = function(){
            for (let index = 0; index < players.length; index++) {
                console.log(this.players[index]);
                
            }
        }

        this.games = function(){
            this.statistics.played++;
        }
    }
    
 
    
}

var stats0 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats1 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats2 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats3 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats4 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats5 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats6 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats7 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats8 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats9 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats10 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats11 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats12 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}
var stats13 = {
    played:0,
    wins: 0,
    draw: 0,
    lose: 0,
    Gf: 0,
    Ga: 0,
    Gd: 0,
    points: 0,
    last5:'<i class="far fa-circle"></i>',
    last4:'<i class="far fa-circle"></i>',
    last3 : '<i class="far fa-circle"></i>',
    last2 : '<i class="far fa-circle"></i>',
    last1: '<i class="far fa-circle"></i>'
}


financial = ['at risk','poor','fair','good','rich']
training = ['shit hole','poor','avrage','good','exelent','world class']
staff = ['avrage']
var Ashdod = new Team('F.C Ashdod',ashdodPlayers,'Yud-Alef Stadium',1500,'images/ashdod.png',75,75,35,7800,4500,financial[1],training[0],staff[0],stats0);
var MHaifa = new Team('Maccabi Haifa',haifaPlayers,'sami-ofer',1500,'images/M.Haifa.png',90,75,88,30780,24000,financial[4],training[5],staff[0],stats1);
var MtelAviv = new Team('Maccabi Tel-Aviv',mTelAvivPlayers,'bloomfield',1500,'images/M tel-aviv.png',85,92,89,29400,25000,financial[4],training[5],staff[0],stats2);
var beitarJerusalem = new Team('Beitar Jerusalem',bitarJerusalemPlayers,'Teddy Stadium',1500,'images/Beitar jerusalem.png',80,78,82,34000,18000,financial[4],training[5],staff[0],stats3);
var bneiShacnin = new Team('Beni Sakhnin',shkninPlayers,'Doha Stadium',1500,'images/bnei-Sakhnin.png',68,72,32,8500,6300,financial[1],training[1],staff[0],stats4);
var beerSheva = new Team('Hapoel beer-sheva',beerShevaPlayers,'Terner Stadium',1500,'images/H beer-sheva.png',80,80,62,16126,14500,financial[4],training[4],staff[0],stats5);
var hapoelJerusalem = new Team('Hapoel Jerusalem',hapoelJerusalemPlayers,'Teddy Stadium',1500,'images/hapoel-jerusalem.png',50,60,45,34000,3500,financial[2],training[5],staff[0],stats6);
var kiryatShmona = new Team('Kiryat Shmona',kShmonaPlayers,'Kiryat Shmona Stadium',1500,'images/kiryat-shmona.png',74,80,50,5300,4000,financial[3],training[3],staff[0],stats7);
var hapoelHaifa = new Team('Hapoel Haifa',hapoelHaifaPlayers,'sami-ofer',1500,'images/HapoelHaifa.png',68,75,57,30780,6500,financial[3],training[5],staff[0],stats8);
var maccabiNetanya = new Team('Maccabi Netanya',maccabiNetanyaPlayers,'Netanya Stadium',1500,'images/maccabi-natanya.png',78,65,66,13610,6500,financial[4],training[4],staff[0],stats9);
var mPetachTikva = new Team('M. Petach-Tikva',mPetachTikvaPlayers,'Petach-Tikva Stadium',1500,'images/maccabi-pethc tikva.png',68,65,25,11500,250,financial[2],training[2],staff[0],stats10);
var hapoelNofHaGalil = new Team('Hapoel Nof HaGalil',hapoelNofHaGalilPlayers,'Grin Stadium',1500,'images/nof-hagalil.png',45,57,15,5200,2800,financial[1],training[2],staff[0],stats11);
var hapoelHadera = new Team('Hapoel Hadera',hapoelHaderaPlayers,'Netanya Stadium',1500,'images/hadera.png',40,50,22,13610,2400,financial[3],training[4],staff[0],stats12);
var hapoelTelAviv = new Team('Hapoel Tel-Aviv',hapoelTelAvivPlayers,'bloomfield',1500,'images/hapoel tel-aviv.png',76,73,85,29400,17000,financial[4],training[4],staff[0],stats13);


var theTeamsArray = [Ashdod,MHaifa,MtelAviv,beitarJerusalem,bneiShacnin,beerSheva,hapoelJerusalem,kiryatShmona,hapoelHaifa,maccabiNetanya,mPetachTikva,hapoelNofHaGalil,hapoelHadera,hapoelTelAviv]
var sortedTeamsArray = [Ashdod,MHaifa,MtelAviv,beitarJerusalem,bneiShacnin,beerSheva,hapoelJerusalem,kiryatShmona,hapoelHaifa,maccabiNetanya,mPetachTikva,hapoelNofHaGalil,hapoelHadera,hapoelTelAviv];