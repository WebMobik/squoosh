export function initComparisons() {
  const x = document.querySelector('.img-comp-overlay');

  compareImages(x);
}

function compareImages(img) {
  let clicked = 0
  const w = img.offsetWidth;

  img.style.width = (w / 2) + 'px';

  const slider = document.querySelector('.img-comp-slider')

  img.parentElement.insertBefore(slider, img);
  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px';

  slider.addEventListener('mousedown', slideReady);

  window.addEventListener('mouseup', slideFinish);

  function slideReady(e) {
    e.preventDefault();

    clicked = 1;

    window.addEventListener('mousemove', slideMove);
  }

  function slideFinish() {
    clicked = 0;
  }

  function slideMove(e) {
    let pos;

    if (clicked == 0) return false;

    pos = getCursorPos(e)

    if (pos < 0) pos = 0;
    if (pos > w) pos = w;

    slide(pos);
  }

  function getCursorPos(e) {
    let a = ''
    let x = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();

    x = e.pageX - a.left;

    x = x - window.pageXOffset;
    return x;
  }

  function slide(x) {
    img.style.width = x + 'px';

    slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px';
  }
}
