var url = require ('url');
var http = require ('http');
var q = url.parse(req.url, true).query;

var monsterAC = process.argv[2];
var abilityModifier = q.abilityModifier;
var proficiencyModifier = q.proficiencyModifier;

var attackRoll = function(dieSize){
  var roll = Math.ceil(dieSize*Math.random());
  if (roll == 20) {
    console.log(roll);
    console.log("Critical Hit! Roll all damage dice twice!");
  } else {
  var result = roll + parseInt(abilityModifier) + parseInt(proficiencyModifier);
  console.log("Rolling the die!");
  console.log(result);
  if (result >= monsterAC) {
    console.log("Your attack hit!");
  } else {
    console.log("Your attack missed!");
    }
  }
};

var showResult = function() {
  console.log(firstDie);
  };

var firstDie = attackRoll(20);


document.getElementById("value").innerHTML = roll(click);
