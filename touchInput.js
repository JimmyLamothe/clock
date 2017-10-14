function processMouseDown(event){
    //    alert("keydown");
    if(globalState.mouseDown == true){ //Ignore mousepress if one already registered.
	return;
    }
    globalState.mouseDownTime = Date.now(); //Record mousepress time.
    globalState.mouseDown = true;
}

function processMouseUp(event){
    if(globalState.mouseDown == false){ //Should never be true - alert for bug checking.
	alert("processMouseUp bug");
	return;
    }
    globalState.mouseDown = false;
    var mouseUpTime = Date.now();
    var pressTime = mouseUpTime - globalState.mouseDownTime;
    var click = getCoords(event);
    var button = whichButton(click, pressTime);
    dispatcher(button);
    globalState.lastMouseUpTime = mouseUpTime;
}


function showCoords(event){
    var x = event.clientX;
    if(x > 400)
        {
            alert('right click');

        }
    else
	{
	    alert('left click');

        }
}

function getCoords(event){
    var x = event.clientX;
    if(x > 400)
        {
            return('right');

        }
    else
	{
	    return('left');

        }
}


