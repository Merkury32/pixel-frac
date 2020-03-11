function pobierz(tmpa, tmpb){
  var tmpa = xInput.value;
  var tmpb = yInput.value;
  return tmpa, tmpb;
}
function putPixel(x,y,r,g,b,a) {
  debugger;
  
  var hex = colorPicker.value;

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;

    var x;
    var y;

    var tmpc = parseInt(hex, 10);

    function hex2r(hexa){
      var r = parseInt(hexa.slice(1,3), 16);
      return r;
    }
    function hex2g(hexa){
      var g = parseInt(hexa.slice(3,5), 16);
      return g;
    }
    function hex2b(hexa){
      var b = parseInt(hexa.slice(5,7), 16);
      return b;
    }

    var a = (x * id.width + y) * 4;
    pixels[a] = hex2r(hex);
    pixels[a + 1] = hex2g(hex);
    pixels[a + 2] = hex2b(hex);
    pixels[a + 3] = 255;
    
    ctx.putImageData(id, 0, 0);
}
function drawLine(x1,y1,x2,y2){
  var x1 = 1;
  var y1 = 2;
  var x2 = 200;
  var y2 = 200;
  var vx = x2-x1;
  var vy = y2-y1;
  var s = 0;
  for(var i = 0; i < 100; i++){
    var s = s + 0.01;
    var xn = x1 * s*vx
    var yn = y1 * s*vy
    var xn = Math.round(xn);
    var yn = Math.round(yn);
    putPixel(xn, yn);
  }
}