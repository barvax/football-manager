function Player(name,number,position,technical,mental,physical){
    {
        this.name = name;
        this.number = number;
        this.position = position;
        this.mental = mental;
        this.technical = technical;
        this.physical = physical;
       
        this.GetPosition = function(){
            return this.position;
        }
    }
    
 
    
}

function RandomNum(){
    return Math.floor(Math.random() * 21);
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
    Technique:RandomNum()
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
    WorkRate:RandomNum()
}

var physical = {
    Acceleration:RandomNum(),
    Agillity:RandomNum(),
    Ballance: RandomNum(),
    Jumping:RandomNum(),
    NaturalFithness :RandomNum(),
    Pace:RandomNum(),
    Stamina:RandomNum()

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
        Technique:RandomNum()
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
        WorkRate:RandomNum()
    }
    physical = {
        Acceleration:RandomNum(),
        Agillity:RandomNum(),
        Ballance: RandomNum(),
        Jumping:RandomNum(),
        NaturalFithness :RandomNum(),
        Pace:RandomNum(),
        Stamina:RandomNum()
    
    }
   
}
console.log(technical);
var position = ['goal-keeper','back','center','forward']
///מכבי חיפה////
var player1 = new Player('גוש כהן','40',position[0],technical,mental,physical);NewRandom();
var player2 = new Player('איתמר ישראלי','41',position[0],technical,mental,physical);NewRandom();
var player3 = new Player('בוגדן פלאניץ','5',position[1],technical,mental,physical);NewRandom();
var player4 = new Player('סאן מנחם','12',position[1],technical,mental,physical);NewRandom();
var player5 = new Player('רמי גרשון','5',position[1],technical,mental,physical);NewRandom();
var player6 = new Player('עפרי ארד','15',position[1],technical,mental,physical);NewRandom();
var player7= new Player('שון גולדברג','13',position[1],technical,mental,physical);NewRandom();
var player8= new Player('אורי דהן','6',position[1],technical,mental,physical);NewRandom();
var player9= new Player('ראיין סטריין','0',position[1],technical,mental,physical);NewRandom();
var player10 = new Player('רז מאיר','25',position[1],technical,mental,physical);NewRandom();
var player11 = new Player('רוני לאופר','0',position[1],technical,mental,physical);NewRandom();
var player12 = new Player('טאלב טוואטחה','17',position[1],technical,mental,physical);NewRandom();
var player13 = new Player('חוסה רודריגס','8',position[2],technical,mental,physical);NewRandom();
var player14 = new Player('יובל אשכנזי','18',position[2],technical,mental,physical);NewRandom();
var player15 = new Player('מאור לוי','33',position[2],technical,mental,physical);NewRandom();
var player16 = new Player('נטע לביא','6',position[2],technical,mental,physical);NewRandom();
var player17 = new Player('צירון שרי','10',position[2],technical,mental,physical);NewRandom();
var player18 = new Player('עומר אצילי','7',position[2],technical,mental,physical);NewRandom();
var player19 = new Player('עלי מוחמד','55',position[2],technical,mental,physical);NewRandom();
var player20 = new Player('אבו פאני','16',position[2],technical,mental,physical);NewRandom();
var player21 = new Player('גודסווי דוניו','11',position[3],technical,mental,physical);NewRandom();
var player22 = new Player('בן סהר','24',position[3],technical,mental,physical);NewRandom();
var player23 = new Player('דין דוד','99',position[3],technical,mental,physical);NewRandom();
var haifaPlayers = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20,player21,player22,player23]

///מכבי תל אביב////
var player24 = new Player('דניאל פרץ','0',position[0],technical,mental,physical);NewRandom();
var player25 = new Player('דניאל טטנבאום','19',position[0],technical,mental,physical);NewRandom();
var player26 = new Player('אנדראס יניוטיס','17',position[0],technical,mental,physical);NewRandom();
var player27 = new Player('שירן ייני','21',position[1],technical,mental,physical);NewRandom();
var player28 = new Player('מאור קנדיל','30',position[1],technical,mental,physical);NewRandom();
var player29 = new Player('אופיר דוידזאדה','27',position[1],technical,mental,physical);NewRandom();
var player30= new Player('מתן בלטקסה','20',position[1],technical,mental,physical);NewRandom();
var player31= new Player('שחר פיבן','31',position[1],technical,mental,physical);NewRandom();
var player32= new Player('אנדראה זראלדש','28',position[1],technical,mental,physical);NewRandom();
var player33 = new Player('עידן נחמיאס','4',position[1],technical,mental,physical);NewRandom();
var player34 = new Player('אנריק סבוריט','41',position[1],technical,mental,physical);NewRandom();
var player35 = new Player('לואיס הרננדס','17',position[1],technical,mental,physical);NewRandom();
var player36 = new Player('אייל גולסה','23',position[2],technical,mental,physical);NewRandom();
var player37 = new Player('דן גלזר','6',position[2],technical,mental,physical);NewRandom();
var player38 = new Player('עדן קארצב','47',position[2],technical,mental,physical);NewRandom();
var player39 = new Player('אבי ריקן','22',position[2],technical,mental,physical);NewRandom();
var player40 = new Player('אורוש ניקוליץ','70',position[2],technical,mental,physical);NewRandom();
var player41 = new Player('עידו שחר','0',position[2],technical,mental,physical);NewRandom();
var player42 = new Player('עדן שמיר','18',position[2],technical,mental,physical);NewRandom();
var player43 = new Player('אדןארדו גררו','39',position[3],technical,mental,physical);NewRandom();
var player44 = new Player('מתן חוזז','45',position[3],technical,mental,physical);NewRandom();
var player45 = new Player('אילון אלמוג','29',position[3],technical,mental,physical);NewRandom();
var player46 = new Player('אוסמה חלאילה','9',position[3],technical,mental,physical);NewRandom();
var player47 = new Player('רונן חנציס','38',position[3],technical,mental,physical);NewRandom();
var player48 = new Player('דן ביטון','10',position[3],technical,mental,physical);NewRandom();
var player49 = new Player('סטיפה פריצה','18',position[3],technical,mental,physical);NewRandom();
var mTelAvivPlayers = [player24,player25,player26,player27,player28,player29,player30,player31,player32,player33,player34,player35,player36,player37,player38,player39,player40,player41,player42,player43,player44,player45,player46,player47,player48,player49]

