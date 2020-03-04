const readlineSync = require('readline-sync');
const difficulty = readlineSync.question('enter game difficulty (1-3)');
console.log('hi your difficulty :', difficulty);
const eva = {
        maxHealth: difficulty * 5,
        name: "Евстафий ",
		moves: [
            {
                "name": "Censer Strike",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 0,
                "magicArmorPercents": 50,
                "cooldown": 0
            },
            {
                "name": "Pinwheel left heel",
                "physicalDmg": 4,
                "magicDmg": 0,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 4
            },
            {
                "name": "Canonical Fireball",
                "physicalDmg": 0,
                "magicDmg": 5,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3
            },
            {
                "name": "Magic block",
                "physicalDmg": 0,
                "magicDmg": 0,
                "physicArmorPercents": 100,
                "magicArmorPercents": 100,
                "cooldown": 4
            },
        ]
}



const monster = {
        maxHealth: 10,
        name: "Лютый",
        moves: [
            {
                "name": "Claw paw",
                "physicalDmg": 3, // физический урон
                "magicDmg": 0,    // магический урон
                "physicArmorPercents": 20, // физическая броня
                "magicArmorPercents": 20,  // магическая броня
                "cooldown": 0     // ходов на восстановление
            },
            {
                "name": "Fiery breath",
                "physicalDmg": 0,
                "magicDmg": 4,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3
            },
            {
                "name": "Tail strike",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 50,
                "magicArmorPercents": 0,
                "cooldown": 2
            },
        ]
    }

const cdmonstr = {
	moves: [
            {
                "name": "Claw paw",
                "cooldown": 0    
            },
            {
                "name": "Fiery breath",
                "cooldown": 0
            },
            {
                "name": "Tail strike",
                "cooldown": 0
            },
        ]
}

const cdeva = {
	moves: [
            {
                "name": "Censer Strike",
                "cooldown": 0
            },
            {
                "name": "Pinwheel left heel",
                "cooldown": 0
            },
            {
                "name": "Canonical Fireball",
                "cooldown": 0
            },
            {
                "name": "Magic block",
                "cooldown": 0
            },
        ]
}

let wzooh = Math.floor(Math.random()*(3)); //рандомим удар
var temp;
//console.log(wzooh);

while (eva.maxHealth>0 &&monster.maxHealth>0)
{
//---уменьшение кд	
cdmonstmin();	
cdevdamin();
//-------


//cdmonst(wzooh);
	

do
{
for (let i=0; i<3; i++)
{
	if ((cdmonstr.moves[i].cooldown<=0) && (monster.moves[wzooh].name==cdmonstr.moves[i].name))
	{
	//console.log(cdmonstr.moves[i].name);
	temp = cdmonstr.moves[i].name;
	cdmonst(wzooh);
	}
}
wzooh = Math.floor(Math.random()*(3))
}while(temp == null)
temp==null;
console.log("Ход монстра:");
console.log(monster.moves[wzooh]);

//console.log(cdmonstr.moves);

	
console.log('available strokes:');

for (let i=0; i<4; i++)
{
	if (cdeva.moves[i].cooldown<=0)
	{
	//console.log(cdeva.moves[i].name);
	console.log(eva.moves[i]);
	}
}
	

//var readlineSync = require('readline-sync');
var dob = readlineSync.question("your turn (spell name) ");
console.log('your turn:' , String(dob));

var mags = cdevda(dob); //id каста мага

//console.log(cdeva.moves);



/*for (let i=0; i<4; i++)
{
	if (eva.moves[dob-1].name==cdeva.moves[i].name)
	{
		cdeva.moves[i].cooldown=eva.moves[dob-1].cooldown;
	}
}


	console.log("________________");	
//console.log(cdeva.moves);	

for (let i=0; i<4; i++)
{
	if (cdeva.moves[i].cooldown<=0)
	{
	//console.log(cdeva.moves[i].name);
	console.log(eva.moves[i]);
	}
}

*/
/*for (let key in eva)
{
	console.log(eva[key]);
}*/

//monster.maxHealth--;


dmgmag(wzooh,mags);
dmgmonstr(wzooh,mags);

//--- округление хп
monster.maxHealth = Math.floor(monster.maxHealth);
eva.maxHealth = Math.floor(eva.maxHealth);
//---
console.log("ХП монстра:",monster.maxHealth);
console.log("ХП мага:",eva.maxHealth);


//console.log(monster.moves[wzooh].physicArmorPercents);
//console.log(eva.moves[mags].physicalDmg);


}
console.log('игра окончена');

function cdmonst(wzooh){
for (let i=0; i<3; i++)
{
	if (monster.moves[wzooh].name==cdmonstr.moves[i].name)
	{
		cdmonstr.moves[i].cooldown=monster.moves[wzooh].cooldown;
	}
}
}

function cdevda(dob){
	for (let i=0; i<4; i++)	
{
	if (eva.moves[i].name== dob)
	{
	console.log(eva.moves[i].name);
	cdeva.moves[i].cooldown=eva.moves[i].cooldown;
	return i;
	}
}
}

function cdmonstmin(){
for (let i=0; i<3; i++)
{
	if (cdmonstr.moves[i].cooldown>0)
	{
		cdmonstr.moves[i].cooldown--;
	}
}
}

function cdevdamin(){
	for (let i=0; i<4; i++)	
{
	if (cdeva.moves[i].cooldown>0)
	{
	cdeva.moves[i].cooldown--;
	}
}
}

function dmgmonstr(m,n) //monster|mag 
{
	if (monster.moves[m].physicArmorPercents != 0)
	{
		monster.maxHealth = monster.maxHealth - ((monster.moves[m].physicArmorPercents/100) * eva.moves[n].physicalDmg);
	}
	else
	{
		monster.maxHealth = monster.maxHealth - eva.moves[n].physicalDmg;
	}
	
	if (monster.moves[m].magicArmorPercents != 0)
	{
		monster.maxHealth = monster.maxHealth - ((monster.moves[m].magicArmorPercents/100) * eva.moves[n].magicDmg);
	}
	else
	{
		monster.maxHealth = monster.maxHealth - eva.moves[n].magicDmg;
	}
	
	
}

function dmgmag(m,n) //monster|mag
{
	if (eva.moves[n].physicArmorPercents !=0)
	{
		eva.maxHealth = eva.maxHealth - ((eva.moves[n].physicArmorPercents/100) * monster.moves[m].physicalDmg);
	}
	else 
	{
		eva.maxHealth = eva.maxHealth - monster.moves[m].physicalDmg;
	}
	
	if (eva.moves[n].magicArmorPercents !=0)
	{
		eva.maxHealth = eva.maxHealth - ((eva.moves[n].magicArmorPercents/100) * monster.moves[m].magicDmg);
	}
	else 
	{
		eva.maxHealth = eva.maxHealth - monster.moves[m].magicDmg;
	}
}


