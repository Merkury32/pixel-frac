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

    var hex = document.getElementById("color-picker").value;
    var tmp1 = parseInt(hex, 10);

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

    var a = (y * id.width + x) * 4;
    pixels[a] = hex2r(hex);
    pixels[a + 1] = hex2g(hex);
    pixels[a + 2] = hex2b(hex);
    pixels[a + 3] = 255;
    
    ctx.putImageData(id, 0, 0);
}