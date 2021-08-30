function Team(name,players,stadium,money,image,attack,defence,popularity,stadiumCapacity,avgAtended,financialState,traningFacilities,staff){
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
    }
    
 
    
}
financial = ['at risk','poor','fair','good','rich']
training = ['shit hole','poor','avrage','good','exelent','world class']
staff = ['avrage']
var Ashdod = new Team('F.C Ashdod','none','Yud-Alef Stadium',1500,'images/ashdod.png',75,75,35,7800,4500,financial[1],training[0],staff[0]);
var MHaifa = new Team('Maccabi Haifa',haifaPlayers,'sami-ofer',1500,'images/M.Haifa.png',90,75,88,30780,24000,financial[4],training[5],staff[0]);
var MtelAviv = new Team('Maccabi Tel-Aviv','none','bloomfield',1500,'images/M tel-aviv.png',85,92,89,29400,25000,financial[4],training[5],staff[0]);
var beitarJerusalem = new Team('Beitar Jerusalem','none','Teddy Stadium',1500,'images/Beitar jerusalem.png',80,78,82,34000,18000,financial[4],training[5],staff[0]);
var bneiShacnin = new Team('Beni Sakhnin','none','Doha Stadium',1500,'images/bnei-Sakhnin.png',68,72,32,8500,6300,financial[1],training[1],staff[0]);
var beerSheva = new Team('Hapoel beer-sheva','none','Terner Stadium',1500,'images/H beer-sheva.png',80,80,62,16126,14500,financial[4],training[4],staff[0]);
var hapoelJerusalem = new Team('Hapoel Jerusalem','none','Teddy Stadium',1500,'images/hapoel-jerusalem.png',50,60,45,34000,3500,financial[2],training[5],staff[0]);
var kiryatShmona = new Team('Kiryat Shmona','none','Kiryat Shmona Stadium',1500,'images/kiryat-shmona.png',74,80,50,5300,4000,financial[3],training[3],staff[0]);
var hapoelHaifa = new Team('Hapoel Haifa','none','sami-ofer',1500,'images/HapoelHaifa.png',68,75,57,30780,6500,financial[3],training[5],staff[0]);
var maccabiNetanya = new Team('Maccabi Netanya','none','Netanya Stadium',1500,'images/maccabi-natanya.png',78,65,66,13610,6500,financial[4],training[4],staff[0]);
var mPetachTikva = new Team('M. Petach-Tikva','none','Petach-Tikva Stadium',1500,'images/maccabi-pethc tikva.png',68,65,25,11500,250,financial[2],training[2],staff[0]);
var hapoelNofHaGalil = new Team('Hapoel Nof HaGalil','none','Grin Stadium',1500,'images/nof-hagalil.png',45,57,15,5200,2800,financial[1],training[2],staff[0]);
var hapoelHadera = new Team('Hapoel Hadera','none','Netanya Stadium',1500,'images/hadera.png',40,50,22,13610,2400,financial[3],training[4],staff[0]);
var hapoelTelAviv = new Team('Hapoel Tel-Aviv','none','bloomfield',1500,'images/hapoel tel-aviv.png',76,73,85,29400,17000,financial[4],training[4],staff[0]);