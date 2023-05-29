function getGreeting(){

var date = new Date ();
var hours = date.getHours();
var greeting;
if(hours>=0 && hours<12){

greeting="good morning";

}
else if (hours>=12 && hours < 18){


greeting="good afternoon";

}
else{
    greeting="good night";
}
return greeting;

}
function displayGreeting(){
    var greeting=getGreeting();
    document.getElementById("greeting").textContent=greeting;
}