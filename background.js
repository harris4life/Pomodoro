

const ZERO_SECS = 0;
const SECS_RESET_VALUE = 59;

var numberOfPomodorosCompleted = 0;
var workPeriodOverSound = new Audio('Stroll.wav');
var breakPeriodOverSound = new Audio('Reminder.wav');
var whatPeriodIsItCurrently = "";




document.getElementById("mins").innerHTML = "Mins";
document.getElementById("secs").innerHTML = "Secs";

//Function for when Cancellation Icon is clicked.
document.getElementById("pauseIcon").onclick = function(){
window.alert("Timer was Paused.");
};

workTime();





function skipCurrPeriod(){
  if(whatPeriodIsItCurrently=="work"){
    breakTime();
  }

  else{
     workTime();
  }
}



// ************ WORK TIME CODE  ************************ ////


function workTime(){

  whatPeriodIsItCurrently = "work";


  document.getElementById("body").style.backgroundColor = "#ffa366";
  document.getElementById("currentPeriod").style.color = "ffa366";
  document.getElementById("currentPeriod").innerHTML = "WORK";


  //starting timer values (25 mins)
  var currWorkSecs = 59;
  var currWorkMins = 24;

var workTimeTimer = setInterval(

      function(){


        document.getElementById("mins").innerHTML = currWorkMins;
        document.getElementById("secs").innerHTML = currWorkSecs;

        console.log("sec passed");


        //Stops the timer
        if((currWorkMins == 0) && (currWorkSecs == 0)){
          console.log("stop timer ENTERED");
          workPeriodOverSound.play();
          numberOfPomodorosCompleted++;
          document.getElementById("pomoNumber").innerHTML = numberOfPomodorosCompleted;
          breakTime();
          clearInterval(workTimeTimer);

        }


        //If entire minute has gone by, dec currMins by 1. Reset currSecs to 60
        if((currWorkSecs == ZERO_SECS) && (!(currWorkMins==0))){
          console.log("stop timer ENTERED");
          currWorkMins--;
          currWorkSecs = SECS_RESET_VALUE;
        }
        currWorkSecs--;



      }, 1000 //End function() parameter inside setInterval, and set second param of setInterval() to 1000

  ); //Close setInterval()

  // ************ WORK TIME CODE END ************************ ////


}//close workTime()





















  // ************ BREAK TIME CODE  ************************ ////









function breakTime(){

  whatPeriodIsItCurrently = "break";
  //Check if its time for a LONGER BREAK.(Every 3 pomo's)
  if(numberOfPomodorosCompleted%3==0){
    currBreakMins=15;
    currBreakSecs=SECS_RESET_VALUE;
    document.getElementById("currentPeriod").innerHTML = "LONG BREAK";


  }else{
  document.getElementById("currentPeriod").innerHTML = "BREAK";
  }

  document.getElementById("body").style.backgroundColor = "skyblue";
  document.getElementById("currentPeriod").style.color = "ffa366";







  //starting timer values (25 mins)
  var currBreakMins = 4;
  var currBreakSecs = SECS_RESET_VALUE;





  var breakTimeTimer = setInterval(

        function(){

            document.getElementById("mins").innerHTML = currBreakMins;
            document.getElementById("secs").innerHTML = currBreakSecs;

          //Stops the timer
          if((currBreakMins == 0) && (currBreakSecs == 0)){
            breakPeriodOverSound.play();
              workTime();
              clearInterval(breakTimeTimer);
          }

          //If entire minute has gone by, dec currMins by 1. Reset currSecs to 60
          if((currBreakSecs == ZERO_SECS) && !(currBreakMins==0)){
            currBreakMins--;
            document.getElementById("mins").innerHTML = currBreakMins;
            currBreakSecs = SECS_RESET_VALUE;
          }

          currBreakSecs--;

        }, 1000 //End function() parameter inside setInterval, and set second param of setInterval() to 1000

    ); //Close setInterval()






}//Close breakTime()







  // ************ BREAK TIME CODE  ************************ ////
