export function initCenterResize($root) {
  const img = $root.find(`[data-type="overlay"]`)
  const slider = $root.find(`[data-type="resize"]`)
  const middleImg = img.getWidth / 2 + 'px'
  const middleSlider = (img.getWidth / 2) - (slider.getWidth / 2) + 'px'
  img.css({clip: `rect(0px, ${middleImg}, auto, 0px)`})
  slider.css({left: middleSlider})
}
