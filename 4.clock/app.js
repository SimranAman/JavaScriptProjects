function display_time()
 {  var date = new Date();
    let currHour = date.getHours();
    let currMins = date.getMinutes();
    let curSeconds = date.getSeconds();
  //let currMillisec = date.getMilliseconds();
    let Period;
    
    
    if(currHour<10){
        currHour = "0"+currHour;
       }
    if(currMins<10){
        currMins = "0"+currMins;
       }
    if(curSeconds<10){
    curSeconds = "0"+curSeconds;
   }
  
    if(currHour<12){
     Period= "AM"
    }else{
        currHour = currHour -12;

        Period= "PM" 
    }
    document.getElementById("Hour").innerText = currHour;
    document.getElementById("Minute").innerText = currMins;
    document.getElementById("seconds").innerText = curSeconds;
   //document.getElementById("mseconds").innerText = currMillisec;
    document.getElementById("period").innerText = Period;
    
    

}

setInterval(display_time,100)


function Months(){
var date = new Date();
const days = ["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"]
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];   
 let currDate = date.getDate();
 let currMonth = month[date.getMonth()];
 let curyear = date.getFullYear();
 let currDay = days[date.getDay()]
 document.getElementById("currDay").innerText = currDay;
document.getElementById("Day").innerText = currDate;
document.getElementById("Month").innerText = currMonth;
document.getElementById("Year").innerText = curyear;
}
Months();