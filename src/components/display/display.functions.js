export function createCanvasImage() {
  const canvas = document.createElement('canvas')
  canvas.classList.add('canvas')
  canvas.setAttribute('data-canvas', 'img')
  const ctx = canvas.getContext('2d')

  const image = new Image()
  image.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
  image.onload = drawImageActualSize(canvas, ctx, image)

  return canvas
}

function drawImageActualSize(canvas, ctx, image) {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0, image.width, image.height);
}
