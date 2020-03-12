function pobierz(tmpa, tmpb){
  var tmpa = xInput.value;
  var tmpb = yInput.value;
  return tmpa, tmpb;
}

function putPixel(x,y,r,g,b,a) {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;

    var x;
    var y;

    var z = (x * id.width + y) * 4;
    pixels[z] = r*255;
    pixels[z + 1] = g*255;
    pixels[z + 2] = b*255;
    pixels[z + 3] = a;
    
    ctx.putImageData(id, 0, 0);
}

function drawLine(x1,y1,x2,y2,r,g,b){
  debugger;
  var x1 = parseInt(x1Input.value, 10)
  var y1 = parseInt(y1Input.value, 10)
  var x2 = parseInt(x2Input.value, 10)
  var y2 = parseInt(y2Input.value, 10)

  var r = 0;
  var g = 0;
  var b = 1;
  var a = 255;

  var vx = x2-x1;
  var vy = y2-y1;

  var s = 0;
  var max = 600;

  for(var i = 0; i <= max; i++){
    var s = i/max;
    var xn = x1 + s*vx;
    var yn = y1 + s*vy;
    putPixel(Math.round(xn), Math.round(yn),r,g,b,a);
  }
}