var gameProgress = {

  level1: 1,
  level2: 2,
  level3: 3,
  level4: 4,
  level5: 5,
  level6: 6,
  level7: 7,
  level8: 8,
  level9: 9,
  level10: 10,
  level11: 11,
  level12: 12,
  level13: 13,
  levelmax: 14
};

var computer = 1; //dont change computed value
var userLevel = 1;
var isOn = false;
var playdemo = [];
var usrselect = [];
var backgroundThemes = ["#fd3a69", "black"];
var bgColor = backgroundThemes[0];
$("button").click(function(event) {
  var btn = event.target;
  playSound(btn.classList[0]);
  pressAnime(btn.classList[0]);
  registerKeys(btn.classList[0]);
  checkGame(btn.classList[0]);

});


function registerKeys(btn) {
  usrselect.push(btn);
}

$(document).on("keypress", function(event) {

  if (event.key == "a" || event.key == "A") {
    isOn = true;
    clear();
    setLevel(userLevel);

    //title change
    $("h1").text("👂Listen and 👀 watch.....");
    //gen random array of btn according to level

    RandomDemos(computer);
    console.log(playdemo);

    //play
    robotPlay();

    //change text


  }
  //check the level
if(event.key == "e" || event.key == "E"){
  clear();
  isOn = false;
  $("h1").text("Press 'A' to continue the game");
}


});



function dbg() {
  console.log("Level stage " + computer);
  console.log("user lvl: " + userLevel);
  console.log("array " + playdemo);
  console.log("arrayplayer " + usrselect);

}

function robotPlay() {

  var counter = 0;
  var i = setInterval(function() {
    playSound(playdemo[counter]);
    pressAnime(playdemo[counter]);
    counter++;
    if (counter === computer) {
      $("h1").text("Go on now 👀");
      clearInterval(i);
    }
  }, 1000);



}




function setLevel(lvl) {

  switch (lvl) {
    case 1:
      computer = gameProgress.level1;
      break;
    case 2:
      computer = gameProgress.level2;
      break;
    case 3:
      computer = gameProgress.level3;
      break;
    case 4:
      computer = gameProgress.level4;
      break;
    case 5:
      computer = gameProgress.level5;

      break;
    case 6:
      computer = gameProgress.level6;

      break;
    case 7:
      computer = gameProgress.level7;

      break;
    case 8:
      computer = gameProgress.level8;

      break;
    case 9:
      computer = gameProgress.level9;

      break;
    case 10:
      computer = gameProgress.level10;

      break;
    case 11:
      computer = gameProgress.level11;

      break;
    case 12:
      computer = gameProgress.level12;

      break;
    case 13:
      computer = gameProgress.level13;

      break;

    default:
      computer = gameProgress.levelmax;

  }

  $("p").text("Level " + lvl);

}


function pressAnime(btn) {
  //  console.log(btn);
  var bg = $("." + btn).css("background-color");
  $("body").css("background-color", bg);
  $("." + btn).addClass("pressed");
  setTimeout(function() {
    $("." + btn).removeClass("pressed");
    $("body").css("background-color", bgColor);
  }, 200);


}


function playSound(char) {

  switch (char) {
    case "btn1":
      var audio = new Audio("sounds/btn1.wav");
      audio.play();
      break;
    case "btn2":
      var audio = new Audio("sounds/btn2.wav");
      audio.play();
      break;

    case "btn3":
      var audio = new Audio("sounds/btn3.wav");
      audio.play();
      break;
    case "btn4":
      var audio = new Audio("sounds/btn4.wav");
      audio.play();
      break;
    default:

  }

}


function checkGame(btn) {

  if (playdemo.length === usrselect.length) {
    if (compare(playdemo, usrselect)) {
      win();
    } else {
      //lose
      lose();
    }

  } else {
    //run always
    if (isOn) {
      if (!(compare(usrselect, playdemo))) {
        lose();
      }
    }
  }
}

//========================================================================RandomGameLogic

function RandomDemos(stage) {

  for (var i = 0; i < stage; i++) {
    var random = Math.random();
    random = Math.floor((random * 4) + 1);
    assignDemmos(random);
  }
}


function assignDemmos(rand) {

  switch (rand) {
    case 1:
      playdemo.push("btn1");
      break;
    case 2:
      playdemo.push("btn2");
      break;
    case 3:
      playdemo.push("btn3");
      break;
    case 4:
      playdemo.push("btn4");
      break;
    default:
      console.log("assign demos error");

  }

}



//============================================================================ Helpers
function lose() {
  $("h1").text("LOSEEER! press 'A' key to continue");
  userLevel = 1;
  var audio = new Audio("sounds/error.wav");
  audio.play();
  colorAlert("red", 400);
  $("h1").css("color", "red");
}

function win() {
  $("h1").text("Win! press 'A' key to continue");
  userLevel++;
  $("h1").css("color", "lime");
  colorAlert("lime", 400);
}

function clear() {

  playdemo = [];
  usrselect = [];
  $("h1").css("color", "white");

}


function compare(ar1, ar2) {

  for (var i = 0; i < ar1.length; i++) {
    if (ar1[i] != ar2[i])
      return false;
  }
  return true;
}

function colorAlert(color, delay) {
  $("body").css("background-color", color);

  setTimeout(function() {
    $("body").css("background-color", bgColor);
  }, delay);

}

var Darktheme = false;
$(".theme").on("click", function() {

  Darktheme = !Darktheme;

  if (Darktheme) {
    bgColor = backgroundThemes[1];
    changeColor("body", bgColor, "element");
    $(".theme").text("Go Light")

  } else {

    bgColor = backgroundThemes[0];
    changeColor("body", bgColor, "element");
    $(".theme").text("Go Dark")

  }



});


function changeColor(object, color, type) {
  if (type === "element") {
    $(object).css("background-color", color);
  } else if (type === "class") {
    $("." + object).css("background-color", color);
  } else if (type === "tag") {
    $("#" + object).css("background-color", color);
  }

}
//end of file
