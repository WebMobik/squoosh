import {$} from '@core/dom'

let scale = 1

export function zoom(e, $root) {
  const canvas = $root.findAll('[data-canvas="img"]')
  const delta = e.deltaY || e.detail || e.wheelDelta

  if (delta > 0) scale -= 0.05
  else scale += 0.05

  if (scale < 0.05) scale = 0.05

  const x = e.x - window.innerWidth/2
  const y = e.y - window.innerHeight/2

  canvas.$el.forEach(el =>
    $(el).css({transform: `translate(${x}px, ${y}px) scale(${scale})`}))
}
