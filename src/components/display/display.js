import {EditorComponent} from '@core/EditorComponent'
import {dragImage, compareImages, zoom} from './display-resize'
import {craeteDisplay, initDisplay} from './display.template'
import {$} from '@core/dom';

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

      initDisplay(this.$root)
    }

    onMousedown(event) {
      const $target = $(event.target)
      if ($target.data.type == 'resize') {
        event.preventDefault()
        const img = this.$root.find(`[data-resize="overlay"]`)
        return compareImages($target, img)
      }
      const $targetCanvas = this.$root.findAll('[data-type="canvas"]').$el
      dragImage(event, $targetCanvas)
    }

    onMousewheel(event) {
      event.preventDefault()
      zoom(event, this.$root)
    }

    toHTML() {
      return craeteDisplay()
    }
}
