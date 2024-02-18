/*function userInput(){
  const target_Date=  document.getElementById("Input").value;
  return target_Date= Date();
}*/


function updateCountdown(){
const current_Date = new Date();
const target_Date = new Date('2024/02/19,22:59:59');
const difference = target_Date - current_Date;

const days= Math.floor(difference/(1000*60*60*24));
const hours= Math.floor((difference%(1000*60*60*24)/(1000*60*60)));
const minutes= Math.floor((difference%(1000*60*60)/(1000*60)));
const seconds= Math.floor((difference%(1000*60)/(1000)));

document.getElementById("days").innerText= days;
document.getElementById("hours").innerText= hours;
document.getElementById("mins").innerText= minutes;
document.getElementById("secs").innerText= seconds;
if (difference <0) {
    clearInterval(interval);
    document.getElementById("timer").innerText="The event is started";}
}
const interval = setInterval(updateCountdown,1000);

