
var container = document.getElementById('container')
var image = document.getElementById('Map2');
var isMouseDown = false;
let deltaLeft = 0, deltaTop = 0;
let x1 = 0, x2 = 0;
container.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    deltaLeft = e.clientX - e.target.offsetLeft;
    deltaTop = e.clientY - e.target.offsetTop;
});
container.addEventListener('mousemove', function (event) {
    if (isMouseDown) {
  var x = event.clientX;
  var y = event.clientY;
  let dx = x - deltaLeft;
  let dy = y - deltaTop;
  image.style.left = dx + 'px';
  image.style.top = dy + 'px';
    }
});

  container.addEventListener('mouseup', function (event) {
      isMouseDown = false;
  });