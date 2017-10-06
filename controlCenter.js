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
    switching = false;
    if(globalState.switching){
	switching = true;
    }
    menu(button, switching); //button = string, switching = bool.
}

// button = string, switching = bool
function menu(button, switching){
    // DEBUGGING: Uncomment following to loop over globalState
    //    loopText(Object.values(globalState),1500);
    //    loopText(Object.keys(globalState),1500);
    // DEBUGGING: Uncomment following to list important values
    // loopText([menuState, button, switching], 1000);
    switch(menuState[0]){
    case 0: //Main menu - clock default display
      	mainMenu(button,switching); // BEING IMPLEMENTED
	break;
    case 1: //Timer menu - timer at 0 default display
	//	timerMenu(button,switching); // BEING IMPLEMENTED
	loopText(["TIMER"],1000);
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

function mainMenu0(button, switching){
    //    loopText(["mainMenu0"],1000);
    switch(button){
    case "leftShort":
	loopText(["leftShort"]);
	break;
    case "leftLong":
	loopText(["leftLong"]);
	break;
    case "right":
	loopText(["right"]);
	break;
    }
}