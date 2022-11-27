let hourel=document.getElementById("hours");
let minel=document.getElementById("minutes");
let secel=document.getElementById("seconds");
let ampmel=document.getElementById("ampm");

const updateClock=()=>{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM"

    if(h>12){
        h=h-12;
        ampm="PM"
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hourel.innerText=h;
    minel.innerText=m;
    secel.innerText=s;
    ampmel.innerText=ampm;
setTimeout(()=>{
updateClock();
},1000)
}

updateClock();
