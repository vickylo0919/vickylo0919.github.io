 function setup()
{
  initializeFields();
  createCanvas(400,300);
  textSize(40);
}
var choice;

function draw()
{
  background(colo(0x15, 0x62, 0x2A));
  fill(color(0xFE, 0xFF, 0x08));
  if(choice==0)
     rect(50,50,150,2);
  if(choice==1) 
     rect(50,100,150,2);
  if(choice==2) 
     rect(50,150,150,2);
   text("choice 1",50,50);
   text("choice 2",50,100);
   text("choice 3",50,150);
}
function mousePressed()
{
  choice = int(random(3));
}
function initializeFields()
{
  choice = -1;
}
