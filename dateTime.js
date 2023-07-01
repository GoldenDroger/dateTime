
let hrshand=document.querySelector('.hr');
let minhands=document.querySelector('.min');
let sechands=document.querySelector('.sec');




let ticking = function(){

    let currentDate=new Date();
    let hours=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
   
    hrshand.textContent=hours;
    minhands.textContent=minutes;
    sechands.textContent=seconds;

    console.log(hrshand,minhands,sechands);

}

setInterval(ticking,1000);
