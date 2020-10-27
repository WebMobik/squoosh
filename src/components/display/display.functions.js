export function initCenterResize($root) {
  const img = $root.find(`[data-type="overlay"]`)
  const slider = $root.find(`[data-type="resize"]`)

  const middleImg = img.getWidth / 2 + 'px'
  const middleSlider = (img.getWidth / 2) - (slider.getWidth / 2) + 'px'

  img.css({clip: `rect(0px, ${middleImg}, auto, 0px)`})
  slider.css({left: middleSlider})
}

export function dragImage(e, canvas) {
  const translateX = canvas[0].style.translateX || 0
  const translateY = canvas[0].style.translateY || 0
  console.log(translateX + ' ' + translateY)
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
