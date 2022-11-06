var started = false;
var soundNum = 0;

var color=["green", "red", "pink", "yellow", "blue", "orange"];
var sound=[1,2,3,4,5,6];
var ms;var colornum=0;
var randomString=[6,5,4,3,2,1];


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text(" ");
    started = true;
  }
  soundNum++;
});

console.log(randomString);

$(document).keypress(function() {
  if (soundNum==1) {
    playSound(soundNum);
    $("#" + color[soundNum-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});


$(document).keypress(function() {
  if (soundNum==2) {
    playSound(soundNum);
    $("#" + color[soundNum-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  

  }
 // soundNum++;
});


$(document).keypress(function() {
  if (soundNum==3) {
    playSound(soundNum);
    $("#" + color[soundNum-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});


$(document).keypress(function() {
  if (soundNum==4) {
    playSound(soundNum);
    $("#" + color[soundNum-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});


$(document).keypress(function() {
  if (soundNum==5) {
    playSound(soundNum);
    $("#" + color[soundNum-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});


$(document).keypress(function() {
  if (soundNum==6) {
    playSound(soundNum);
    $("#" + color[soundNum-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});



$(document).keypress(function() {
  if (soundNum==7) {
    playSound(randomString[0]);
   // $("#" + color[randomString[0]-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});

$(document).keypress(function() {
  if (soundNum==8) {
    playSound(randomString[1]);
  //  $("#" + color[randomString[1]-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});

$(document).keypress(function() {
  if (soundNum==9) {
    playSound(randomString[2]);
  //  $("#" + color[randomString[2]-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});
$(document).keypress(function() {
  if (soundNum==10) {
    playSound(randomString[3]);
  //  $("#" + color[randomString[3]-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});
$(document).keypress(function() {
  if (soundNum==11) {
    playSound(randomString[4]);
  //  $("#" + color[randomString[4]-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});
$(document).keypress(function() {
  if (soundNum==12) {
    playSound(randomString[5]);
 //   $("#" + color[randomString[5]-1]).fadeIn(100).fadeOut(100).fadeIn(100);
  }
 // soundNum++;
});


var userClickedPattern=[];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(color.indexOf(userChosenColour)+1);
   console.log(userClickedPattern);
 console.log(randomString);
 
  playSound(color.indexOf( userChosenColour)+1);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (randomString[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === randomString.length){
      win();
      startOver();
      }

    } 
    else {

      console.log("wrong");

      //playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function playSound(index) {
  var audio = new Audio("sounds/" + index + ".mp3");
  audio.play();
}

function win()
{
  $("body").addClass("win");
      setTimeout(function () {
        $("body").removeClass("win");
      }, 200);
      $("#level-title").text("You Won!!, Press Any Key to Restart");

}
function startOver() {
  
  started = false;
  soundNum=0;
}