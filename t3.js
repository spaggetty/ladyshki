//а что если земля не круглая?)

const fs = require('fs');
let gm = fs.readdirSync('./qest/'); // получаем список файлов в папке


let coll=0;
let arqe = [];

//мешаем все вопросы из папки и оставляем 5 вопросов
for (let i = 0; i < gm.length; i++)
  arqe.push(i);
shuffl(arqe);

arqe = arqe.slice(0,5);
//console.log(arqe);



for (let b = 0; b < 5; b++)
{
let array = fs.readFileSync("./qest/" + arqe[b] + ".txt" , "utf8").toString().split("\n");

console.log('текст вопроса',array[0]);

let verques = array[1];

verques= verques.trim();
console.log(verques);

console.log('варианты ответов');
for (let i=2;i<array.length;i++)
{
	console.log(array[i]);
}



const readlineSync = require('readline-sync');
const ansver = readlineSync.question('ваш ответ ');

if(verques==ansver)
{
	console.log('ваш ответ правильный');
	coll++;
}
else
{
	console.log('ваш ответ неправильный');
}

console.log('количество правильных ответов: ', coll);
}

//рандом с неповторяющимися числами
function shuffl(array) {
  let currentIndex = array.length, temporaryValue, randomIndex ;


  while (0 !== currentIndex) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;


    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}