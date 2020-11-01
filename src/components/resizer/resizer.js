import {EditorComponent} from '@/core/EditorComponent'
import {createResizer} from './resizer.template'
import {resizeDisplay} from './resizer.functions'
import {$} from '@core/dom'

export class Resizer extends EditorComponent {
  static className = 'resizer'

  constructor($root, options) {
    super($root, options = {
      name: 'Resizer',
      listeners: ['click', 'input']
    })
  }

  init() {
    super.init()
  }


  toHTML() {
    return createResizer()
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.resize == 'pluse' || $target.data.resize == 'minus') {
      resizeDisplay($target, this.$root)
    }
  }

  onInput(event) {
    console.log(event)
  }
}