///קירית שמונה////
var player50 = new Player('דזיוגאס ברטקוס','29',position[0],technical,mental,physical);NewRandom();
var player51 = new Player('עאיד חבשי','21',position[1],technical,mental,physical);NewRandom();
var player52 = new Player('זיו מורגן','3',position[1],technical,mental,physical);NewRandom();
var player53 = new Player('סטפן אקה','26',position[1],technical,mental,physical);NewRandom();
var player54 = new Player('עלאא געפר','22',position[1],technical,mental,physical);NewRandom();
var player55 = new Player('אדריאן רוצט','23',position[2],technical,mental,physical);NewRandom();
var player56= new Player('אריאל שרצקי','74',position[2],technical,mental,physical);NewRandom();
var player57= new Player('שחר פיבן','31',position[2],technical,mental,physical);NewRandom();
var player58= new Player('יובל לוין','0',position[2],technical,mental,physical);NewRandom();
var player59 = new Player('סמואל בראון','8',position[2],technical,mental,physical);NewRandom();
var player60 = new Player('איתמר בן שמעון','23',position[2],technical,mental,physical);NewRandom();
var player61 = new Player('רועי קהת','90',position[2],technical,mental,physical);NewRandom();
var player62 = new Player('אובידאו ביק','39',position[2],technical,mental,physical);NewRandom();
var player63 = new Player('נדב נידן','66',position[2],technical,mental,physical);NewRandom();
var player64 = new Player('מורגן פריאר','79',position[3],technical,mental,physical);NewRandom();
var player65 = new Player('מוחמד שכר','10',position[3],technical,mental,physical);NewRandom();
var player66 = new Player('גיא בן לולו','21',position[3],technical,mental,physical);NewRandom();
var player67 = new Player('יובל אבוחצירה','28',position[3],technical,mental,physical);NewRandom();
var player68 = new Player('סטפן מילוסביץ','88',position[3],technical,mental,physical);NewRandom();
var player225 = new Player("רון פרץ","14",position[3],technical,mental,physical);NewRandom();
var player226 = new Player("נדב זמיר","1",position[0],technical,mental,physical);NewRandom();
var player227 = new Player("45","נסים חאיכ",position[0],technical,mental,physical);NewRandom();
var player228 = new Player("4","איתי בן שבת",position[1],technical,mental,physical);NewRandom();
var player229 = new Player("20","ניר דרורי",position[1],technical,mental,physical);NewRandom();
var player230 = new Player("17","ידין לוגאסי",position[2],technical,mental,physical);NewRandom();
var player231 = new Player("12","שלו דסטה",position[2],technical,mental,physical);NewRandom();



var kShmonaPlayers = [player50,player51,player52,player53,player54,player55,player56,player57,player58,player59,player60,player61,player62,player63,player64,player65,player66,player67,player68,player225,player226,player227,player228,player229,player230,player231]

///אשדוד////
var player69 = new Player('יואב גרפי','22',position[0],technical,mental,physical);NewRandom();
var player70 = new Player('רועי משפתי','90',position[0],technical,mental,physical);NewRandom();
var player71 = new Player('סהר חסון','41',position[0],technical,mental,physical);NewRandom();
var player72 = new Player('ננד סבקוביץ','66',position[1],technical,mental,physical);NewRandom();
var player73 = new Player('טימותי אוואני','77',position[1],technical,mental,physical);NewRandom();
var player74 = new Player('גיל כהן','3',position[1],technical,mental,physical);NewRandom();
var player75= new Player('אריאל שרצקי','74',position[1],technical,mental,physical);NewRandom();
var player76= new Player('מונטרי קמאהני','13',position[1],technical,mental,physical);NewRandom();
var player77= new Player('טום בן זקן','15',position[1],technical,mental,physical);NewRandom();
var player78 = new Player('שלו הרוש','7',position[2],technical,mental,physical);NewRandom();
var player79 = new Player('אור אינברום','99',position[2],technical,mental,physical);NewRandom();
var player80 = new Player('פיראס אבו עקל','22',position[2],technical,mental,physical);NewRandom();
var player81 = new Player('מוסא בגאיוקו','10',position[2],technical,mental,physical);NewRandom();
var player83 = new Player('יעקב בריהון','77',position[2],technical,mental,physical);NewRandom();
var player84 = new Player('זוהר זסנו','16',position[2],technical,mental,physical);NewRandom();
var player85 = new Player('יוני סיסאי','88',position[2],technical,mental,physical);NewRandom();
var player86 = new Player('גיא דהן','99',position[2],technical,mental,physical);NewRandom();
var player87 = new Player('ניר חסון','98',position[2],technical,mental,physical);NewRandom();
var player88 = new Player('מוחמד כנען','6',position[3],technical,mental,physical);NewRandom();
var player89 = new Player('בנצי מושל','18',position[3],technical,mental,physical);NewRandom();
var player90 = new Player('סתיו טוריאל','87',position[3],technical,mental,physical);NewRandom();
var player91 = new Player('עידן דהן','24',position[3],technical,mental,physical);NewRandom();
var player92 = new Player('אדגי הייפורד','52',position[3],technical,mental,physical);NewRandom();

