export function createCanvasImage() {
  const canvas = document.createElement('canvas')
  canvas.classList.add('canvas')
  canvas.setAttribute('data-canvas', 'img')
  const ctx = canvas.getContext('2d')

  const image = new Image()
  image.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
  image.onload = onLoad(canvas, ctx, image, 1)

  return canvas
}

function onLoad(canvas, ctx, img, ratio) {
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight

  const oc = document.createElement('canvas');
  const octx = oc.getContext('2d');

  oc.width = img.naturalWidth;
  oc.height = img.naturalHeight;
  octx.drawImage(img, 0, 0, oc.width, oc.height);

  octx.drawImage(oc, 0, 0, oc.width * ratio, oc.height * ratio);

  ctx.drawImage(oc, 0, 0, oc.width * ratio,
      oc.height * ratio, 0, 0, canvas.width, canvas.height);
}
