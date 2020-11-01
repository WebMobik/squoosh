export function resizeDisplay(target, $root) {
  const canvases = document.querySelectorAll('[data-type="canvas"]')
  const scale = canvases[0].style.getPropertyValue('--scale') || 1
  const value = $root.find('[data-resize="value"]').$el
  const valueSize = Number(value.value)

  if (target.data.resize == 'pluse') {
    canvases.forEach(el => el.style.setProperty('--scale', Number(scale) + 0.5))
    value.value = valueSize + 25
  }

  if (target.data.resize == 'minus') {
    canvases.forEach(el => el.style.setProperty('--scale', Number(scale) - 0.5))
    valueSize.value = valueSize - 25
  }
}
