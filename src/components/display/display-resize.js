export function dragImage(e, canvas) {
  const startX = e.x
  const startY = e.y
  console.log(canvas[0].style)
  document.onmousemove = (event) => {
    canvas.forEach(el =>
      el.style.transform =
          `translate(${event.x - startX}px, ${event.y - startY}px)`
    )
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
  }
}

export function compareImages(slider, img) {
  img.before(slider.$el, img.$el)

  document.onmousemove = e => {
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
