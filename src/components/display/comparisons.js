export function initComparisons() {
  const x = document.querySelector('.img-comp-overlay');
  compareImages(x);
  function compareImages(img) {
    let clicked = 0
    const w = img.offsetWidth;
    /* set the width of the img element to 50%:*/
    img.style.width = (w / 2) + 'px';
    console.log(img.style.width)
    /* create slider:*/
    const slider = document.createElement('div');
    slider.setAttribute('class', 'img-comp-slider');
    /* insert slider*/
    img.parentElement.insertBefore(slider, img);
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px';
    /* execute a function when the mouse button is pressed:*/
    slider.addEventListener('mousedown', slideReady);
    /* and another function when the mouse button is released:*/
    window.addEventListener('mouseup', slideFinish);
    /* or touched (for touch screens:*/
    function slideReady(e) {
      /* prevent any other actions
        that may occur when moving over the image:*/
      e.preventDefault();
      /* the slider is now clicked and ready to move:*/
      clicked = 1;
      /* execute a function when the slider is moved:*/
      window.addEventListener('mousemove', slideMove);
    }
    function slideFinish() {
      /* the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      let pos;
      /* if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /* get the cursor's x position:*/
      pos = getCursorPos(e)
      /* prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* execute a function that will
        resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      let a = ''
      let x = 0;
      e = e || window.event;
      /* get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /* calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /* consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* resize the image:*/
      img.style.width = x + 'px';
      /* position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px';
    }
  }
}
