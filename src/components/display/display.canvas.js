export function initCanvasImage($root) {
  const canvas = getCanvas($root)
  const image = new Image()

  image.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
  image.onload = drawImageActualSize(canvas.canvasImg, canvas.ctx, image)
}

function getCanvas($root) {
  const canvasImg = $root.findAll(`[data-canvas="img"]`).$el
  const ctx = Array.from(canvasImg).map(el => el.getContext('2d'))

  return {canvasImg, ctx}
}

function drawImageActualSize(canvas, ctx, image) {
  for (let i = 0; i < canvas.length; i++) {
    canvas[i].width = image.naturalWidth;
    canvas[i].height = image.naturalHeight;
    ctx[i].drawImage(image, 0, 0, image.width, image.height);
  }
}