var ashdodPlayers = [player69,player70,player71,player72,player73,player74,player75,player76,player77,player78,player79,player80,player81,player82,player83,player84,player85,player86,player87,player88,player89,player90,player91,player92]

///ביתר ירושליים
var player93 = new Player('איתמר ניצן','1',position[0],technical,mental,physical);NewRandom();
var player94 = new Player('נתנאל דלויה','22',position[0],technical,mental,physical);NewRandom();
var player95 = new Player('עמית כהן','21',position[1],technical,mental,physical);NewRandom();
var player96 = new Player('דוד חוגה','0',position[1],technical,mental,physical);NewRandom();
var player97 = new Player('מקס גרצקין','77',position[1],technical,mental,physical);NewRandom();
var player98 = new Player('סנטיאגו אוקמפוס','30',position[1],technical,mental,physical);NewRandom();
var player99= new Player('אור זהבי','4',position[1],technical,mental,physical);NewRandom();
var player100= new Player('אורן ביטון','16',position[1],technical,mental,physical);NewRandom();
var player101= new Player('אביאל זרגרי','6',position[2],technical,mental,physical);NewRandom();
var player102 = new Player('מתאוסיניו','0',position[2],technical,mental,physical);NewRandom();
var player103 = new Player('רוי דוגה','0',position[2],technical,mental,physical);NewRandom();
var player104 = new Player('אופיר קריאף','24',position[2],technical,mental,physical);NewRandom();
var player105 = new Player('מיכאל אוחנה','18',position[2],technical,mental,physical);NewRandom();
var player106 = new Player('מרקו יאנקוביץ','0',position[2],technical,mental,physical);NewRandom();
var player107 = new Player('דוד דגו','52',position[2],technical,mental,physical);NewRandom();
var player108 = new Player('עוזיאל פרדו','17',position[2],technical,mental,physical);NewRandom();
var player109 = new Player('תמיר עדי','23',position[2],technical,mental,physical);NewRandom();
var player110 = new Player('עומר לקאו','16',position[2],technical,mental,physical);NewRandom();
var player111 = new Player('לירן רוטמן','15',position[3],technical,mental,physical);NewRandom();
var player112 = new Player('ירדן שועה','11',position[3],technical,mental,physical);NewRandom();
var player113 = new Player('רועי פדידה','29',position[3],technical,mental,physical);NewRandom();
var player114 = new Player('אדווין גאסי','21',position[3],technical,mental,physical);NewRandom();
var player115 = new Player('ריצמונד בואשי','9',position[3],technical,mental,physical);NewRandom();
var player116 = new Player('ניב זריהן','7',position[3],technical,mental,physical);NewRandom();

var bitarJerusalemPlayers = [player93,player94,player95,player96,player97,player98,player99,player100,player101,player102,player103,player104,player105,player106,player107,player108,player109,player110,player111,player112,player113,player114,player115,player116]



///בני סכנין
var player117 = new Player('מחמוד קנדיל','22',position[0],technical,mental,physical);NewRandom();
var player118 = new Player('גד עמוס','1',position[0],technical,mental,physical);NewRandom();
var player119 = new Player('מארון גנטוס','2',position[1],technical,mental,physical);NewRandom();
var player120 = new Player('סארי פאלח','4',position[1],technical,mental,physical);NewRandom();
var player121 = new Player('ניקולה צירקוביץ','0',position[1],technical,mental,physical);NewRandom();
var player122 = new Player('עבדאללה גאבר','23',position[1],technical,mental,physical);NewRandom();
var player123= new Player('עמרי בן הרוש','42',position[1],technical,mental,physical);NewRandom();
var player124= new Player('אנטה פןלייץ','76',position[1],technical,mental,physical);NewRandom();
var player125= new Player('חגי גולדנברג','7',position[1],technical,mental,physical);NewRandom();
var player126 = new Player('יזן נאסר','99',position[1],technical,mental,physical);NewRandom();
var player127 = new Player('מוחמד עותמן','19',position[1],technical,mental,physical);NewRandom();
var player128 = new Player('זין אלדין','101',position[2],technical,mental,physical);NewRandom();
var player129 = new Player('מוחמד חלאילה','10',position[2],technical,mental,physical);NewRandom();
var player130 = new Player('עטאא גאבר','23',position[2],technical,mental,physical);NewRandom();
var player131 = new Player('רביע אבו יונס','52',position[2],technical,mental,physical);NewRandom();
var player132 = new Player('עודאי שלאעטה','13',position[2],technical,mental,physical);NewRandom();
var player133 = new Player('מוטי ברשצקי','15',position[2],technical,mental,physical);NewRandom();
var player134 = new Player('ארי מורה','0',position[2],technical,mental,physical);NewRandom();
var player135 = new Player('ניר לקס','15',position[2],technical,mental,physical);NewRandom();
var player136 = new Player('בירם כיאל','33',position[2],technical,mental,physical);NewRandom();
var player137 = new Player('רז שטיין','9',position[2],technical,mental,physical);NewRandom();
var player138 = new Player('מרוואן קבהא','26',position[2],technical,mental,physical);NewRandom();
var player139 = new Player('איהאב גנאים','9',position[2],technical,mental,physical);NewRandom();
var player140 = new Player('מופלח שלאעטה','43',position[2],technical,mental,physical);NewRandom();
var player141 = new Player('איברהימה קונטה','45',position[2],technical,mental,physical);NewRandom();
var player142 = new Player('ריצארד גאגה','91',position[3],technical,mental,physical);NewRandom();
var player143 = new Player('אנתוני וארן','25',position[3],technical,mental,physical);NewRandom();

