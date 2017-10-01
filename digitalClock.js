// Various functions used to draw digital clock numbers on an HTML5 canvas.

var topPositions = {
    1:[22,74],
    2:[192,74],
    3:[422,74],
    4:[592,74]
};
var dotPositions = {
    1:[370,140],
    2:[370,290]
};
function drawDot(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart, vStart + 20 * sizeMultiple);
    ctx.lineTo(hStart + 20 * sizeMultiple, vStart + 20 * sizeMultiple);
    ctx.lineTo(hStart + 20 * sizeMultiple, vStart + 0 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
function drawLeftTop(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart, vStart + 140 * sizeMultiple);
    ctx.lineTo(hStart + 7.5 * sizeMultiple, vStart + 150 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart + 140 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart + 15 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
function drawTop(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart +150 * sizeMultiple, vStart);
    ctx.lineTo(hStart + 135 * sizeMultiple, vStart + 15 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart + 15 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
function drawBottom(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart + 150 * sizeMultiple, vStart);
    ctx.lineTo(hStart + 135 * sizeMultiple, vStart - 15 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart - 15 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
function drawRightTop(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart, vStart + 140 * sizeMultiple);
    ctx.lineTo(hStart - 7.5 * sizeMultiple, vStart + 150 * sizeMultiple);
    ctx.lineTo(hStart - 15 * sizeMultiple, vStart + 140 * sizeMultiple);
    ctx.lineTo(hStart - 15 * sizeMultiple, vStart + 15 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
function drawRightBottom(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart + 10 * sizeMultiple);
    ctx.lineTo(hStart, vStart + 150 * sizeMultiple);
    ctx.lineTo(hStart - 15 * sizeMultiple, vStart + 135 * sizeMultiple);
    ctx.lineTo(hStart - 15 * sizeMultiple, vStart + 10 * sizeMultiple);
    ctx.lineTo(hStart - 7.5 * sizeMultiple, vStart);
    ctx.closePath();
    ctx.fill();
}
function drawLeftBottom(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart + 10 * sizeMultiple);
    ctx.lineTo(hStart, vStart + 150 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart + 135 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart + 10 * sizeMultiple);
    ctx.lineTo(hStart + 7.5 * sizeMultiple, vStart);
    ctx.closePath();
    ctx.fill();
}
function drawBottom(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart + 150 * sizeMultiple, vStart);
    ctx.lineTo(hStart + 135 * sizeMultiple, vStart - 15 * sizeMultiple);
    ctx.lineTo(hStart + 15 * sizeMultiple, vStart - 15 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
function drawMiddle(ctx, hStart, vStart, sizeMultiple = 1){
    ctx.beginPath();
    ctx.moveTo(hStart, vStart);
    ctx.lineTo(hStart + 10 * sizeMultiple, vStart + 7.5 * sizeMultiple);
    ctx.lineTo(hStart + 124 * sizeMultiple, vStart + 7.5 * sizeMultiple);
    ctx.lineTo(hStart + 134 * sizeMultiple, vStart);
    ctx.lineTo(hStart + 124 * sizeMultiple, vStart - 7.5 * sizeMultiple);
    ctx.lineTo(hStart + 10 * sizeMultiple, vStart - 7.5 * sizeMultiple);
    ctx.closePath();
    ctx.fill();
}
//Position is an int from 1 to 4.
function drawNumber(ctx, position, number, sizeMultiple = 1){
    if([2,3,5,6,7,8,9,0].indexOf(number) >= 0){
	//alert([2,3,5,6,7,8,9].indexOf(number));
        drawTop(ctx, topPositions[position][0], topPositions[position][1], sizeMultiple);
    }
    if([4,5,6,8,9,0].indexOf(number) >= 0){
        drawLeftTop(ctx, topPositions[position][0] - 2, topPositions[position][1] + 2, sizeMultiple);
    }
    if([1,2,3,4,7,8,9,0].indexOf(number) >= 0){
        drawRightTop(ctx, topPositions[position][0] + 152, topPositions[position][1] + 2, sizeMultiple);
    }
    if([2,3,4,5,6,8,9].indexOf(number) >= 0){
        drawMiddle(ctx, topPositions[position][0] + 8, topPositions[position][1] + 154, sizeMultiple);
    }
    if([2,6,8,0].indexOf(number) >= 0){
        drawLeftBottom(ctx, topPositions[position][0] - 2, topPositions[position][1] + 156, sizeMultiple);
    }
    if([1,3,4,5,6,7,8,9,0].indexOf(number) >= 0){
        drawRightBottom(ctx, topPositions[position][0] + 152, topPositions[position][1] + 156, sizeMultiple);
    }
    if([2,3,5,6,8,9,0].indexOf(number) >= 0){
        drawBottom(ctx, topPositions[position][0], topPositions[position][1] + 306, sizeMultiple);
    }      
}
function drawDots(ctx, sizeMultiple = 1){
    drawDot(ctx, dotPositions[1][0], dotPositions[1][1], sizeMultiple);
    drawDot(ctx, dotPositions[2][0], dotPositions[2][1], sizeMultiple);
}
function clearPosition(ctx, position){
    ctx.fillStyle = "#000000";
    drawNumber(ctx, position, 8);
}
// Doesn't work - outline remains. Use clearAll instead.
function clearAllPositions(ctx){
    var j = [];
    for (i = 1; i < 5; i++){
	j.push(i);
	clearPosition(ctx, i);
    }
    alert(ctx);
}
function clearAll(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function writeTest(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function writeTime(ctx, hours, minutes){
    clearAll(ctx);
    var num1 = Math.floor(hours/10);
    var num2 = hours % 10;
    var num3 = Math.floor(minutes/10);
    var num4 = minutes % 10;
    drawNumber(ctx, 1, num1);
    drawNumber(ctx, 2, num2);
    drawNumber(ctx, 3, num3);
    drawNumber(ctx, 4, num4);
    drawDots(ctx);
}
