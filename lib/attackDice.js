
var attackRoll = function(dieSize){
  var roll = Math.ceil(dieSize*Math.random());
  if (roll == 20) {
    console.log(roll);
    document.getElementById("value").innerHTML = "Critical Hit! Roll all damage dice twice!";
  } else {
    console.log(parseInt(getQueryVariable("proficiencyModifier")));
    console.log(parseInt(getQueryVariable("abilityModifier")));
  var result = roll + parseInt(getQueryVariable("abilityModifier")) + parseInt(getQueryVariable("proficiencyModifier"));
  document.getElementById("value").innerHTML = result;
  }
};
