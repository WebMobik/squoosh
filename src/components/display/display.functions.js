import {canvasDraw} from '@core/utils'

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
    loadImg(event, reader)
  }
}

function loadImg(event, reader) {
  const canvases = document.querySelectorAll('[data-canvas="img"]')
  reader.onerror = error => console.log(error)

  const img = new Image()
  img.src = event.target.result

  img.onload = () => {
    canvases.forEach(canvas => {
      const ctx = canvas.getContext('2d')
      canvasDraw(canvas, ctx, img)
    })
  }
}

export function convertCanvasToImage(canvas, format, size = 0.75) {
  const image = new Image()
  console.log(window.frames)

  if (format == 'image/png') image.src = canvas.toDataURL(format)
  else image.src = canvas.toDataURL(format, size)

  image.onload = () => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, image.width, image.height)
    canvasDraw(canvas, ctx, image)
  }
}
