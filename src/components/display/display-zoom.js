import {getCanvas} from './display.functions'
let scale = 1

export function zoom(e, $root) {
  const delta = e.deltaY || e.detail || e.wheelDelta
  const canvas = getCanvas($root)

  if (delta > 0) scale += 0.05
  else scale -= 0.05

  const zoomer = canvas.ctx
  // let offsetX = ''
  // let offsetY = ''

  // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  // e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX

  // const x = offsetX/zoomer.offsetWidth*100
  // const y = offsetY/zoomer.offsetHeight*100

  // // background-position: 50% 50%;
  // zoomer.style.backgroundPosition = x + '% ' + y + '%';

  // canvas have a his scale !!!

  zoomer.forEach(el => el.style.transform = zoomer.style.WebkitTransform =
    zoomer.style.MsTransform = 'scale(' + scale + ')')
}
