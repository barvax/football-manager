function Player(name,number,position,technical,mental,physical,total,img,positionImg){
    {
        this.name = name;
        this.number = number;
        this.position = position;
        this.mental = mental;
        this.technical = technical;
        this.physical = physical;
        this.total = total;
        this.img = img;
        this.positionImg = positionImg;
       
        this.GetPosition = function(){
            return this.position;
        }
    }
    
 
    
}
var posImg=['images/field/goalKeeper.png','images/field/left-defence.png','images/field/right-defence.png','images/field/left-defender.png','images/field/right-defender.png','images/field/middleBack.png','images/field/center.png','images/field/middle-right.png','images/field/middle-left.png','images/field/attack-middle.png','images/field/forward.png']
var totalPlayerScore = 99;
function RandomNum(){
    return Math.floor(Math.random() * 20)+1;
}
var technical={
    corners: RandomNum(),
    crossing: RandomNum(),
    dribbling: RandomNum(),
    finishing:RandomNum(),
    FreeKick:RandomNum(),
    Heading:RandomNum(),
    Longshots:RandomNum(),
    longThrows: RandomNum(),
    Marking: RandomNum(),
    Passing :RandomNum(),
    Penelty: RandomNum(),
    Tackeling:RandomNum(),
    Technique:RandomNum(),
    avgTechn: 0

}

var mental = {
    Aggression: RandomNum(),
    Anticipation: RandomNum(),
    Bravery:RandomNum(),
    Composure:RandomNum(),
    Concentration:RandomNum(),
    Determination:RandomNum(),
    Flair:RandomNum(),
    Leadeship:RandomNum(),
    Offtheball:RandomNum(),
    Positioning:RandomNum(),
    TeamWork: RandomNum(),
    Vision:RandomNum(),
    WorkRate:RandomNum(),
    avgmental: 0
}

var physical = {
    Acceleration:RandomNum(),
    Agillity:RandomNum(),
    Ballance: RandomNum(),
    Jumping:RandomNum(),
    NaturalFithness :RandomNum(),
    Pace:RandomNum(),
    Stamina:RandomNum(),
    avgPhysical: 0

}

function NewRandom(){
    technical={
        corners: RandomNum(),
        crossing: RandomNum(),
        dribbling: RandomNum(),
        finishing:RandomNum(),
        FreeKick:RandomNum(),
        Heading:RandomNum(),
        Longshots:RandomNum(),
        longThrows: RandomNum(),
        Marking: RandomNum(),
        Passing :RandomNum(),
        Penelty: RandomNum(),
        Tackeling:RandomNum(),
        Technique:RandomNum(),
        avgTechn: 0
        
    }
    mental = {
        Aggression: RandomNum(),
        Anticipation: RandomNum(),
        Bravery:RandomNum(),
        Composure:RandomNum(),
        Concentration:RandomNum(),
        Determination:RandomNum(),
        Flair:RandomNum(),
        Leadeship:RandomNum(),
        Offtheball:RandomNum(),
        Positioning:RandomNum(),
        TeamWork: RandomNum(),
        Vision:RandomNum(),
        WorkRate:RandomNum(),
        avgmental: 0
    }
    physical = {
        Acceleration:RandomNum(),
        Agillity:RandomNum(),
        Ballance: RandomNum(),
        Jumping:RandomNum(),
        NaturalFithness :RandomNum(),
        Pace:RandomNum(),
        Stamina:RandomNum(),
        avgPhysical: 0
    
    }
   
}

function AverageTechnical(){
    var sumtechnical = technical.corners+technical.crossing+technical.dribbling+technical.finishing+technical.FreeKick+technical.Heading+technical.longThrows+technical.Longshots+technical.Marking+technical.Passing+technical.Penelty+technical.Technique+technical.Tackeling;
    var avgTechnical = Math.floor(sumtechnical/13);
    technical.avgTechn = avgTechnical;
   
    return avgTechnical;
}
function AverageMental(){
    var sumMental = mental.Aggression+mental.Anticipation+mental.Bravery+mental.Composure+mental.Concentration+mental.Determination+mental.Flair+mental.Leadeship+mental.Offtheball+mental.Positioning+mental.TeamWork+mental.Vision+mental.WorkRate;
    var avgMental = Math.floor(sumMental/13);
    mental.avgmental = avgMental;
  
   return avgMental;
}
function AveragePhysical(){
    var sumPhysical = physical.Acceleration+physical.Agillity+physical.Ballance+physical.Jumping+physical.NaturalFithness+physical.Pace+physical.Stamina;
    var avgPhysicl = Math.floor(sumPhysical/8);
    physical.avgPhysical = avgPhysicl;
    return avgPhysicl;
  
}
function TotalScore(){
var sum  = AverageTechnical()+AverageMental()+AveragePhysical();
var total =Math.floor(sum/60*100);
totalPlayerScore = total;
//console.log('totalPlayerScore: '+totalPlayerScore);

}
function AddExtars(){
    AverageTechnical();
    AverageMental();
    AveragePhysical();
    TotalScore();
}
AddExtars();