var shkninPlayers = [player117,player118,player119,player120,player121,player122,player123,player124,player125,player126,player127,player128,player129,player130,player131,player132,player133,player134,player135,player136,player137,player138,player139,player140,player141,player142,player143]

//באר שבע
var player144 = new Player('עמרי גלזר','52',position[0],technical,mental,physical);NewRandom();
var player145 = new Player('אריאל הרוש','55',position[0],technical,mental,physical);NewRandom();
var player146 = new Player('איאד אבו עביד','5',position[1],technical,mental,physical);NewRandom();
var player147 = new Player('אביב סולומון','12',position[1],technical,mental,physical);NewRandom();
var player148 = new Player('עבד אלחמיד','44',position[1],technical,mental,physical);NewRandom();
var player149 = new Player('מיגל ויטור','4',position[1],technical,mental,physical);NewRandom();
var player150= new Player('אור דדיה','21',position[1],technical,mental,physical);NewRandom();
var player151= new Player('לירן כהן','0',position[1],technical,mental,physical);NewRandom();
var player152= new Player('איתן טיבי','18',position[1],technical,mental,physical);NewRandom();
var player153 = new Player('הלדר לופס','22',position[1],technical,mental,physical);NewRandom();
var player154 = new Player('רועי גורדנה','9',position[2],technical,mental,physical);NewRandom();
var player155 = new Player('מריאנו ברירו','35',position[2],technical,mental,physical);NewRandom();
var player156 = new Player('תומר יוספי','15',position[2],technical,mental,physical);NewRandom();
var player157 = new Player('אילי מדמון','17',position[2],technical,mental,physical);NewRandom();
var player158 = new Player('נתי אסקיאס','19',position[2],technical,mental,physical);NewRandom();
var player159 = new Player('רותם חתואל','0',position[2],technical,mental,physical);NewRandom();
var player160 = new Player('רמזי ספורי','10',position[2],technical,mental,physical);NewRandom();
var player161 = new Player('דוידה פטרוצי','0',position[2],technical,mental,physical);NewRandom();
var player162 = new Player('דוד קלטינס','3',position[2],technical,mental,physical);NewRandom();
var player163 = new Player('דור מיכה','15',position[2],technical,mental,physical);NewRandom();
var player164 = new Player('איתי שכטר','11',position[3],technical,mental,physical);NewRandom();
var player165 = new Player('שגיב יחזקל','29',position[3],technical,mental,physical);NewRandom();
var player166 = new Player('איתמר שבירו','27',position[3],technical,mental,physical);NewRandom();
var player167 = new Player('יוגין אנסה','13',position[3],technical,mental,physical);NewRandom();
var player168 = new Player('אלטון אקולטסה','22',position[3],technical,mental,physical);NewRandom();
var player169 = new Player('דנילו אספרייה','91',position[3],technical,mental,physical);NewRandom();

var beerShevaPlayers=[player144,player145,player146,player147,player148,player149,player150,player151,player152,player153,player154,player155,player156,player157,player158,player159,player160,player161,player162,player163,player164,player165,player166,player167,player168,player169]
//הפועל ירושליים

