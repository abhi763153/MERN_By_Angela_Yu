
var superheroes = require("superheroes");
const hero2 = require("marvel-dc-name-generator");
const villains = require("supervillains");

var name = superheroes.random();
var name2 = hero2.generate();
let villain = villains.random();

console.log(name);
console.log(name2);
console.log(villain);