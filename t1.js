let len = Math.floor(Math.random()*(6-3+1))+3;
let prob = Math.floor(Math.random()*(9-3+1))+3;
let arrs = new Array();
let arrs1 = new Array();
let arruspass = new Array();
let tprob = new Array();
let massnum = new Array();
let massnumnemesto = new Array();
let massnumnemesto1 = new Array();
for (let i=0;i<len;i++)
{
    arrs[i]=String(Math.floor(Math.random()*(8-0+1))+0);
}

console.log('Длина пароля', len);

do
{
console.log('количество попыток', prob);
const readlineSync = require('readline-sync');
const userpass = readlineSync.question('enter password');

arruspass = Array.from(userpass);

console.log('pass', arrs);
console.log('userpass', arruspass);

// проверка на равенство
if(arrs.length == arruspass.length && !arrs.some((v) => arruspass.indexOf(v) < 0)) {
    console.log('пароль угадан');
	break;
} 

var tpro =[];
 
for (let i=0;i<arrs.length;i++){
tpro[i]=arrs.includes(arruspass[i]);
if (tpro[i]==true)
{
    tpro[i]=i; 
}
}
 
tprob = tpro.filter(element => element !== false); // костыль
 
console.log(tprob);
for (let i=0;i<tprob.length;i++){
 if (arrs[tprob[i]]==arruspass[tprob[i]])
 {
    massnum.push(arrs[tprob[i]]);
    tprob.splice(i, 1, ""); //костыль
 } 
}
 
massnumnemesto = tprob.filter(element => element !== ""); // костыль
console.log(massnumnemesto);
for(let i=0;i<massnumnemesto.length;i++){           //костыыыыль
    massnumnemesto1[i]=arruspass[massnumnemesto[i]];
}
 
console.log('Элементы стоящие на своих местах', "(" ,massnum.length,")", massnum); //выводит лишнее мне лень переделывать :В
console.log('Элементы стоящие не на своих местах',  "(" ,massnumnemesto1.length,")", massnumnemesto1);

prob--;
} while (prob>0)
	console.log('конец');