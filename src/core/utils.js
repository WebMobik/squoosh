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
