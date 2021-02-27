const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date=new Date();
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

hrposition= (hr*360/12)+(min*(360/60)/12);
minposition= (min*360/60)+(sec*(360/60)/60);
secposition=sec*360/60;
    
function runclock(){
    
    hrposition=hrposition+(3/360);
    minposition=minposition+(6/360);
    secposition=secposition+6;

    HOURHAND.style.transform="rotate(" + hrposition + "deg)";
    MINUTEHAND.style.transform="rotate(" + minposition + "deg)";
    SECONDHAND.style.transform="rotate(" + secposition + "deg)";
}

var run=setInterval(runclock,1000);
