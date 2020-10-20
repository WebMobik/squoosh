import {DOMListener} from '../../../excel-course/src/core/DomListener'

export class EditorComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}
