import {EditorComponent} from '@/core/EditorComponent'
import {equalsScale} from '@/core/utils'
import {createResizer} from './resizer.template'
import {resizeDisplay, rotateCanvas} from './resizer.functions'
import {$} from '@core/dom'

export class Resizer extends EditorComponent {
  static className = 'resizer'

  constructor($root, options) {
    super($root, options = {
      name: 'Resizer',
      listeners: ['click', 'input'],
      ...options
    })

    this.canvases = null
  }

  init() {
    super.init()

    this.$input = this.$root.find('[data-resize="value"]').$el
    this.canvases = document.querySelectorAll('[data-type="canvas"]')

    this.$on('display:scale', scale => {
      this.$input.value = equalsScale(scale)
    })
  }


  toHTML() {
    return createResizer()
  }

  onClick(event) {
    event.preventDefault()
    const $target = $(event.target)
    if ($target.data.resize == 'pluse' || $target.data.resize == 'minus') {
      return resizeDisplay($target, this.$input, this.canvases)
    }

    if ($target.data.resize == 'rotation') rotateCanvas(this.canvases)
  }

  onInput(event) {
    console.log(event)
  }
}
