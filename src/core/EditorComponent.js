import {DomListener} from './DomListener'

export class EditorComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)

    this.emitter = options.emitter
    this.unsubscribers = []
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
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
