// function onLoad(canvas, ctx, img, ratio) {
//   canvas.width = img.naturalWidth
//   canvas.height = img.naturalHeight

//   const oc = document.createElement('canvas')
//   const octx = oc.getContext('2d')

//   oc.width = img.naturalWidth
//   oc.height = img.naturalHeight
//   octx.drawImage(img, 0, 0, oc.width, oc.height)

//   octx.drawImage(oc, 0, 0, oc.width * ratio, oc.height * ratio)

//   ctx.drawImage(oc, 0, 0, oc.width * ratio,
//       oc.height * ratio, 0, 0, canvas.width, canvas.height)
// }

export function onLoad(file) {
  const reader = new FileReader()

  reader.readAsDataURL(file)
  reader.onload = event => {
    loadImg(event, file, reader)
  }
}

function loadImg(event, file, reader) {
  const canvases = document.querySelectorAll('[data-canvas="img"]')

  const img = new Image()
  img.src = event.target.result

  img.onload = () => {
    canvases.forEach(canvas => {
      const canvasImage = canvasDraw(canvas, img, file.type, file.name)
      convertCanvasToImage(canvasImage)
    })
  }

  reader.onerror = error => console.log(error)
}

function canvasDraw(canvas, img) {
  const ctx = canvas.getContext('2d')

  canvas.width = img.width
  canvas.height = img.height

  ctx.drawImage(img, 0, 0, img.width, img.height)
  return canvas
}

function convertCanvasToImage(canvas) {
  const image = new Image();
  image.src = canvas.toDataURL('image/png');
  console.log(image.src)
}
