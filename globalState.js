// Dictionary with current states and running intervals.

var globalState = {
    interrupt : false,
    currentInterval : "",
    switchInterval : "",
    currentTextInterval : "",
    keyDown : false,
    keyUp : false,
    mouseDown: false,
    mouseUp: false,
    keyDownTime: 0,
    lastKeyUpTime : 0,
    keyDownCode : "",
    switching: false,
    defaultTimer: 900,
    currentTimer: 0
};

/*
describes which menu layer program state is in.
leftShort to select from current menu options.
leftLong to go back one level
right to activate current option

menu [0,0,0] = clock (leftShort to select other menus)
menu [1,0,0] = timer [being implemented]
menu [2,0,0] = chess [not implemented]
menu [3,0,0] = overwatch [not implemented]
*/
var menuState = [0,0,0];

// Define which functions correspond with which button presses for testing.

