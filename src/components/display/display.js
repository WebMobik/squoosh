import {EditorComponent} from '@core/EditorComponent'
import {compareImages} from './comparisons'
import {initCenterResize} from './display.functions'
import {$} from '@core/dom';

export class Display extends EditorComponent {
    static className = 'display'

    constructor($root, options) {
      super($root, options = {
        name: 'Display',
        listeners: ['mousedown']
      })
    }

    init() {
      super.init()

      initCenterResize(this.$root)
    }

    onMousedown(event) {
      const $target = $(event.target)
      if ($target.data.type == 'resize') {
        event.preventDefault()
        const img = this.$root.find(`[data-type="overlay"]`)
        compareImages($target, img)
      }
    }

    toHTML() {
      return `
          <div class="resize-img">
              <div class="img-comp-img">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="editing">
              </div>
              <div class="img-comp-img img-comp-overlay" data-type="overlay">
                <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt="editing">
              </div>
              <div class="img-comp-slider" data-type="resize"></div>
          </div>
        `
    }
}