//    'images/male-figure-man-boy-profile.jpg.png'
var position = ['goal-keeper','back','center','forward']
///מכבי חיפה////
var player1 = new Player('גוש כהן','40',position[0],technical,mental,physical,totalPlayerScore,"players/M.haifa/joshCohen.gif",posImg[0]);NewRandom();AddExtars();
var player2 = new Player('איתמר ישראלי','41',position[0],technical,mental,physical,totalPlayerScore,"players/M.haifa/איתמר ישראלי.gif",posImg[0]);NewRandom();AddExtars();
var player3 = new Player('בוגדן פלאניץ','5',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/bogdanPlanich.gif",posImg[1]);NewRandom();AddExtars();
var player4 = new Player('סאן מנחם','12',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/sanMenahem.gif",posImg[1]);NewRandom();AddExtars();
var player5 = new Player('רמי גרשון','5',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144876.gif",posImg[1]);NewRandom();AddExtars();
var player6 = new Player('עפרי ארד','15',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144873.gif",posImg[2]);NewRandom();AddExtars();
var player7= new Player('שון גולדברג','13',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144880.gif",posImg[2]);NewRandom();AddExtars();
var player8= new Player('אורי דהן','6',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144875.gif",posImg[3]);NewRandom();AddExtars();
var player9= new Player('ראיין סטריין','0',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144879.gif",posImg[4]);NewRandom();AddExtars();
var player10 = new Player('רז מאיר','25',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144877.gif",posImg[3]);NewRandom();AddExtars();
var player11 = new Player('רוני לאופר','0',position[1],technical,mental,physical,totalPlayerScore,'images/male-figure-man-boy-profile.jpg.png',posImg[4]);NewRandom();AddExtars();
var player12 = new Player('טאלב טוואטחה','17',position[1],technical,mental,physical,totalPlayerScore,"players/M.haifa/144882.gif",posImg[5]);NewRandom();AddExtars();
var player13 = new Player('חוסה רודריגס','8',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144866.gif",posImg[5]);NewRandom();AddExtars();
var player14 = new Player('יובל אשכנזי','18',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144885.gif",posImg[6]);NewRandom();AddExtars();
var player15 = new Player('מאור לוי','33',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144869.gif",posImg[6]);NewRandom();AddExtars();
var player16 = new Player('נטע לביא','6',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144872.gif",posImg[7]);NewRandom();AddExtars();
var player17 = new Player('צירון שרי','10',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144884.gif",posImg[7]);NewRandom();AddExtars();
var player18 = new Player('עומר אצילי','7',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144874.gif",posImg[8]);NewRandom();AddExtars();
var player19 = new Player('עלי מוחמד','55',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144859.gif",posImg[8]);NewRandom();AddExtars();
var player20 = new Player('אבו פאני','16',position[2],technical,mental,physical,totalPlayerScore,"players/M.haifa/144870.gif",posImg[9]);NewRandom();AddExtars();
var player21 = new Player('גודסווי דוניו','11',position[3],technical,mental,physical,totalPlayerScore,"players/M.haifa/donio.gif",posImg[9]);NewRandom();AddExtars();
var player22 = new Player('בן סהר','24',position[3],technical,mental,physical,totalPlayerScore,"players/M.haifa/benShar.gif",posImg[9]);NewRandom();AddExtars();
var player23 = new Player('דין דוד','99',position[3],technical,mental,physical,totalPlayerScore,"players/M.haifa/dinDavid.gif",posImg[9]);NewRandom();AddExtars();
var haifaPlayers = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20,player21,player22,player23]

///מכבי תל אביב////
var player24 = new Player('דניאל פרץ','0',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player25 = new Player('דניאל טטנבאום','19',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player26 = new Player('אנדראס יניוטיס','17',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player27 = new Player('שירן ייני','21',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player28 = new Player('מאור קנדיל','30',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player29 = new Player('אופיר דוידזאדה','27',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player30= new Player('מתן בלטקסה','20',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player31= new Player('שחר פיבן','31',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player32= new Player('אנדראה זראלדש','28',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player33 = new Player('עידן נחמיאס','4',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player34 = new Player('אנריק סבוריט','41',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player35 = new Player('לואיס הרננדס','17',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player36 = new Player('אייל גולסה','23',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player37 = new Player('דן גלזר','6',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player38 = new Player('עדן קארצב','47',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player39 = new Player('אבי ריקן','22',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player40 = new Player('אורוש ניקוליץ','70',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player41 = new Player('עידו שחר','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player42 = new Player('עדן שמיר','18',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player43 = new Player('אדןארדו גררו','39',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player44 = new Player('מתן חוזז','45',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player45 = new Player('אילון אלמוג','29',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player46 = new Player('אוסמה חלאילה','9',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player47 = new Player('רונן חנציס','38',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player48 = new Player('דן ביטון','10',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player49 = new Player('סטיפה פריצה','18',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var mTelAvivPlayers = [player24,player25,player26,player27,player28,player29,player30,player31,player32,player33,player34,player35,player36,player37,player38,player39,player40,player41,player42,player43,player44,player45,player46,player47,player48,player49]

///קירית שמונה////
var player50 = new Player('דזיוגאס ברטקוס','29',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player51 = new Player('עאיד חבשי','21',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player52 = new Player('זיו מורגן','3',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player53 = new Player('סטפן אקה','26',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player54 = new Player('עלאא געפר','22',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player55 = new Player('אדריאן רוצט','23',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player56= new Player('אריאל שרצקי','74',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player57= new Player('שחר פיבן','31',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player58= new Player('יובל לוין','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player59 = new Player('סמואל בראון','8',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player60 = new Player('איתמר בן שמעון','23',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player61 = new Player('רועי קהת','90',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player62 = new Player('אובידאו ביק','39',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player63 = new Player('נדב נידן','66',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player64 = new Player('מורגן פריאר','79',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player65 = new Player('מוחמד שכר','10',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player66 = new Player('גיא בן לולו','21',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player67 = new Player('יובל אבוחצירה','28',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player68 = new Player('סטפן מילוסביץ','88',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player225 = new Player("רון פרץ","14",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player226 = new Player("נדב זמיר","1",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player227 = new Player("נסים חאיכ","45",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player228 = new Player("איתי בן שבת","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player229 = new Player("ניר דרורי","20",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player230 = new Player("ידין לוגאסי","17",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player231 = new Player("שלו דסטה","12",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();



var kShmonaPlayers = [player50,player51,player52,player53,player54,player55,player56,player57,player58,player59,player60,player61,player62,player63,player64,player65,player66,player67,player68,player225,player226,player227,player228,player229,player230,player231]

///אשדוד////
var player69 = new Player('יואב גרפי','22',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player70 = new Player('רועי משפתי','90',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player71 = new Player('סהר חסון','41',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player72 = new Player('ננד סבקוביץ','66',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player73 = new Player('טימותי אוואני','77',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player74 = new Player('גיל כהן','3',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player75= new Player('אריאל שרצקי','74',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player76= new Player('מונטרי קמאהני','13',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player77= new Player('טום בן זקן','15',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player78 = new Player('שלו הרוש','7',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player79 = new Player('אור אינברום','99',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player80 = new Player('פיראס אבו עקל','22',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player81 = new Player('מוסא בגאיוקו','10',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player83 = new Player('יעקב בריהון','77',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player84 = new Player('זוהר זסנו','16',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player85 = new Player('יוני סיסאי','88',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player86 = new Player('גיא דהן','99',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player87 = new Player('ניר חסון','98',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player88 = new Player('מוחמד כנען','6',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player89 = new Player('בנצי מושל','18',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player90 = new Player('סתיו טוריאל','87',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player91 = new Player('עידן דהן','24',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player92 = new Player('אדגי הייפורד','52',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var ashdodPlayers = [player69,player70,player71,player72,player73,player74,player75,player76,player77,player78,player79,player80,player81,player83,player84,player85,player86,player87,player88,player89,player90,player91,player92]

///ביתר ירושליים
var player93 = new Player('איתמר ניצן','1',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player94 = new Player('נתנאל דלויה','22',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player95 = new Player('עמית כהן','21',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player96 = new Player('דוד חוגה','0',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player97 = new Player('מקס גרצקין','77',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player98 = new Player('סנטיאגו אוקמפוס','30',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player99= new Player('אור זהבי','4',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player100= new Player('אורן ביטון','16',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player101= new Player('אביאל זרגרי','6',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player102 = new Player('מתאוסיניו','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player103 = new Player('רוי דוגה','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player104 = new Player('אופיר קריאף','24',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player105 = new Player('מיכאל אוחנה','18',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player106 = new Player('מרקו יאנקוביץ','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player107 = new Player('דוד דגו','52',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player108 = new Player('עוזיאל פרדו','17',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player109 = new Player('תמיר עדי','23',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player110 = new Player('עומר לקאו','16',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player111 = new Player('לירן רוטמן','15',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player112 = new Player('ירדן שועה','11',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player113 = new Player('רועי פדידה','29',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player114 = new Player('אדווין גאסי','21',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player115 = new Player('ריצמונד בואשי','9',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player116 = new Player('ניב זריהן','7',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var bitarJerusalemPlayers = [player93,player94,player95,player96,player97,player98,player99,player100,player101,player102,player103,player104,player105,player106,player107,player108,player109,player110,player111,player112,player113,player114,player115,player116]



///בני סכנין
var player117 = new Player('מחמוד קנדיל','22',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player118 = new Player('גד עמוס','1',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player119 = new Player('מארון גנטוס','2',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player120 = new Player('סארי פאלח','4',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player121 = new Player('ניקולה צירקוביץ','0',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player122 = new Player('עבדאללה גאבר','23',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player123= new Player('עמרי בן הרוש','42',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player124= new Player('אנטה פןלייץ','76',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player125= new Player('חגי גולדנברג','7',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player126 = new Player('יזן נאסר','99',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player127 = new Player('מוחמד עותמן','19',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player128 = new Player('זין אלדין','101',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player129 = new Player('מוחמד חלאילה','10',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player130 = new Player('עטאא גאבר','23',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player131 = new Player('רביע אבו יונס','52',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player132 = new Player('עודאי שלאעטה','13',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player133 = new Player('מוטי ברשצקי','15',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player134 = new Player('ארי מורה','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player135 = new Player('ניר לקס','15',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player136 = new Player('בירם כיאל','33',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player137 = new Player('רז שטיין','9',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player138 = new Player('מרוואן קבהא','26',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player139 = new Player('איהאב גנאים','9',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player140 = new Player('מופלח שלאעטה','43',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player141 = new Player('איברהימה קונטה','45',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player142 = new Player('ריצארד גאגה','91',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player143 = new Player('אנתוני וארן','25',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var shkninPlayers = [player117,player118,player119,player120,player121,player122,player123,player124,player125,player126,player127,player128,player129,player130,player131,player132,player133,player134,player135,player136,player137,player138,player139,player140,player141,player142,player143]

//באר שבע
var player144 = new Player('עמרי גלזר','52',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player145 = new Player('אריאל הרוש','55',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player146 = new Player('איאד אבו עביד','5',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player147 = new Player('אביב סולומון','12',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player148 = new Player('עבד אלחמיד','44',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player149 = new Player('מיגל ויטור','4',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player150= new Player('אור דדיה','21',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player151= new Player('לירן כהן','0',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player152= new Player('איתן טיבי','18',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player153 = new Player('הלדר לופס','22',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player154 = new Player('רועי גורדנה','9',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player155 = new Player('מריאנו ברירו','35',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player156 = new Player('תומר יוספי','15',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player157 = new Player('אילי מדמון','17',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player158 = new Player('נתי אסקיאס','19',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player159 = new Player('רותם חתואל','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player160 = new Player('רמזי ספורי','10',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player161 = new Player('דוידה פטרוצי','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player162 = new Player('דוד קלטינס','3',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player163 = new Player('דור מיכה','15',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player164 = new Player('איתי שכטר','11',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player165 = new Player('שגיב יחזקל','29',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player166 = new Player('איתמר שבירו','27',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player167 = new Player('יוגין אנסה','13',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player168 = new Player('אלטון אקולטסה','22',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player169 = new Player('דנילו אספרייה','91',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var beerShevaPlayers=[player144,player145,player146,player147,player148,player149,player150,player151,player152,player153,player154,player155,player156,player157,player158,player159,player160,player161,player162,player163,player164,player165,player166,player167,player168,player169]
//הפועל ירושליים

var player170 = new Player('יונתן שאבי','55',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player171 = new Player('איאב שאמי','27',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player172 = new Player('מאור גרסי','29',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player173 = new Player('גל מאיו','5',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player174 = new Player('גיא חדידה','23',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player175 = new Player('גיא בדש','24',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player176= new Player('רוסךן ברסקי','77',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player177= new Player('קלטוס נומביל','0',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player178= new Player('עידן שמש','9',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player179 = new Player('ויליאם אגדה','22',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player180 = new Player('בן מיזן','7',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player181 = new Player('אחמד דראושה','17',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player182 = new Player('אחמד סלמן','20',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player183 = new Player('אדלאיי אדבאיו','24',position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player184 = new Player('אונדזיי באצו','27',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player185 = new Player('אלוז יאו','18',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player186 = new Player('בר שושן','4',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player187 = new Player('נועם מלמוד','3',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player188 = new Player('הראל שלום','11',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player189 = new Player('סהר בראון','41',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player190 = new Player('עומר אגבדיש','32',position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player191 = new Player('אווקה אשטה','6',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player192 = new Player('איינהו פרדה','19',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player193 = new Player('גוני נאור','8',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player194 = new Player('חאמד שולאגה','70',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player195 = new Player('יוראי מליח','26',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player196 = new Player('לירן אלמליח','77',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player197 = new Player('מידן כהן','18',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player198 = new Player('קלייטוס נומביל','19',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player199 = new Player('רוסלן ברסקי','15',position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var hapoelJerusalemPlayers= [player170,player171,player172,player173,player174,player175,player176,player177,player178,player179,player180,player181,player182,player183,player184,player185,player186,player187,player188,player189,player190,player191,player192,player193,player194,player195,player196,player197,player198,player199];
//הפועל חיפה

var player200 = new Player('איתי בוגאנים','29',position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player201 = new Player("אלון תורג'מן","17",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player202 = new Player("אלן אוז'בולט","9",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player203 = new Player("ג'בייר בושנאק","38",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player204 = new Player("אוהד לויטה","1",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();;
var player205 = new Player("טל בומשטיין","22",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player206 = new Player("עמית סוארי","25",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player207 = new Player("בן והבה","32",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player208 = new Player("גיא משפתי","5",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player209 = new Player("לואי טאהא","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player210 = new Player("מיקי סירושטיין","2",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player211 = new Player("ניסו קפילוטו","55",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player212 = new Player("דודי טוויטו","14",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player213 = new Player("דור מלול","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player214 = new Player("נועם כהן","2",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player215 = new Player("עבד אלראוף ג'בארין","35",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player216 = new Player("גל אראל","6",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player217 = new Player("דודו אלטרוביץ'","28",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player218 = new Player("חנן ממן","10",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player219 = new Player("ירין גברי","33",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player220 = new Player("ירין סרדל'","23",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player221 = new Player("סאקו טורה","23",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player222 = new Player("סער פדידה","20",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player223 = new Player("עמנואל סמדיה","77",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player224 = new Player("שניר טליאס","27",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();



var hapoelHaifaPlayers = [player200,player201,player202,player203,player204,player205,player206,player207,player208,player209,player210,player211,player212,player213,player214,player215,player216,player217,player218,player219,player220,player221,player222,player223,player224];
//מכבי נתניה


var player232 = new Player("איגור זלטאנוביץ'","11",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player233 = new Player("איגור זלטאנוביץ'","19",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player234 = new Player("מאמון קשוע","99",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player235 = new Player("סער ברמי","17",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player236 = new Player("רון אשכנזי","19",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player237 = new Player("גולן אלקסלסי'","22",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player238 = new Player("דני עמוס","82",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player239 = new Player("עדי נסה","22",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player240 = new Player("רוי דניאל","15",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player241 = new Player("אלמוג כהן","8",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player242 = new Player("רז שלמה","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player243 = new Player("שיר צדק","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player244 = new Player("זלאטן שחוביץ'","17",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player245 = new Player("כארם ג'אבר","26",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player246 = new Player("לני אהרון","24",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player247 = new Player("עומאר גאיה","28",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player248 = new Player("עידו וייר","2",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player249 = new Player("רותם קלר","29",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player250 = new Player("שי קונסטנטין","77",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player251 = new Player("אבובקאר דומביה","11",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player252 = new Player("אביב אברהם","15",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player253 = new Player("אביב קנריק","30",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player254 = new Player("אמיר ברקוביץ'","27",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player255 = new Player("בוריס אנו","21",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player256 = new Player("גבי קניקובסקי","36",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player257 = new Player("חן עזרא","18",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player258 = new Player("יהאב אבו אלשיך","77",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player259 = new Player("יובל שדה","12",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player260 = new Player("נפתלי בלאי","16",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player261 = new Player("עמרי גנדלמן","6",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player262 = new Player("שלום אדרי","19",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var maccabiNetanyaPlayers = [player232,player233,player234,player235,player236,player237,player238,player239,player240,player241,player242,player243,player244,player245,player246,player247,player248,player249,player250,player251,player252,player253,player254,player255,player256,player257,player258,player259,player260,player261,player262];
// מכבי פתח תקווה
var player263 = new Player("אמיר אלטורי","29",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player264 = new Player("אריאל לוגסי","55",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player265 = new Player("דור ג'אן","9",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player266 = new Player("יהונתן לוי","28",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player267 = new Player("מיקו ממן","9",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player268 = new Player("רוי רונן","30",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player269 = new Player("אריק ינקו","22",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player270 = new Player("מאור ארליך","84",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player271 = new Player("מרקו וולף","1",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player272 = new Player("אור בלוריאן","5",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player273 = new Player("איתי רוטמן","66",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player274 = new Player("דניאל פלשר","21",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player275 = new Player("הדר פוקס","44",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player276 = new Player("עידן אדהנני","12",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player277 = new Player("מרקוס דיניז","8",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player278 = new Player("ינון אליהו","24",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player279 = new Player("ירדן כהן","16",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player280 = new Player("מוחמד הינדי","32",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player281 = new Player("תומר לוי","77",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();;
var player282 = new Player("אייל אינברום","17",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player283 = new Player("איתן אזולאי","18",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player284 = new Player("אלסאנה דומביה","14",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player285 = new Player("ארד בר","11",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player286 = new Player("בן רייכרט","8",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player287 = new Player("בר נוהי","29",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player288 = new Player("ג'יימס אדניי","99",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player289 = new Player("דן כדורי","55",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player290 = new Player("דניאל גולני","31",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player291 = new Player("זוהר פרנקו","2",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player292 = new Player("ירוסלאב מיחאליק","13",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player293 = new Player("לאמק בנדה","21",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player294 = new Player("ניקו אולסק","77",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player295 = new Player("עמית מאיר","15",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player296 = new Player("שלו דניאל","20",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var mPetachTikvaPlayers=[player263,player264,player265,player266,player267,player268,player269,player270,player271,player272,player273,player274,player275,player276,player277,player278,player279,player280,player281,player282,player283,player284,player285,player286,player287,player288,player289,player290,player291,player292,player293,player294,player295,player296];

//נוף הגליל

var player297 = new Player("והיב חביבאללה","14",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player298 = new Player("לוואגה קיזיטו","21",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player299 = new Player("סתיו נחמני","9",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player300 = new Player("קוון פרייטר","21",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player301 = new Player("דורון מיכאלי","45",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player302 = new Player("מתן עמבר","1",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player303 = new Player("סטפן מרינוביץ'","22",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player304 = new Player("איתי ארזי","27",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player305 = new Player("גוטיירי טומלין","55",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player306 = new Player("דויד אקווה","44",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player307 = new Player("דולב אזולאי","20",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player308 = new Player("יבגני ברקמן","5",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player309 = new Player("ירין פרץ","55",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player310 = new Player("פאדי נג'אר","5",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player311 = new Player("ראובן גל","33",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player312 = new Player("אלי בלילתי","51",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player313 = new Player("ויקי כחלון","2",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player314 = new Player("לביא שוקרון","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player315 = new Player("תום סקלובין","29",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player316 = new Player("אלעד שחף","29",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player317 = new Player("בן שטרלינג","77",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player318 = new Player("להב דהן","15",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player319 = new Player("סולומון דניאל","14",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player320 = new Player("עודד צוקול","7",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player321 = new Player("פדרו פטראצי","17",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player322 = new Player("רועי שוקרני","55",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player323 = new Player("ריאן אשמוז","70",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var hapoelNofHaGalilPlayers=[player297,player298,player299,player300,player301,player302,player303,player304,player305,player306,player307,player308,player309,player310,player311,player312,player313,player314,player315,player316,player317,player318,player319,player320,player321,player322,player323];
// חדרה
var player324 = new Player("אביאל בן חמו","83",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player325 = new Player("ליאב פרדה","96",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player326 = new Player("מוחמד גאדיר","9",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player327 = new Player("מוחמד רביע","13",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player328 = new Player("עומר יונס","91",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player329 = new Player("רועי זיקרי","18",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player330 = new Player("שובל גוזלן'","92",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player331 = new Player("אריאל מסיקה","55",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player332 = new Player("עדי טבצ'ניק","1",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player333 = new Player("רובי לבקוביץ'","44",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player334 = new Player("ג'ונתן סיסה","32",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player335 = new Player("דן לוגסי","36",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player336 = new Player("ווסאם רבאח","6",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player337 = new Player("עומר דנינו","3",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player338 = new Player("עידו לוי","4",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player339 = new Player("רון אונגר","18",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player340 = new Player("איבאילו מרקוב","3",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player341 = new Player("דולב אזרואל","24",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player342 = new Player("דיא לבאבידי","17",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player343 = new Player("מנשה זלקה","15",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player344 = new Player("אווג'ו אספה","25",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player345 = new Player("אוסמן מוחמד","88",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player346 = new Player("גוסטבו מרמנטיני","8",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player347 = new Player("גלעד אברמוב","10",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player348 = new Player("מקסים פלקושצ'נקו","7",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player349 = new Player("סקו דומביה","6",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player350 = new Player("עומר פדידה","8",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player351 = new Player("עמית מור","19",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player352 = new Player("רז בוחבוט","99",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player353 = new Player("תמיר גלזר","18",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();

var hapoelHaderaPlayers=[player324,player325,player326,player327,player328,player329,player330,player331,player332,player333,player334,player335,player336,player337,player338,player339,player340,player341,player342,player343,player344,player345,player346,player347,player348,player349,player350,player351,player352,player353]
//הפועל תל אביב
var player354 = new Player("יואב תומר","18",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player355 = new Player("לוסיו מרניאו","99",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player356 = new Player("רז טוויזר","23",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();;
var player357 = new Player("שלומי אזולאי","18",position[3],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player358 = new Player("ארנסטס שטקוס","1",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player359 = new Player("יגאל בקר","13",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player360 = new Player("רוי ברנס","33",position[0],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player361 = new Player("אדי גוטליב","6",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player362 = new Player("ג'ורג' דיבה","25",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player363 = new Player("מוחמד טראורה","34",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player364 = new Player("אופק בלס","27",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player365 = new Player("אלון אזוגי","15",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player366 = new Player("בן ביטון","2",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player367 = new Player("דורון ליידנר","18",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player368 = new Player("דני גרופר","14",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player369 = new Player("סתיו למקין","2",position[1],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player370 = new Player("אופק ביטון","51",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player371 = new Player("אושר דוידה","18",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player372 = new Player("אחמד מצרי","28",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player373 = new Player("אלפא קונטה","77",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player374 = new Player("דן איינבינדר","11",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player375 = new Player("יואב הופמייסטר","5",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player376 = new Player("ליאון מזרחי","23",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player377 = new Player("עידן ורד","8",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player378 = new Player("פארליי רוסה","28",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player379 = new Player("שי אייזן","6",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player380 = new Player("שי אליאס","9",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();
var player381 = new Player("שלומי אזולאי","8",position[2],technical,mental,physical,totalPlayerScore,"",posImg[0]);NewRandom();


var hapoelTelAvivPlayers=[player354,player355,player356,player357,player358,player359,player360,player361,player362,player363,player364,player365,player366,player367,player368,player369,player370,player371,player372,player373,player374,player375,player376,player377,player378,player379,player380,player381]