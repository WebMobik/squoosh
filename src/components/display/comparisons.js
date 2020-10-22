export function compareImages(slider, img) {
  img.before(slider.$el, img.$el)

  document.onmousemove = e => {
    //  e.pageX - img.getCoords().left - window.pageXOffset
    const pos = e.pageX
    const sliderPos = pos - (slider.getWidth / 2) + 'px'
    slider.css({left: sliderPos})

    slide(pos)
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
  }

  function slide(pos) {
    img.css({clip: `rect(0px, ${pos}px, auto, 0px)`})
  }
}