var player170 = new Player('יונתן שאבי','55',position[0],technical,mental,physical);NewRandom();
var player171 = new Player('איאב שאמי','27',position[1],technical,mental,physical);NewRandom();
var player172 = new Player('מאור גרסי','29',position[1],technical,mental,physical);NewRandom();
var player173 = new Player('גל מאיו','5',position[1],technical,mental,physical);NewRandom();
var player174 = new Player('גיא חדידה','23',position[2],technical,mental,physical);NewRandom();
var player175 = new Player('גיא בדש','24',position[2],technical,mental,physical);NewRandom();
var player176= new Player('רוסךן ברסקי','77',position[2],technical,mental,physical);NewRandom();
var player177= new Player('קלטוס נומביל','0',position[2],technical,mental,physical);NewRandom();
var player178= new Player('עידן שמש','9',position[3],technical,mental,physical);NewRandom();
var player179 = new Player('ויליאם אגדה','22',position[3],technical,mental,physical);NewRandom();
var player180 = new Player('בן מיזן','7',position[3],technical,mental,physical);NewRandom();
var player181 = new Player('אחמד דראושה','17',position[3],technical,mental,physical);NewRandom();
var player182 = new Player('אחמד סלמן','20',position[3],technical,mental,physical);NewRandom();
var player183 = new Player('אדלאיי אדבאיו','24',position[0],technical,mental,physical);NewRandom();
var player184 = new Player('אונדזיי באצו','27',position[1],technical,mental,physical);NewRandom();
var player185 = new Player('אלוז יאו','18',position[1],technical,mental,physical);NewRandom();
var player186 = new Player('בר שושן','4',position[1],technical,mental,physical);NewRandom();
var player187 = new Player('נועם מלמוד','3',position[1],technical,mental,physical);NewRandom();
var player188 = new Player('הראל שלום','11',position[1],technical,mental,physical);NewRandom();
var player189 = new Player('סהר בראון','41',position[1],technical,mental,physical);NewRandom();
var player190 = new Player('עומר אגבדיש','32',position[1],technical,mental,physical);NewRandom();
var player191 = new Player('אווקה אשטה','6',position[2],technical,mental,physical);NewRandom();
var player192 = new Player('איינהו פרדה','19',position[2],technical,mental,physical);NewRandom();
var player193 = new Player('גוני נאור','8',position[2],technical,mental,physical);NewRandom();
var player194 = new Player('חאמד שולאגה','70',position[2],technical,mental,physical);NewRandom();
var player195 = new Player('יוראי מליח','26',position[2],technical,mental,physical);NewRandom();
var player196 = new Player('לירן אלמליח','77',position[2],technical,mental,physical);NewRandom();
var player197 = new Player('מידן כהן','18',position[2],technical,mental,physical);NewRandom();
var player198 = new Player('קלייטוס נומביל','19',position[2],technical,mental,physical);NewRandom();
var player199 = new Player('רוסלן ברסקי','15',position[2],technical,mental,physical);NewRandom();
var hapoelJerusalemPlayers= [player170,player171,player172,player173,player174,player175,player176,player177,player178,player179,player180,player181,player182,player183,player184,player185,player186,player187,player188,player189,player190,player191,player192,player193,player194,player195,player196,player197,player198,player199];
//הפועל חיפה

var player200 = new Player('איתי בוגאנים','29',position[3],technical,mental,physical);NewRandom();
var player201 = new Player("17","אלון תורג'מן",position[3],technical,mental,physical);NewRandom();
var player202 = new Player("9","אלן אוז'בולט",position[3],technical,mental,physical);NewRandom();
var player203 = new Player("38","ג'בייר בושנאק",position[3],technical,mental,physical);NewRandom();
var player204 = new Player("1","אוהד לויטה",position[0],technical,mental,physical);NewRandom();;
var player205 = new Player("22","טל בומשטיין",position[0],technical,mental,physical);NewRandom();
var player206 = new Player("25","עמית סוארי",position[0],technical,mental,physical);NewRandom();
var player207 = new Player("32","בן והבה",position[1],technical,mental,physical);NewRandom();
var player208 = new Player("5","גיא משפתי",position[1],technical,mental,physical);NewRandom();
var player209 = new Player("4","לואי טאהא",position[1],technical,mental,physical);NewRandom();
var player210 = new Player("2","מיקי סירושטיין",position[1],technical,mental,physical);NewRandom();
var player211 = new Player("55","ניסו קפילוטו",position[1],technical,mental,physical);NewRandom();
var player212 = new Player("14","דודי טוויטו",position[1],technical,mental,physical);NewRandom();
var player213 = new Player("4","דור מלול",position[1],technical,mental,physical);NewRandom();
var player214 = new Player("2","נועם כהן",position[1],technical,mental,physical);NewRandom();
var player215 = new Player("35","עבד אלראוף ג'בארין",position[1],technical,mental,physical);NewRandom();
var player216 = new Player("6","גל אראל",position[2],technical,mental,physical);NewRandom();
var player217 = new Player("28","דודו אלטרוביץ'",position[2],technical,mental,physical);NewRandom();
var player218 = new Player("10","חנן ממן",position[2],technical,mental,physical);NewRandom();
var player219 = new Player("33","ירין גברי",position[2],technical,mental,physical);NewRandom();
var player220 = new Player("23","ירין סרדל'",position[2],technical,mental,physical);NewRandom();
var player221 = new Player("23","סאקו טורה",position[2],technical,mental,physical);NewRandom();
var player222 = new Player("20","סער פדידה",position[2],technical,mental,physical);NewRandom();
var player223 = new Player("77","עמנואל סמדיה",position[2],technical,mental,physical);NewRandom();
var player224 = new Player("27","שניר טליאס",position[2],technical,mental,physical);NewRandom();



var hapoelHaifaPlayers = [player200,player201,player202,player203,player204,player205,player206,player207,player208,player209,player210,player211,player212,player213,player214,player215,player216,player217,player218,player219,player220,player221,player222,player223,player224];
//מכבי נתניה


