var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');

var app = {};

app.config = {
  'timebetweeJokes' : 1000
};

app.printAJoke = function() {


    var allJokes = jokesLib.allJokes();

    var numberOfJokes = allJokes.length;

    var randomNumber = mathLib.getRandomnumber(1,numberOfJokes);

    var selectedJokes = allJokes[randomNumber - 1];

    console.log(selectedJokes);
};

app.indefiniteLoop = function(){
  setInterval(app.printAJoke,app.config.timebetweeJokes);
};

//app.printAJoke();
app.indefiniteLoop();
