//Functions to modifiy and display text on canvas.

//Taken from https://stackoverflow.com/questions/20551534/size-to-fit-font-on-a-canvas

function fitTextOnCanvas(text,fontface){    
    interrupt();
    clearAll(ctx);
    // start with a large font size
    var fontsize=225;

    // lower the font size until the text fits the canvas
    do{
        fontsize--;
        ctx.font=fontsize+"px "+fontface;
    }while(ctx.measureText(text).width>canvas.width - 40)
	; //To correct formatting only.

    //Center text

    var textWidth = ctx.measureText(text).width;
    var xPos= (canvas.width - textWidth) / 2;
    var yPos = 280;
    if(fontsize < 125){yPos = 240;}
    
    // draw the text
    ctx.fillText(text, xPos, yPos);
    //    alert("xpos = " + xPos + " - ypos = " + yPos + " - fontsize = " + fontsize);
}

function displayText(text){
    fitTextOnCanvas(text, "Arial", 350);
}



// Displays list of strings in a loop.
function loopText(textList, milliseconds){ //textList = array of strings, milliseconds = int
    if (typeof textList == "string"){
	textList = [textList];
    }
    clearInterval(globalState.currentTextInterval); //Clears any previous text display
    displayText(textList[0]); //Displays initial text to avoid interval delay.
    activeText = 1; //tracks next string to be displayed
    maxText = textList.length;
    
    function innerLoopText(){
	if (activeText >= maxText){
	    activeText = 0;
	}
	displayText(textList[activeText]);
	activeText += 1;
    }
    globalState.currentTextInterval = setInterval(innerLoopText, milliseconds);
}