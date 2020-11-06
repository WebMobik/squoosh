import {EditorComponent} from '@/core/EditorComponent'
import {equalsScale} from '@/core/utils'
import {createResizer} from './resizer.template'
import {
  resizeDisplay, rotateCanvas, changeBackground
} from './resizer.functions'
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

    switch ($target.data.resize) {
      case 'pluse':
      case 'minus':
        resizeDisplay($target, this.$input, this.canvases)
        break
      case 'rotation':
        rotateCanvas(this.canvases)
        break
      case 'background':
        changeBackground(this.$root)
        break
      default:
        break
    }
  }

  onInput(event) {
    const value = event.target.value
    const rezult = value >= 10 ? equalsScale(value) : 0.1

    this.canvases.forEach(canvas =>
      $(canvas).setProp('--scale', rezult))
  }
}
