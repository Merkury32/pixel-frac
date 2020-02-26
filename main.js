function putPixel() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillRect(25,25,1,1);
    ctx.stroke();
  }