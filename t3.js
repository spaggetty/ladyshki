//вообщем то да, получилось что программа берёт не 5 рандомных файлов с вопросом, а просто перемешивает


var coll=0;
var arqe = [];

//генерим вопросы с 0 до 5 рандомно
for (var i = 0; i < 5; i++)
  arqe.push(i);
shuffl(arqe);
console.log(arqe);



var fs = require('fs');

for (var b = 0; b < 5; b++)
{
var array = fs.readFileSync(arqe[b] + ".txt" , "utf8").toString().split("\n");

console.log('текст вопроса',array[0]);

var verques = array[1];

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
  var currentIndex = array.length, temporaryValue, randomIndex ;


  while (0 !== currentIndex) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;


    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}