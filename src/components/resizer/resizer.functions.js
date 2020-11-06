import {equalsScale} from '@core/utils'
import {$} from '@core/dom'

export function resizeDisplay(target, $input, canvases) {
  let scale = +canvases[0].style.getPropertyValue('--scale') || 1

  scale = scale <= 0.1 ? 0.2 : scale

  target.data.resize == 'pluse' ?
      equalsResize(canvases, $input, scale + 0.1) :
      equalsResize(canvases, $input, scale - 0.1)
}

export function rotateCanvas(canvasses) {
  const rotate = +canvasses[0].style.getPropertyValue('--rotate').slice(0, -3)

  canvasses.forEach(el => {
    const $el = $(el)

    rotate >= 270 ?
      $el.setProp('--rotate', `${0}deg`) :
      $el.setProp('--rotate', `${rotate+90}deg`)
  })
}

export function changeBackground($root) {
  const $display = $(document.querySelector('.display'))
  const $bgBtn = $root.find('[data-resize="background"]')

  if ($display.contains('bg-dark')) {
    $bgBtn.removeClass('bg-blue')
    return $display.removeClass('bg-dark')
  }

  $bgBtn.addClass('bg-blue')
  return $display.addClass('bg-dark')
}

function equalsResize(canvases, $input, equals) {
  canvases.forEach(el => el.style.setProperty('--scale', equals))
  $input.value = equalsScale(equals)
}
