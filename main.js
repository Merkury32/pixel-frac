function putPixel() {
  debugger;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;
  
    var tmpa = document.getElementById("x-input").value;
    var tmpb = document.getElementById("y-input").value;

    var x = parseInt(tmpa);
    var y = parseInt(tmpb);

    var r = 50;
    var g = 0;
    var b = 0;

    var a = (y * id.width + x) * 4;
    pixels[a] = r;
    pixels[a + 1] = g;
    pixels[a + 2] = b;
    pixels[a + 3] = 255;
    
    ctx.putImageData(id, 0, 0);
}