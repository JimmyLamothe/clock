/*
Determines if button 1 or 2 was pressed and for how long.
Returns answer as string, or pass if wrong input.
Left && >350ms --> leftLong
Left && <350 --> leftShort
Right --> right
*/

function whichButton(event, pressTime){
    //    alert("pressTime = " + pressTime);
    var button = event.keyCode;
    if(button == "37" && pressTime > 350){return "leftLong";}
    else if(button == "37"){return "leftShort";}
    else if(button == "39"){return "right";}
    return("pass");
}
function alertButton(event){
    var button = whichButton(event);
    if (button != "pass")
	{
	    alert(button);
	}
}
function interrupt(){
    globalState.interrupt = true;
    clearInterval(globalState.currentInterval);
    clearInterval(globalState.currentTextInterval);
    globalState.currentInterval = "";
    globalState.currentTextInterval = "";
}
function returnLength(event){
    alert("keyUp");
    globalState.keyUp = true;
}
function testLength(){
    globalState.keyUp = false;
    var timer = 0;
    var startTime = Date.now();
    var elapsedTime = 0;
    document.addEventListener("keyup", returnLength, false);
    while (!globalState.keyUp && elapsedTime < 1000){
	elapsedTime = Date.now() - startTime;
    }
    alert(elapsedTime);
}
function processButton(event){
    alert(menuState);    
    var button = whichButton(event);
    if (button == "left"){
	testLength();
	interrupt();
	startTimer(ctx, 900);
    }
    else if (button == "right"){
	interrupt();
	currentTimeLoop();
    }
}