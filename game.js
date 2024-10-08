

   
 var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
var gamePattern = [];



   
var userClicked=[];
$('.btn').on('click',function(event){
var buttonPressed=$(this).attr('id');
userClicked.push(buttonPressed);
animate(buttonPressed);
playSound(buttonPressed);
checkAnswer(userClicked.length-1)
})



var array=['green','red','yellow','blue']



function nextSequence() {
      userClicked = [];

  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

 
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosen = array[randomNumber];
  gamePattern.push(randomChosen);

  $("#" + randomChosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosen);
}





function playSound(btn){


var audio=new Audio(`./sounds/${btn}.mp3`)
audio.play();}

function animate(btn){
    $(`.${btn}`).addClass('pressed');
    setTimeout(() => {
      $(`.${btn}`).removeClass('pressed');   
    },200);

}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClicked[currentLevel]) {
      if (userClicked.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }

      else{    playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startover();
    }

//         {  var audio= new Audio('./sounds/wrong.mp3');
//       audio.play();
//       startover();
//       $("#level-title").text("Game over press any key to continue" );

//  console.log('wrong')
        


}

function startover() {
  gamePattern = [];
  userClicked = [];
  started = false;
  level = 0;
  $("#level-title").text("Press A Key to Start");
}
