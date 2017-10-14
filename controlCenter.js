//Calls all other branches according to user input.
//Loads with current time.

function startListeners(){
    document.addEventListener("keydown", processKeyDown, false); //Only one key at a time.
    document.addEventListener("keyup", processKeyUp, false); //Only one key at a time.
    globalState.switchInterval = setInterval(setSwitchBool, 100); //checks time since keypress
}

function switchingCheck(){ // checks if last keypress was more than 3 seconds ago.    
    var elapsedTime = Date.now() - globalState.lastKeyUpTime;
    if(elapsedTime < 3000){return true;}
    return false;
}

function setSwitchBool(){ // updates switching boolean in global state
    globalState.switching = switchingCheck();
}

currentTimeLoop();

startListeners();

// Add any general functionality here - specific functionality goes in menu().
function dispatcher(button){
    switching = globalState.switching;
    menu(button, switching); //button = string, switching = bool.
}

// button = string, switching = bool
function menu(button, switching){
    // DEBUGGING: Uncomment following to loop over globalState
    //    loopText(Object.values(globalState),1500);
    //    loopText(Object.keys(globalState),1500);
    // DEBUGGING: Uncomment following to loop over important values
    // loopText([menuState, button, switching], 1000);
    switch(menuState[0]){
    case 0: //Main menu - clock default display
      	mainMenu(button,switching); // BEING IMPLEMENTED
	break;
    case 1: //Timer menu - timer at 0 default display
	//	timerMenu(button,switching); // BEING IMPLEMENTED
	timerMenu(button, switching); // BEING IMPLEMENTED
	//	loopText(["TIMER"],1000);
	break;
    case 2: //Chess clock menu - chess clock at 5min default display
	//	chessMenu(button,switching); // NOT IMPLEMENTED
	loopText(["CHESS"],1000);
	break;
    case 3: // Overwatch menu - to be determined
	//	overwatchMenu(button,switching); // NOT IMPLEMENTED
	loopText(["OVERWATCH"],1000);
	break;
    default:
	alert("dispatcher error");
    }
}

function mainMenu(button, switching){
    //    loopText(["MAIN","CLOCK"],1000);
    switch(menuState[1]){
    case 0: // Base state when starting switching and current time is displayed 
      	mainMenu0(button,switching);
	break;
    case 1: // Reached when CLOCK text is displayed
      	mainMenu1(button,switching);
	break;
    case 2: // Reached when TIMER text is displayed
      	mainMenu2(button,switching);
	break;
    case 3: // Reached when CHESS text is displayed 
      	mainMenu3(button,switching);
	break;
    case 4: // Reached when OVERWATCH text is displayed
      	mainMenu4(button,switching);
	break;
    default:
	alert("invalid menu state");
    }
}

function mainMenu0(button, switching){ //Current time is currently being displayed.
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("CLOCK",1000);
	menuState = [0,1];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0]
	setTimeout(currentTimeLoop, 1000);
	break;
    case "right":
	loopText("CLOCK",1000);
	menuState = [0,1];
	break;
    }
}

function mainMenu1(button, switching){ //CLOCK text is currently being displayed.
    switch(button){
    case "leftShort":
	loopText("TIMER",1000);
	menuState = [0,2];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	setTimeout(currentTimeLoop, 1000);
	break;
    case "right":
	//loopText("right",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	interrupt();
	currentTimeLoop();
	break;
    }
}

function mainMenu2(button, switching){ //TIMER text is currently being displayed.
    switch(button){
    case "leftShort":
	loopText("CHESS",1000);
	menuState = [0,3];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	setTimeout(currentTimeLoop, 1000);
	break;
    case "right": 
	//loopText("right",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [1,0];
	writeTimer(ctx,globalState.currentTimer);
	break;
    }
}

function mainMenu3(button, switching){ //CHESS text is currently being displayed.
    switch(button){
    case "leftShort":
	loopText("OVERWATCH",1000);
	menuState = [0,4];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	setTimeout(currentTimeLoop, 1000);
	break;
    case "right":
	//loopText("right",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	loopText("notImplemented")
	clearInterval(globalState.currentTextInterval);
	setTimeout(currentTimeLoop, 1000);
	break;
    }
}

function mainMenu4(button, switching){ //OVERWATCH text is currently being displayed.
    switch(button){
    case "leftShort":
	loopText("CLOCK",1000);
	menuState = [0,1];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	setTimeout(currentTimeLoop, 1000);
	break;
    case "right":
	//loopText("right",1000);
	clearInterval(globalState.currentTextInterval);
	menuState = [0,0];
	loopText("notImplemented");
	clearInterval(globalState.currentTextInterval);
	setTimeout(currentTimeLoop, 1000);
	break;
    }
}

function timerMenu(button, switching){
    //  loopText(["TIMER"],1000);
    switch(menuState[1]){
    case 0: // Base state when starting switching. Current timer is being displayed.
      	timerInit(button,switching);
	break;
    case 1: // +5 MIN text is being displayed
      	timer300Sec(button,switching);
	break;
    case 2: // +1 MIN text is being displayed
      	timer60Sec(button,switching);
	break;
    case 3: // +30 SEC text is being displayed 
      	timer30Sec(button,switching);
	break;
    case 4: // +5 SEC text is being displayed
      	timer5Sec(button,switching);
	break;
    case 5: // +1 SEC text is being displayed
      	timer1Sec(button,switching);
	break;
    case 6: // START text is being displayed
      	timerStart(button,switching);
	break;
    case 7: // RESET text is being displayed
      	timerReset(button,switching);
	break;     
    default:
	alert("invalid menu state");
    }
}

function timerInit(button, switching){ //Current timer is being displayed.
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("+5 MIN",1000);
	menuState = [1,1];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	menuState = [1,1];
	addSeconds(300);
	break;
    }
}

function timer300Sec(button, switching){ //+5 MIN text is being displayed
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("+1 MIN",1000);
	menuState = [1,2];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	addSeconds(300);
	break;
    }
}

function timer60Sec(button, switching){ //+1 MIN text is being displayed
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("+30 SEC",1000);
	menuState = [1,3];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	addSeconds(60);
	break;
    }
}

function timer30Sec(button, switching){ //+30 SEC text is being displayed.
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("+5 SEC",1000);
	menuState = [1,4];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	addSeconds(30);
	break;
    }
}

function timer5Sec(button, switching){ //+5 SEC text is being displayed.
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("+1 SEC",1000);
	menuState = [1,5];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	addSeconds(5);
	break;
    }
}

function timer1Sec(button, switching){ //+1 SEC text is being displayed.
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("START",1000);
	menuState = [1,6];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	addSeconds(1);
	break;
    }
}

function timerStart(button, switching){ //START text is being displayed
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("RESET",1000);
	menuState = [1,7];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	interrupt();
	startTimer(ctx, globalState.currentTimer);
	break;
    }
}

function timerReset(button, switching){ //RESET text is being displayed
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText("+5 MIN",1000);
	menuState = [1,1];
	break;
    case "leftLong":
	//loopText("leftLong",1000);
	clearInterval(globalState.currentTextInterval);
	globalState.currentTimer = 0;
	menuState = [0,2];
	loopText("TIMER");
	break;
    case "right":
	globalState.currentTimer = 0;
	menuState = [1,0];
	addSeconds(0); //HACK used to write timer
	break;
    }
}