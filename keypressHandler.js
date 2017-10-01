function processKeyDown(event){
    //    alert("keydown");
    if(globalState.keyDown == true){ //Ignore keypress if one already registered.
	return;
    }
    globalState.keyDownTime = Date.now(); //Record keypress time.
    globalState.keyDown = true;
    globalState.keyDownCode = event.keyCode;
}

function processKeyUp(event){
    if(globalState.keyDown == false){ //Should never be true - alert for bug checking.
	alert("processKeyUp bug");
	return;
    }
    if(event.keyCode != globalState.keyDownCode){ //Ignore non-matching key press.
	return;
    }
    globalState.keyDown = false;
    var keyUpTime = Date.now();
    var pressTime = keyUpTime - globalState.keyDownTime;
    var button = whichButton(event, pressTime);
    //testButton(button);
    dispatcher(button);
    //mainMenu(button);
    globalState.lastKeyUpTime = keyUpTime;
}


//Modify these functions to test new features.
function testButton(button){
    if(button == "leftShort"){testLeftShort();}
    else if(button == "leftLong"){testLeftLong();}
    else if(button == "right"){testRight();}
    else {return;}
}

function testLeftShort(){
    displayText("TIMER");
}

function testLeftLong(){
    displayText("CHESS");
}

function testRight(){
    displayText("OVERWATCH");
}