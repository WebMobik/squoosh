export function dragImage(e, canvases) {
  const startX =
    e.x - canvases[0].style.getPropertyValue('--x').replace(/px/i, '')
  const startY =
    e.y - canvases[0].style.getPropertyValue('--y').replace(/px/i, '')

  document.onmousemove = (event) => {
    canvases.forEach(el => {
      el.style.setProperty('--x', event.x - startX + 'px')
      el.style.setProperty('--y', event.y - startY + 'px')
    })
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

    img.css({clip: `rect(0px, ${pos}px, auto, 0px)`})
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
  }
}

export function zoom(e, $canvases, scale) {
  // const canvas = $canvases[0]
  // let scale = Number(canvas.style.getPropertyValue('--scale')) || 1
  const delta = e.deltaY || e.detail || e.wheelDelta
  if (delta > 0) scale -= 0.05
  else scale += 0.05

  if (scale < 0.05) scale = 0.05

  const x = e.x - window.innerWidth/2
  const y = e.y - window.innerHeight/2

  $canvases.forEach(el => {
    el.style.setProperty('--x', x + 'px')
    el.style.setProperty('--y', y + 'px')
    el.style.setProperty('--scale', scale)
  })

  return scale
}
