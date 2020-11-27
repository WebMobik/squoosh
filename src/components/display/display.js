import {EditorComponent} from '@core/EditorComponent'
import {dragImage, compareImages, zoom} from './display-resize'
import {craeteDisplay, initDisplay} from './display.template'
import ResizeImage from './display.functions'
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
      const canvas = $(this.canvases[0]).child(1)

      this.$on('reader:upload', async file => {
        try {
          const img = await ResizeImage.onLoad(file)
          this.$emit('image:upload', img)
        } catch (e) {
          console.log(e.message)
        }
      })
      this.$on('toolbar:convert', (format, size) => {
        ResizeImage.convertCanvasToImage(canvas, format, size)
      })
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
