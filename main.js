canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
//x Axis 150
ctx.rect(, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
//x Axis 250
ctx.arc(, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
//x Axis 350
ctx.arc(, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
//x Axis 450
ctx.arc(, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
//x Axis 300
ctx.arc(, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
//x Axis 400
ctx.arc(, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();
