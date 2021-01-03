var gameProgress={level1:1,level2:2,level3:3,level4:4,level5:5,level6:6,level7:7,level8:8,level9:9,level10:10,level11:11,level12:12,level13:13,levelmax:14},computer=1,userLevel=1,isOn=!1,playdemo=[],usrselect=[],backgroundThemes=["#fd3a69","black"],bgColor=backgroundThemes[0];function registerKeys(e){usrselect.push(e)}function dbg(){console.log("Level stage "+computer),console.log("user lvl: "+userLevel),console.log("array "+playdemo),console.log("arrayplayer "+usrselect)}function robotPlay(){var e=0,o=setInterval(function(){playSound(playdemo[e]),pressAnime(playdemo[e]),++e===computer&&($("h1").text("Go on now 👀"),clearInterval(o))},1e3)}function setLevel(e){switch(e){case 1:computer=gameProgress.level1;break;case 2:computer=gameProgress.level2;break;case 3:computer=gameProgress.level3;break;case 4:computer=gameProgress.level4;break;case 5:computer=gameProgress.level5;break;case 6:computer=gameProgress.level6;break;case 7:computer=gameProgress.level7;break;case 8:computer=gameProgress.level8;break;case 9:computer=gameProgress.level9;break;case 10:computer=gameProgress.level10;break;case 11:computer=gameProgress.level11;break;case 12:computer=gameProgress.level12;break;case 13:computer=gameProgress.level13;break;default:computer=gameProgress.levelmax}$("p").text("Level "+e)}function pressAnime(e){var o=$("."+e).css("background-color");$("body").css("background-color",o),$("."+e).addClass("pressed"),setTimeout(function(){$("."+e).removeClass("pressed"),$("body").css("background-color",bgColor)},200)}function playSound(e){switch(e){case"btn1":new Audio("sounds/btn1.wav").play();break;case"btn2":new Audio("sounds/btn2.wav").play();break;case"btn3":new Audio("sounds/btn3.wav").play();break;case"btn4":new Audio("sounds/btn4.wav").play()}}function checkGame(e){playdemo.length===usrselect.length?compare(playdemo,usrselect)?win():lose():isOn&&(compare(usrselect,playdemo)||lose())}function RandomDemos(e){for(var o=0;o<e;o++){var s=Math.random();assignDemmos(s=Math.floor(4*s+1))}}function assignDemmos(e){switch(e){case 1:playdemo.push("btn1");break;case 2:playdemo.push("btn2");break;case 3:playdemo.push("btn3");break;case 4:playdemo.push("btn4");break;default:console.log("assign demos error")}}function lose(){$("h1").text("LOSEEER! press 'A' key to continue"),userLevel=1,new Audio("sounds/error.wav").play(),colorAlert("red",400),$("h1").css("color","red")}function win(){$("h1").text("Win! press 'A' key to continue"),userLevel++,$("h1").css("color","lime"),colorAlert("lime",400)}function clear(){playdemo=[],usrselect=[],$("h1").css("color","white")}function compare(e,o){for(var s=0;s<e.length;s++)if(e[s]!=o[s])return!1;return!0}function colorAlert(e,o){$("body").css("background-color",e),setTimeout(function(){$("body").css("background-color",bgColor)},o)}$("button").click(function(e){var o=e.target;playSound(o.classList[0]),pressAnime(o.classList[0]),registerKeys(o.classList[0]),checkGame(o.classList[0])}),$(document).on("keypress",function(e){"a"!=e.key&&"A"!=e.key||(isOn=!0,clear(),setLevel(userLevel),$("h1").text("👂Listen and 👀 watch....."),RandomDemos(computer),console.log(playdemo),robotPlay()),"e"!=e.key&&"E"!=e.key||(clear(),isOn=!1,$("h1").text("Press 'A' to continue the game"))}),$("h3").on("click",function(){isOn=!0,clear(),setLevel(userLevel),$("h1").text("👂Listen and 👀 watch....."),RandomDemos(computer),console.log(playdemo),robotPlay()});var Darktheme=!1;function changeColor(e,o,s){"element"===s?$(e).css("background-color",o):"class"===s?$("."+e).css("background-color",o):"tag"===s&&$("#"+e).css("background-color",o)}$(".theme").on("click",function(){(Darktheme=!Darktheme)?(changeColor("body",bgColor=backgroundThemes[1],"element"),$(".theme").text("Go Light")):(changeColor("body",bgColor=backgroundThemes[0],"element"),$(".theme").text("Go Dark"))});
