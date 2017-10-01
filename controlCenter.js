//Calls all other branches according to user input.
//Loads with current time.

function startListeners(){
    document.addEventListener("keydown", processKeyDown, false); //Only one key at a time.
    document.addEventListener("keyup", processKeyUp, false); //Only one key at a time.
    globalState.switchInterval = setInterval(setSwitchBool, 100);
}

currentTimeLoop();

startListeners();

function dispatcher(button){
    switch(menuState[0]){
    case 0: //Main menu - clock default display
	mainMenu(button); // BEING IMPLEMENTED
	break;
    case 1: //Timer menu - timer at 0 default display
	timerMenu(button); // BEING IMPLEMENTED
	break;
    case 2: //Chess clock menu - chess clock at 5min default display
	chessMenu(button); // NOT IMPLEMENTED
	break;
    case 3: // Overwatch menu - to be determined
	overwatchMenu(button); // NOT IMPLEMENTED
	break;
    default:
	alert("dispatcher error");
    }
}

function mainMenu(button){
    if(!globalState.switching){mainMenu0(button);}
    displayText("mainMenu");
    displayText(globalState.switching);
}

function activateSwitching(){
    
}

function mainMenu0(button){
    switch(button){
    case "leftShort":
	mainMenu0LeftShort();
	break;
    case "leftLong":
	mainMenu0LeftLong();
	break;
    case "right":
	mainMenu0Right();
	break;
    default:
	alert("mainMenu0 error");
    }
}

function mainMenu0LeftShort(){
    alert("leftShort");
}

function mainMenu0LeftLong(){
    alert("leftLong");
}

function mainMenu0Right(){
    alert("right");
}

function timerMenu(button){
    displayText("timerMenu");
}

function chessMenu(button){
    displayText("chessMenu");
}

function overwatchMenu(button){
    displayText("chessMenu");
}

function switchingCheck(){ // checks if last keypress was more than 3 seconds ago.    
    var elapsedTime = Date.now() - globalState.lastKeyUpTime;
    if(elapsedTime < 3000){return true;}
    return false;
}

function setSwitchBool(){ // updates switching boolean in global state
    globalState.switching = switchingCheck();
}