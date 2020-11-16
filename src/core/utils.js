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
  canvas.width = img.width
  canvas.height = img.height

  ctx.drawImage(img, 0, 0, img.width, img.height)

  return canvas
}

export function convertName(format) {
  return 'image/' + format.toLowerCase()
}
