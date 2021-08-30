function Player(name,number,position,attack,defence){
    {
        this.name = name;
        this.number = number;
        this.position = position;
        this.attack = attack;
        this.defence = defence;
        this.GetAttack = function(){
            return this.attack;
        }
        this.GetDefence = function(){
            return this.defence;
        }
        this.GetPosition = function(){
            return this.position;
        }
    }
    
 
    
}
var position = ['goal-keeper','back','center','forward']

var player1 = new Player('גוש כהן','40',position[0],0,9);
var player2 = new Player('איתמר ישראלי','41',position[0],0,9);
var player3 = new Player('בוגדן פלאניץ','5',position[1],0,9);
var player4 = new Player('סאן מנחם','12',position[1],3,9);
var player5 = new Player('רמי גרשון','5',position[1],3,9);
var player6 = new Player('עפרי ארד','15',position[1],3,9);
var player7= new Player('שון גולדברג','13',position[1],5,5);
var player8= new Player('אורי דהן','6',position[1],5,5);
var player9= new Player('ראיין סטריין','0',position[1],5,5);
var player10 = new Player('רז מאיר','25',position[1],9,3);
var player11 = new Player('רוני לאופר','0',position[1],9,3);
var player12 = new Player('טאלב טוואטחה','17',position[1],9,3);
var player13 = new Player('חוסה רודריגס','8',position[2],9,3);
var player14 = new Player('יובל אשכנזי','18',position[2],9,3);
var player15 = new Player('מאור לוי','33',position[2],9,3);
var player16 = new Player('נטע לביא','6',position[2],9,3);
var player17 = new Player('צירון שרי','10',position[2],9,3);
var player18 = new Player('עומר אצילי','7',position[2],9,3);
var player19 = new Player('עלי מוחמד','55',position[2],9,3);
var player20 = new Player('אבו פאני','16',position[2],9,3);
var player21 = new Player('גודסווי דוניו','11',position[3],9,3);
var player22 = new Player('בן סהר','24',position[3],9,3);
var player23 = new Player('דין דוד','99',position[3],9,3);
var haifaPlayers = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20,player21,player22,player23]

console.log(haifaPlayers)


