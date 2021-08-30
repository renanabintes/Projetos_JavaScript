const prompt = require('prompt-sync')();

let resp = 0;
let p1 = prompt("Você telefonou para a vítima? [Sim ou Não]").slice(0,1).toUpperCase();
if (p1 == 'sim');
  resp += 1;
  
let p2 = prompt("Você esteve no local do crime? [Sim ou Não]").slice(0,1).toUpperCase();
if (p2 == 'sim');
  resp += 1;


let p3 = prompt("Você mora perto da vítima? [Sim ou Não]").slice(0,1).toUpperCase();
if (p3 == 'sim');
  resp += 1;


let p4 = prompt("Você devia para a vítima? [Sim ou Não]").slice(0,1).toUpperCase();
if (p4 == 'sim');
  resp += 1;


let p5 = prompt("Você já trabalhou com a vítima? [Sim ou Não]").slice(0,1).toUpperCase();
if (p5 == 'sim');
  resp += 1;

// resp = resposta
// p = pergunta

if (resp == 2)
  console.log('"Suspeita"')
else if (resp == 3 || resp == 4)
  console.log('"Cúmplice"')
else if (resp == 5)
  console.log('"Assassino"')
else
  console.log('"Inocente"')