function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}



var dieRoll = function (dieSize) {
   result = Math.ceil(dieSize * Math.random()) + parseInt(getQueryVariable("abilityModifier"));
  document.getElementById("value").innerHTML = result;
};


//added to cover 2d6 dice rolls.

var diceRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random()) + Math.ceil(dieSize * Math.random()) + parseInt(getQueryVariable("abilityModifier"));
  console.log(result);
  document.getElementById("value").innerHTML = result;
}
