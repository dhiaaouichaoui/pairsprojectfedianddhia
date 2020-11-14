$(document).ready(function(){
function clock() {
var time = new Date();
    var hours = time.getHours();
   var minutes = time.getMinutes();
    var seconds = time.getSeconds();
document.querySelector('.clock').innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
 } 
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
clock()

/*
 document.querySelector("myButton").onclick = function () {
        location.href = "https://www.timeanddate.com/calendar/";
      }
    */
     
$(".time").on("click", function() {
     var date = new Date();
     console.log(date)
     $(".time-holder")[0].value = date.toString();
})
        
    })


