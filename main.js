canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//var mouseevent="empty";
var last_postion_x,Last_postion_y;
color="black";
line_width=1;

var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
//only if the sreen is a tablet or a mobile,then we decrease the canvas width and height;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

/*canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("Width").value;
mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
current_postion_x=e.clientX-canvas.offsetLeft;
current_postion_y=e.clientY-canvas.offsetTop;

if (mouseevent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
ctx.moveTo(last_postion_x,last_postion_y);
ctx.lineTo(current_postion_x,current_postion_y);
ctx.stroke();
}
last_postion_x=current_postion_x;
Last_postion_y=current_postion_y;
}*/
function clear(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}
canvas.addEventListener("touchstart",my_touchStart);

function my_touchStart(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("Width").value;
console.log("my_touchStart");
last_postion_x=e.touches[0].clientX-canvas.offsetLeft;
last_postion_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
current_postion_x=e.touches[0].clientX-canvas.offsetLeft;
current_postion_y=e.touches[0].clientY-canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
ctx.moveTo(last_postion_x,last_postion_y);
ctx.lineTo(current_postion_x,current_postion_y);
ctx.stroke();

last_postion_x=current_postion_x;
last_postion_y=current_postion_y;
}