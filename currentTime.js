//Functions to write and update current time on digital clock.

function getCurrentDate(){
    var currentDate = new Date();
    return currentDate;
}
function writeCurrentTime(ctx){
    date = getCurrentDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    writeTime(ctx, hours, minutes);
}
function writeCurrentTimeClean(){
    date = getCurrentDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    writeTime(ctx, hours, minutes);
}
function currentTimeLoop(){
    menuState = [0,0,0];
    clearInterval(globalState.currentInterval);
    globalState.currentInterval = setInterval(writeCurrentTimeClean, 1000);    
}