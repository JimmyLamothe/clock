// Functions to set and start a countdown timer.

function writeTimer(ctx, totalSeconds){
    clearInterval(globalState.currentInterval);
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    writeTime(ctx, minutes, seconds);
    if (totalSeconds > 0 && !globalState.interrupt){
	totalSeconds -= 1;
	globalState.currentInterval = setTimeout(writeTimer, 1000, ctx, totalSeconds);
    }
    else if (globalState.interrupt){
	globalState.interrupt = false;
	clearInterval(globalState.currentInterval);
    }
}
function startTimer(ctx, seconds){
    globalState.interrupt = false;
    menuState = [1,0,0];
    writeTimer(ctx, seconds);
}
