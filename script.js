var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var spawnLineY = 25;
var spawnRate = 1500;
var spawnRateOfDescent = 2;
var lastSpawn = -1;
var objects = [];
var img1 = new Image();
var images = [img1];
img1.src = "img1.jpg";

window.onload=function(){
animate();
}

console.log(images)
function spawnRandomObject()
{
    var t;
    if (Math.random() < 0.50)
    {
      t = "red";
    }
      else
      {
        t = "blue";
      }

    var object =
    {
        type: t,
        x: Math.random() * (canvas.width - 30) + 15,
        y: spawnLineY,
        image: images[Math.floor(Math.random()*images.length)]
    }

    objects.push(object);

}

function animate()
  {

    var time = Date.now();
    if (time > (lastSpawn + spawnRate))
    {
        lastSpawn = time;
        spawnRandomObject();
    }

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < objects.length; i++)
    {
      var object = objects[i];
      object.y += spawnRateOfDescent;
      ctx.drawImage(object.image, object.x, object.y, 30, 30);
    }

  }
