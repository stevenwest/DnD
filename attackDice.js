var monsterAC = 12
var abilityModifier = process.argv[2];
var proficiencyModifier = process.argv[3];

var attackRoll = function(dieSize){
  var result = Math.ceil(dieSize*Math.random())+ parseInt(abilityModifier) + parseInt(proficiencyModifier);
  console.log("Rolling the die!");
  console.log(result);
  if (result >= monsterAC) {
    console.log("Your attack hit!");
  } else {
    console.log("Your attack missed!");
  }
};

var showResult = function() {
  console.log(firstDie);
  };

var firstDie = attackRoll(20);