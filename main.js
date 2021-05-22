canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
background_imgTag = new Image(); //defining a variable with a new image
background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
background_imgTag.src = background_image;   // load image

rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
}

function up()
{
if(rover_y >=0)
{
rover_y = rover_y - 10;
console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
}
}
function down()
{
if(rover_y <=500)
{
rover_y =rover_y+ 10;
console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
}
}
function left()
{
if(rover_x >= 0)
{
rover_x =rover_x - 10;
console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
}
}
function right()
{
if(rover_x <= 700)
{
rover_x =rover_x + 10;
console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
   }
}
car2_width = 120;
car1_height = 70;
car1_image= "car1.png"
car1_x=10
car1_y=100
car1_imgTag = new Image(); //defining a variable with a new image
car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
car1_imgTag.src = car1_image;   // load image
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '87')
{
up1();
console.log("up");
}
if(keyPressed == '65')
{
down1();
console.log("down");
}
if(keyPressed == '83')
{
left1();
console.log("left");
}
if(keyPressed == '68')
{
right1();
console.log("right");
}
}

function up1()
{
if(car1_y >=0)
{
car1_y = car1_y - 10;
console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
}
}
function down()
{
if(car1_y <=500)
{
car1_y =car1_y+ 10;
console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
}
}
function left()
{
if(car1r_x >= 0)
{
car1_x =car1_x - 10;
console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
}
}
function right()
{
if(car1_x <= 700)
{
car1_x =car1_x + 10;
console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
   }
}