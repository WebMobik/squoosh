import {$} from '@core/dom';
import {Emitter} from '@core/Emitter'

export class Editor {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.emitter = new Emitter()
  }

  getRoot() {
    const $root = $.create('div', 'squoosh')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const componentOptions = {
        emitter: this.emitter
      }
      const component = new Component($el, componentOptions)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
