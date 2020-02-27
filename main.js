function putPixel(x, y, r, g, b, a) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;

    var a = (y * id.width + x) * 4;
    pixels[a] = r;
    pixels[a + 1] = g;
    pixels[a + 2] = b;
    pixels[a + 3] = 255;

  ctx.putImageData(id, 0, 0);
}