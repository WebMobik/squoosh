import {EditorComponent} from '@core/EditorComponent'
import {dragImage, compareImages, zoom} from './display-resize'
import {craeteDisplay, initDisplay} from './display.template'
import {$} from '@core/dom';

export class Display extends EditorComponent {
    static className = 'display'

    constructor($root, options) {
      super($root, options = {
        name: 'Display',
        listeners: ['mousedown', 'mousewheel'],
        ...options
      })
    }

    init() {
      super.init()

      this.canvases = this.$root.findAll('[data-type="canvas"]').$el

      initDisplay(this.$root)
    }

    onMousedown(event) {
      event.preventDefault()
      const $target = $(event.target)
      if ($target.data.type == 'resize') {
        const img = this.$root.find(`[data-resize="overlay"]`)
        return compareImages($target, img)
      }
      dragImage(event, this.canvases)
    }

    onMousewheel(event) {
      event.preventDefault()
      const scale = +this.canvases[0].style.getPropertyValue('--scale') || 1

      const emitScale = zoom(event, this.canvases, scale)

      this.$emit('display:scale', emitScale)
    }

    toHTML() {
      return craeteDisplay()
    }
}
