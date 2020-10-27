export function initCenterResize($root) {
  const img = $root.find(`[data-type="overlay"]`)
  const slider = $root.find(`[data-type="resize"]`)

  const middleImg = img.getWidth / 2 + 'px'
  const middleSlider = (img.getWidth / 2) - (slider.getWidth / 2) + 'px'

  img.css({clip: `rect(0px, ${middleImg}, auto, 0px)`})
  slider.css({left: middleSlider})
}

export function initCanvasImage($root) {
  const canvas = getCanvas($root)
  const image = new Image()

  image.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
  image.onload = drawImageActualSize(canvas.canvasImg, canvas.ctx, image)
}

export function getCanvas($root) {
  const canvasImg = $root.findAll(`[data-canvas="img"]`).$el
  const ctx = Array.from(canvasImg).map(el => el.getContext('2d'))

  return {canvasImg, ctx}
}

function drawImageActualSize(canvas, ctx, image) {
  for (let i = 0; i < canvas.length; i++) {
    canvas[i].width = image.naturalWidth;
    canvas[i].height = image.naturalHeight;
  }
  ctx[0].drawImage(image, 0, 0, image.width, image.height);
  ctx[1].drawImage(image, 0, 0, image.width, 200);
}