var player232 = new Player("11","איגור זלטאנוביץ'",position[3],technical,mental,physical);NewRandom();
var player233 = new Player("19","יניב מזרחי",position[3],technical,mental,physical);NewRandom();
var player234 = new Player("99","מאמון קשוע",position[3],technical,mental,physical);NewRandom();
var player235 = new Player("17","סער ברמי",position[3],technical,mental,physical);NewRandom();
var player236 = new Player("19","רון אשכנזי",position[3],technical,mental,physical);NewRandom();
var player237 = new Player("22","גולן אלקסלסי'",position[0],technical,mental,physical);NewRandom();
var player238 = new Player("82","דני עמוס",position[0],technical,mental,physical);NewRandom();
var player239 = new Player("22","עדי נסה",position[0],technical,mental,physical);NewRandom();
var player240 = new Player("15","רוי דניאל",position[0],technical,mental,physical);NewRandom();
var player241 = new Player("8","אלמוג כהן",position[1],technical,mental,physical);NewRandom();
var player242 = new Player("4","רז שלמה",position[1],technical,mental,physical);NewRandom();
var player243 = new Player("4","שיר צדק",position[1],technical,mental,physical);NewRandom();
var player244 = new Player("17","זלאטן שחוביץ'",position[1],technical,mental,physical);NewRandom();
var player245 = new Player("26","כארם ג'אבר",position[1],technical,mental,physical);NewRandom();
var player246 = new Player("24","לני אהרון",position[1],technical,mental,physical);NewRandom();
var player247 = new Player("28","עומאר גאיה",position[1],technical,mental,physical);NewRandom();
var player248 = new Player("2","עידו וייר",position[1],technical,mental,physical);NewRandom();
var player249 = new Player("29","רותם קלר",position[1],technical,mental,physical);NewRandom();
var player250 = new Player("77","שי קונסטנטין",position[1],technical,mental,physical);NewRandom();
var player251 = new Player("11","אבובקאר דומביה",position[2],technical,mental,physical);NewRandom();
var player252 = new Player("15","אביב אברהם",position[2],technical,mental,physical);NewRandom();
var player253 = new Player("30","אביב קנריק",position[2],technical,mental,physical);NewRandom();
var player254 = new Player("27","אמיר ברקוביץ'",position[2],technical,mental,physical);NewRandom();
var player255 = new Player("21","בוריס אנו",position[2],technical,mental,physical);NewRandom();
var player256 = new Player("36","גבי קניקובסקי",position[2],technical,mental,physical);NewRandom();
var player257 = new Player("18","חן עזרא",position[2],technical,mental,physical);NewRandom();
var player258 = new Player("77","יהאב אבו אלשיך",position[2],technical,mental,physical);NewRandom();
var player259 = new Player("12","יובל שדה",position[2],technical,mental,physical);NewRandom();
var player260 = new Player("16","נפתלי בלאי",position[2],technical,mental,physical);NewRandom();
var player261 = new Player("6","עמרי גנדלמן",position[2],technical,mental,physical);NewRandom();
var player262 = new Player("19","שלום אדרי",position[2],technical,mental,physical);NewRandom();

var maccabiNetanyaPlayers = [player232,player233,player234,player235,player236,player237,player238,player239,player240,player241,player242,player243,player244,player245,player246,player247,player248,player249,player250,player251,player252,player253,player254,player255,player256,player257,player258,player259,player260,player261,player262];
// מכבי פתח תקווה
var player263 = new Player("29","אמיר אלטורי",position[3],technical,mental,physical);NewRandom();
var player264 = new Player("55","אריאל לוגסי",position[3],technical,mental,physical);NewRandom();
var player265 = new Player("9","דור ג'אן",position[3],technical,mental,physical);NewRandom();
var player266 = new Player("28","יהונתן לוי",position[3],technical,mental,physical);NewRandom();
var player267 = new Player("9","מיקו ממן",position[3],technical,mental,physical);NewRandom();
var player268 = new Player("30","רוי רונן",position[3],technical,mental,physical);NewRandom();
var player269 = new Player("22","אריק ינקו",position[0],technical,mental,physical);NewRandom();
var player270 = new Player("84","מאור ארליך",position[0],technical,mental,physical);NewRandom();
var player271 = new Player("1","מרקו וולף",position[0],technical,mental,physical);NewRandom();
var player272 = new Player("5","אור בלוריאן",position[1],technical,mental,physical);NewRandom();
var player273 = new Player("66","איתי רוטמן",position[1],technical,mental,physical);NewRandom();
var player274 = new Player("21","דניאל פלשר",position[1],technical,mental,physical);NewRandom();
var player275 = new Player("44","הדר פוקס",position[1],technical,mental,physical);NewRandom();
var player276 = new Player("12","עידן אדהנני",position[1],technical,mental,physical);NewRandom();
var player277 = new Player("8","מרקוס דיניז",position[1],technical,mental,physical);NewRandom();
var player278 = new Player("24","ינון אליהו",position[1],technical,mental,physical);NewRandom();
var player279 = new Player("16","ירדן כהן",position[1],technical,mental,physical);NewRandom();
var player280 = new Player("32","מוחמד הינדי",position[1],technical,mental,physical);NewRandom();
var player281 = new Player("77","תומר לוי",position[1],technical,mental,physical);NewRandom();;
var player282 = new Player("17","אייל אינברום",position[2],technical,mental,physical);NewRandom();
var player283 = new Player("18","איתן אזולאי",position[2],technical,mental,physical);NewRandom();
var player284 = new Player("14","אלסאנה דומביה",position[2],technical,mental,physical);NewRandom();
var player285 = new Player("11","ארד בר",position[2],technical,mental,physical);NewRandom();
var player286 = new Player("8","בן רייכרט",position[2],technical,mental,physical);NewRandom();
var player287 = new Player("29","בר נוהי",position[2],technical,mental,physical);NewRandom();
var player288 = new Player("99","ג'יימס אדניי",position[2],technical,mental,physical);NewRandom();
var player289 = new Player("55","דן כדורי",position[2],technical,mental,physical);NewRandom();
var player290 = new Player("31","דניאל גולני",position[2],technical,mental,physical);NewRandom();
var player291 = new Player("2","זוהר פרנקו",position[2],technical,mental,physical);NewRandom();
var player292 = new Player("13","ירוסלאב מיחאליק",position[2],technical,mental,physical);NewRandom();
var player293 = new Player("21","לאמק בנדה",position[2],technical,mental,physical);NewRandom();
var player294 = new Player("77","ניקו אולסק",position[2],technical,mental,physical);NewRandom();
var player295 = new Player("15","עמית מאיר",position[2],technical,mental,physical);NewRandom();
var player296 = new Player("20","שלו דניאל",position[2],technical,mental,physical);NewRandom();

