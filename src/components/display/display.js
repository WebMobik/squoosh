import {EditorComponent} from '@core/EditorComponent'
import {compareImages} from './comparisons'
import {initCenterResize, dragImage} from './display.functions'
import {initCanvasImage} from './display.canvas'
import {$} from '@core/dom';
import {zoom} from './display-zoom';

export class Display extends EditorComponent {
    static className = 'display'

    constructor($root, options) {
      super($root, options = {
        name: 'Display',
        listeners: ['mousedown', 'mousewheel']
      })
    }

    init() {
      super.init()

      initCanvasImage(this.$root)
      initCenterResize(this.$root)
    }

    onMousedown(event) {
      const $target = $(event.target)
      if ($target.data.type == 'resize') {
        event.preventDefault()
        const img = this.$root.find(`[data-type="overlay"]`)
        return compareImages($target, img)
      }
      const $targetCanvas = this.$root.findAll('[data-canvas="img"]').$el
      dragImage(event, $targetCanvas)
    }

    onMousewheel(event) {
      zoom(event, this.$root)
    }

    toHTML() {
      return `
          <div class="resize-img" data-type="display">
              <div class="img-comp-img">
                <canvas id="canvas" data-canvas="img" />
              </div>
              <div class="img-comp-img img-comp-overlay" data-type="overlay">
                <canvas id="canvas" data-canvas="img" />
              </div>
              <div class="img-comp-slider" data-type="resize"></div>
          </div>
        `
    }
}
