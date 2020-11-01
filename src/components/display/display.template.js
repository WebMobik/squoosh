import {$} from '@core/dom'
import {createCanvasImage} from './display.functions'

export function craeteDisplay() {
  return `
        <div class="img-comp-img" data-type="canvas">
        </div>
        <div class="img-comp-img" data-type="canvas" data-resize="overlay">
        </div>
    `
}

export function initDisplay($root) {
  $root.findAll('[data-type="canvas"]').each(el => {
    const elem = $(el)
    if (elem.data.resize) initOverlayMiddle(elem)
    elem.append(createCanvasImage())
  })

  initCenterSlider($root)
}

function initOverlayMiddle(elem) {
  const middle = elem.getWidth / 2 + 'px'
  elem.css({clip: `rect(0px, ${middle}, auto, 0px)`})
}

function initCenterSlider($root) {
  const slider = $.create('div', 'img-comp-slider')
  slider.attr('data-type', 'resize')
  $root.append(slider)
  const middleSlider = (window.innerWidth / 2) - (slider.getWidth / 2) + 'px'
  slider.css({left: middleSlider})
}