var mPetachTikvaPlayers=[player263,player264,player265,player266,player267,player268,player269,player270,player271,player272,player273,player274,player275,player276,player277,player278,player279,player280,player281,player282,player283,player284,player285,player286,player287,player288,player289,player290,player291,player292,player293,player294,player295,player296];

//נוף הגליל

var player297 = new Player("14","והיב חביבאללה",position[3],technical,mental,physical);NewRandom();
var player298 = new Player("21","לוואגה קיזיטו",position[3],technical,mental,physical);NewRandom();
var player299 = new Player("9","סתיו נחמני",position[3],technical,mental,physical);NewRandom();
var player300 = new Player("21","קוון פרייטר",position[3],technical,mental,physical);NewRandom();
var player301 = new Player("45","דורון מיכאלי",position[0],technical,mental,physical);NewRandom();
var player302 = new Player("1","מתן עמבר",position[0],technical,mental,physical);NewRandom();
var player303 = new Player("22","סטפן מרינוביץ'",position[0],technical,mental,physical);NewRandom();
var player304 = new Player("27","איתי ארזי",position[1],technical,mental,physical);NewRandom();
var player305 = new Player("55","גוטיירי טומלין",position[1],technical,mental,physical);NewRandom();
var player306 = new Player("44","דויד אקווה",position[1],technical,mental,physical);NewRandom();
var player307 = new Player("20","דולב אזולאי",position[1],technical,mental,physical);NewRandom();
var player308 = new Player("5","יבגני ברקמן",position[1],technical,mental,physical);NewRandom();
var player309 = new Player("55","ירין פרץ",position[1],technical,mental,physical);NewRandom();
var player310 = new Player("5","פאדי נג'אר",position[1],technical,mental,physical);NewRandom();
var player311 = new Player("33","ראובן גל",position[1],technical,mental,physical);NewRandom();
var player312 = new Player("51","אלי בלילתי",position[1],technical,mental,physical);NewRandom();
var player313 = new Player("2","ויקי כחלון",position[1],technical,mental,physical);NewRandom();
var player314 = new Player("4","לביא שוקרון",position[1],technical,mental,physical);NewRandom();
var player315 = new Player("29","תום סקלובין",position[1],technical,mental,physical);NewRandom();
var player316 = new Player("29","אלעד שחף",position[2],technical,mental,physical);NewRandom();
var player317 = new Player("77","בן שטרלינג",position[2],technical,mental,physical);NewRandom();
var player318 = new Player("15","להב דהן",position[2],technical,mental,physical);NewRandom();
var player319 = new Player("14","סולומון דניאל",position[2],technical,mental,physical);NewRandom();
var player320 = new Player("7","עודד צוקול",position[2],technical,mental,physical);NewRandom();
var player321 = new Player("17","פדרו פטראצי",position[2],technical,mental,physical);NewRandom();
var player322 = new Player("55","רועי שוקרני",position[2],technical,mental,physical);NewRandom();
var player323 = new Player("70","ריאן אשמוז",position[2],technical,mental,physical);NewRandom();

