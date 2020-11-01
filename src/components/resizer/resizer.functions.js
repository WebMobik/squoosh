import {equalsScale} from '@core/utils'

export function resizeDisplay(target, $input, canvases) {
  const scale = canvases[0].style.getPropertyValue('--scale') || 1

  if (target.data.resize == 'pluse') {
    canvases.forEach(el => el.style.setProperty('--scale', Number(scale) + 0.1))
    $input.value = equalsScale(Number(scale) + 0.1)
  }

  if (target.data.resize == 'minus') {
    canvases.forEach(el => el.style.setProperty('--scale', Number(scale) - 0.1))
    $input.value = equalsScale(Number(scale) - 0.1)
  }
}

export function rotateCanvas(canvasses) {
  const rotate =
        canvasses[0].style.getPropertyValue('--rotate').replace(/deg/i, '') || 0
  canvasses.forEach(el => {
    if (rotate >= 270) {
      return el.style.setProperty('--rotate', `${0}deg`)
    }
    el.style.setProperty('--rotate', `${Number(rotate)+90}deg`)
  })
}
