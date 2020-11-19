export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function equalsScale(scale) {
  if (scale < 10) {
    return Math.round(100 * scale)
  }
  return scale / 100
}

export function canvasDraw(canvas, ctx, img) {
  canvas.width = img.width != 0 ? img.width : canvas.width
  canvas.height = img.height !=0 ? img.height : canvas.height

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  return canvas
}

export function convertName(format) {
  return 'image/' + format.toLowerCase()
}
