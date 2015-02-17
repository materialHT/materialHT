

window.onload = function() {
    var random = Math.random;
    var userChoice = 0;
    var fate = 0;

    $( "#tailsbutton" ).click(function() {
    tailsclick();});
    
    
    $( "#headbutton" ).click(function() {
    headclick();});

    // Do not touch up ↑
    var headclick = function () {
    userChoice = "head"
    compare();
    }
    
    var tailsclick = function () {
    userChoice = "tails"
    compare();
    }
    
     var fromrandom = function () {
         random = Math.random();
         if (random > 0.50){
            fate = "head"}
         else {
            fate = "tails"}
 }
     
     
     
    var compare = function () {
                fromrandom();

        if (userChoice === fate){
            alert ("You won")
        fromrandom();
        }
        else {
            alert ("You lost")
        fromrandom();
        }
}
    
    fromrandom();



 }


