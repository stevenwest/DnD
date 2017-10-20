var abilityModifier = q.abilityModifier;

var dieRoll = function (dieSize) {
  console.log("Rolling the die!");
  var result = Math.ceil(dieSize * Math.random()) + parseInt(abilityModifier);
  console.log(result);
};


//added to cover 2d6 dice rolls.

var diceRoll = function(dieSize) {
  console.log("Rolling the dice!");
  var result = Math.ceil(dieSize * Math.random()) + Math.ceil(dieSize * Math.random()) + parseInt(abilityModifier);
  console.log(result);
}

var oneDFourRoll = dieRoll(4);
var oneDSixRoll = dieRoll(6);
var oneDEightRoll = dieRoll(8);
var oneDTenRoll = dieRoll(10);
var oneDTwelveRoll = dieRoll(12);
var twoDSixRoll= diceRoll(6);