var hapoelNofHaGalilPlayers=[player297,player298,player299,player300,player301,player302,player303,player304,player305,player306,player307,player308,player309,player310,player311,player312,player313,player314,player315,player316,player317,player318,player319,player320,player321,player322,player323];
// חדרה
var player324 = new Player("83","אביאל בן חמו",position[3],technical,mental,physical);NewRandom();
var player325 = new Player("96","ליאב פרדה",position[3],technical,mental,physical);NewRandom();
var player326 = new Player("9","מוחמד גאדיר",position[3],technical,mental,physical);NewRandom();
var player327 = new Player("13","מוחמד רביע",position[3],technical,mental,physical);NewRandom();
var player328 = new Player("91","עומר יונס",position[3],technical,mental,physical);NewRandom();
var player329 = new Player("18","רועי זיקרי",position[3],technical,mental,physical);NewRandom();
var player330 = new Player("92","שובל גוזלן'",position[3],technical,mental,physical);NewRandom();
var player331 = new Player("55","אריאל מסיקה",position[0],technical,mental,physical);NewRandom();
var player332 = new Player("1","עדי טבצ'ניק",position[0],technical,mental,physical);NewRandom();
var player333 = new Player("44","רובי לבקוביץ'",position[0],technical,mental,physical);NewRandom();
var player334 = new Player("32","ג'ונתן סיסה",position[1],technical,mental,physical);NewRandom();
var player335 = new Player("36","דן לוגסי",position[1],technical,mental,physical);NewRandom();
var player336 = new Player("6","ווסאם רבאח",position[1],technical,mental,physical);NewRandom();
var player337 = new Player("3","עומר דנינו",position[1],technical,mental,physical);NewRandom();
var player338 = new Player("4","עידו לוי",position[1],technical,mental,physical);NewRandom();
var player339 = new Player("18","רון אונגר",position[1],technical,mental,physical);NewRandom();
var player340 = new Player("3","איבאילו מרקוב",position[1],technical,mental,physical);NewRandom();
var player341 = new Player("24","דולב אזרואל",position[1],technical,mental,physical);NewRandom();
var player342 = new Player("17","דיא לבאבידי",position[1],technical,mental,physical);NewRandom();
var player343 = new Player("15","מנשה זלקה",position[1],technical,mental,physical);NewRandom();
var player344 = new Player("25","אווג'ו אספה",position[2],technical,mental,physical);NewRandom();
var player345 = new Player("88","אוסמן מוחמד",position[2],technical,mental,physical);NewRandom();
var player346 = new Player("8","גוסטבו מרמנטיני",position[2],technical,mental,physical);NewRandom();
var player347 = new Player("10","גלעד אברמוב",position[2],technical,mental,physical);NewRandom();
var player348 = new Player("7","מקסים פלקושצ'נקו",position[2],technical,mental,physical);NewRandom();
var player349 = new Player("6","סקו דומביה",position[2],technical,mental,physical);NewRandom();
var player350 = new Player("8","עומר פדידה",position[2],technical,mental,physical);NewRandom();
var player351 = new Player("19","עמית מור",position[2],technical,mental,physical);NewRandom();
var player352 = new Player("99","רז בוחבוט",position[2],technical,mental,physical);NewRandom();
var player353 = new Player("18","תמיר גלזר",position[2],technical,mental,physical);NewRandom();

var hapoelHaderaPlayers=[player324,player325,player326,player327,player328,player329,player330,player331,player332,player333,player334,player335,player336,player337,player338,player339,player340,player341,player342,player343,player344,player345,player346,player347,player348,player349,player350,player351,player352,player353]
//הפועל תל אביב
var player354 = new Player("18","יואב תומר",position[3],technical,mental,physical);NewRandom();
var player355 = new Player("99","לוסיו מרניאו",position[3],technical,mental,physical);NewRandom();
var player356 = new Player("23","רז טוויזר",position[3],technical,mental,physical);NewRandom();;
var player357 = new Player("18","שלומי אזולאי",position[3],technical,mental,physical);NewRandom();
var player358 = new Player("1","ארנסטס שטקוס",position[0],technical,mental,physical);NewRandom();
var player359 = new Player("13","יגאל בקר",position[0],technical,mental,physical);NewRandom();
var player360 = new Player("33","רוי ברנס",position[0],technical,mental,physical);NewRandom();
var player361 = new Player("6","אדי גוטליב",position[1],technical,mental,physical);NewRandom();
var player362 = new Player("25","ג'ורג' דיבה",position[1],technical,mental,physical);NewRandom();
var player363 = new Player("34","מוחמד טראורה",position[1],technical,mental,physical);NewRandom();
var player364 = new Player("27","אופק בלס",position[1],technical,mental,physical);NewRandom();
var player365 = new Player("15","אלון אזוגי",position[1],technical,mental,physical);NewRandom();
var player366 = new Player("2","בן ביטון",position[1],technical,mental,physical);NewRandom();
var player367 = new Player("18","דורון ליידנר",position[1],technical,mental,physical);NewRandom();
var player368 = new Player("14","דני גרופר",position[1],technical,mental,physical);NewRandom();
var player369 = new Player("2","סתיו למקין",position[1],technical,mental,physical);NewRandom();
var player370 = new Player("51","אופק ביטון",position[2],technical,mental,physical);NewRandom();
var player371 = new Player("18","אושר דוידה",position[2],technical,mental,physical);NewRandom();
var player372 = new Player("28","אחמד מצרי",position[2],technical,mental,physical);NewRandom();
var player373 = new Player("77","אלפא קונטה",position[2],technical,mental,physical);NewRandom();
var player374 = new Player("11","דן איינבינדר",position[2],technical,mental,physical);NewRandom();
var player375 = new Player("5","יואב הופמייסטר",position[2],technical,mental,physical);NewRandom();
var player376 = new Player("23","ליאון מזרחי",position[2],technical,mental,physical);NewRandom();
var player377 = new Player("8","עידן ורד",position[2],technical,mental,physical);NewRandom();
var player378 = new Player("28","פארליי רוסה",position[2],technical,mental,physical);NewRandom();
var player379 = new Player("6","שי אייזן",position[2],technical,mental,physical);NewRandom();
var player380 = new Player("9","שי אליאס",position[2],technical,mental,physical);NewRandom();
var player381 = new Player("8","שלומי אזולאי",position[2],technical,mental,physical);NewRandom();


var hapoelTelAvivPlayers=[player354,player355,player356,player357,player358,player359,player360,player361,player362,player363,player364,player365,player366,player367,player368,player369,player370,player371,player372,player373,player374,player375,player376,player377,player378,player379,player380,player381]