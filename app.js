var hours = document.getElementById("hr")
var minute = document.getElementById("min")
var second = document.getElementById("sec")
var milesecond = document.getElementById("msec")

var stop = document.getElementById("stop");

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer(){
   
    msec ++
    milesecond.innerHTML = msec;
    if(msec == 100){
        sec ++;
        if(sec <  10)
            second.innerHTML = "0"+sec;
        else
            second.innerHTML = sec;
        msec = 00;
    }

    if (sec == 60){
        min++;
        if(min <  10)
            minute.innerHTML = "0"+min;
        else
            minute.innerHTML = min;
       
        sec = 00;
    }
    if(min == 60){
        hr++
        if(hr <10)
        hours.innerHTML ="0"+ hr;
        else
        hours.innerHTML = hr;
        min = 00;
    }
}

function start(btn){
    interval = setInterval(timer, 10);
    btn.disabled = true;

}


function pause(){
    clearInterval(interval)
    stop.disabled = false;
}

function reset (){
    clearInterval(interval)

    milesecond.innerHTML ="00";
    second.innerHTML ="00";
    minute.innerHTML ="00";
    hours.innerHTML ="00";
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    
    
    stop.disabled = false;


}